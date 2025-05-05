import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, ProgressBar, useTheme } from 'react-native-paper';
import { Flashcard } from '../components/common/Flashcard';
import AppButton from '../components/common/AppButton';
import { SPACING, TYPOGRAPHY } from '../utils/constants';

const sampleFlashcards = [
  {
    front: '你好',
    back: 'Hello',
    pinyin: 'nǐ hǎo',
  },
  {
    front: '谢谢',
    back: 'Thank you',
    pinyin: 'xiè xiè',
  },
  {
    front: '再见',
    back: 'Goodbye',
    pinyin: 'zài jiàn',
  },
];

export default function FlashcardScreen() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showPinyin, setShowPinyin] = useState(false);

  const handleCorrect = () => {
    setCorrectAnswers((prev) => prev + 1);
    if (currentIndex < sampleFlashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleIncorrect = () => {
    if (currentIndex < sampleFlashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const progress = (currentIndex + 1) / sampleFlashcards.length;
  const accuracy = correctAnswers / (currentIndex + 1);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      bounces={false}
    >
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={progress}
          color={theme.colors.primary}
          style={styles.progressBar}
        />
        <Text
          style={[styles.accuracy, { color: theme.colors.onSurface }]}
          accessibilityLabel={`Current accuracy: ${Math.round(accuracy * 100)} percent`}
        >
          Accuracy: {Math.round(accuracy * 100)}%
        </Text>
      </View>

      <View style={styles.flashcardContainer}>
        <Flashcard
          front={sampleFlashcards[currentIndex].front}
          back={sampleFlashcards[currentIndex].back}
          pinyin={showPinyin ? sampleFlashcards[currentIndex].pinyin : undefined}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
        />
      </View>

      <View style={styles.controlsContainer}>
        <AppButton
          title={showPinyin ? 'Hide Pinyin' : 'Show Pinyin'}
          onPress={() => setShowPinyin(!showPinyin)}
          variant="secondary"
          accessibilityLabel={showPinyin ? 'Hide pronunciation' : 'Show pronunciation'}
          accessibilityHint="Double tap to toggle pronunciation display"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.md,
    flexGrow: 1,
  },
  progressContainer: {
    marginBottom: SPACING.lg,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: SPACING.xs,
  },
  accuracy: {
    ...TYPOGRAPHY.subheadline,
    textAlign: 'center',
  },
  flashcardContainer: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: SPACING.xl,
  },
  controlsContainer: {
    marginTop: SPACING.lg,
  },
}); 