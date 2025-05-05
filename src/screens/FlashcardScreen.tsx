import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../design/designSystem';

type Props = NativeStackScreenProps<RootStackParamList, 'Flashcards'>;

interface Flashcard {
  front: string;
  back: string;
  pinyin?: string;
}

const flashcards: Record<string, Flashcard[]> = {
  id: [
    { front: 'Hello', back: 'Halo' },
    { front: 'Thank you', back: 'Terima kasih' },
    { front: 'Goodbye', back: 'Selamat tinggal' },
  ],
  zh: [
    { front: 'Hello', back: '你好', pinyin: 'nǐ hǎo' },
    { front: 'Thank you', back: '谢谢', pinyin: 'xiè xiè' },
    { front: 'Goodbye', back: '再见', pinyin: 'zài jiàn' },
    { front: 'Good morning', back: '早上好', pinyin: 'zǎo shàng hǎo' },
    { front: 'Good evening', back: '晚上好', pinyin: 'wǎn shàng hǎo' },
  ],
};

export default function FlashcardScreen({ route, navigation }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPinyin, setShowPinyin] = useState(false);
  const { colors, theme } = useTheme();

  // Get the current language from the route params or default to Indonesian
  const languageId = route.params?.languageId || 'id';
  const currentCards = flashcards[languageId] || flashcards.id;
  const currentCard = currentCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % currentCards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + currentCards.length) % currentCards.length);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background[theme] }]}>
      <Text style={[styles.title, { color: colors.text[theme] }]}>
        Flashcards
      </Text>
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.primary[theme] }]}
        onPress={() => setIsFlipped(!isFlipped)}
      >
        <Text style={styles.cardText}>
          {isFlipped ? currentCard.back : currentCard.front}
        </Text>
        {isFlipped && currentCard.pinyin && showPinyin && (
          <Text style={styles.pinyinText}>{currentCard.pinyin}</Text>
        )}
      </TouchableOpacity>
      <View style={styles.controls}>
        <IconButton
          icon="arrow-left"
          size={30}
          onPress={handlePrevious}
          style={styles.controlButton}
        />
        {currentCard.pinyin && (
          <IconButton
            icon={showPinyin ? "eye-off" : "eye"}
            size={30}
            onPress={() => setShowPinyin(!showPinyin)}
            style={styles.controlButton}
          />
        )}
        <IconButton
          icon="arrow-right"
          size={30}
          onPress={handleNext}
          style={styles.controlButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  card: {
    width: '80%',
    aspectRatio: 1.5,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xl,
    elevation: 4,
  },
  cardText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  pinyinText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: SPACING.sm,
    fontStyle: 'italic',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButton: {
    marginHorizontal: SPACING.md,
  },
}); 