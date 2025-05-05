import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';
import Flashcard from '../components/common/Flashcard';

const sampleCards = [
  { front: '你好', back: 'Hello', pinyin: 'nǐ hǎo' },
  { front: '谢谢', back: 'Thank you', pinyin: 'xiè xiè' },
  { front: '再见', back: 'Goodbye', pinyin: 'zài jiàn' },
  { front: '早上好', back: 'Good morning', pinyin: 'zǎo shàng hǎo' },
  { front: '晚上好', back: 'Good evening', pinyin: 'wǎn shàng hǎo' },
];

const FlashcardScreen: React.FC = () => {
  const { theme } = useTheme();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showPinyin, setShowPinyin] = useState(false);

  const handleCorrect = () => {
    setCorrectAnswers(prev => prev + 1);
    if (currentCardIndex < sampleCards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  const handleIncorrect = () => {
    if (currentCardIndex < sampleCards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  const progress = (currentCardIndex + 1) / sampleCards.length;
  const accuracy = (correctAnswers / (currentCardIndex + 1)) * 100;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.progressContainer}>
        <Text style={[styles.progressText, { color: theme.colors.text }]}>
          Card {currentCardIndex + 1} of {sampleCards.length}
        </Text>
        <ProgressBar
          progress={progress}
          color={theme.colors.primary}
          style={styles.progressBar}
        />
        <Text style={[styles.accuracyText, { color: theme.colors.text }]}>
          Accuracy: {accuracy.toFixed(1)}%
        </Text>
      </View>

      <Flashcard
        front={sampleCards[currentCardIndex].front}
        back={`${sampleCards[currentCardIndex].back}\n${
          showPinyin ? sampleCards[currentCardIndex].pinyin : ''
        }`}
        onCorrect={handleCorrect}
        onIncorrect={handleIncorrect}
      />

      <Button
        mode="outlined"
        onPress={() => setShowPinyin(!showPinyin)}
        style={styles.pinyinButton}
      >
        {showPinyin ? 'Hide Pinyin' : 'Show Pinyin'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  accuracyText: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'right',
  },
  pinyinButton: {
    marginTop: 20,
  },
});

export default FlashcardScreen; 