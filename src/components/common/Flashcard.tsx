import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Text, useTheme, IconButton } from 'react-native-paper';
import { useTheme as useAppTheme } from '../../context/ThemeContext';
import AudioService from '../../services/AudioService';

type FlashcardProps = {
  front: string;
  back: string;
  pinyin?: string;
  onCorrect: () => void;
  onIncorrect: () => void;
};

const Flashcard: React.FC<FlashcardProps> = ({ front, back, pinyin, onCorrect, onIncorrect }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateAnimation] = useState(new Animated.Value(0));
  const { theme } = useAppTheme();
  const { colors } = useTheme();
  const audioService = AudioService.getInstance();

  useEffect(() => {
    return () => {
      audioService.cleanup();
    };
  }, []);

  const flipCard = () => {
    Animated.spring(rotateAnimation, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
  };

  const playPronunciation = async () => {
    await audioService.playPronunciation(front);
  };

  const frontInterpolate = rotateAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = rotateAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={flipCard}>
        <Animated.View
          style={[
            styles.card,
            frontAnimatedStyle,
            { backgroundColor: colors.surface },
          ]}
        >
          <View style={styles.cardContent}>
            <Text style={[styles.text, { color: colors.text }]}>{front}</Text>
            {pinyin && <Text style={[styles.pinyin, { color: colors.text }]}>{pinyin}</Text>}
            <IconButton
              icon="volume-high"
              size={24}
              onPress={playPronunciation}
              style={styles.audioButton}
            />
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            backAnimatedStyle,
            { backgroundColor: colors.surface },
          ]}
        >
          <View style={styles.cardContent}>
            <Text style={[styles.text, { color: colors.text }]}>{back}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>

      {isFlipped && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.error }]}
            onPress={onIncorrect}
          >
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.success }]}
            onPress={onCorrect}
          >
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    position: 'absolute',
  },
  cardBack: {
    position: 'absolute',
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  pinyin: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 220,
    gap: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  audioButton: {
    marginTop: 16,
  },
});

export default Flashcard; 