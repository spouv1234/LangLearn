import React, { useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Text, IconButton, useTheme } from 'react-native-paper';
import { AudioService } from '../../services/AudioService';
import { SPACING, TYPOGRAPHY, ACCESSIBILITY } from '../../utils/constants';

type FlashcardProps = {
  front: string;
  back: string;
  pinyin?: string;
  onCorrect: () => void;
  onIncorrect: () => void;
};

export default function Flashcard({
  front,
  back,
  pinyin,
  onCorrect,
  onIncorrect,
}: FlashcardProps) {
  const theme = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = new Animated.Value(0);

  const flipCard = () => {
    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
  };

  const playAudio = async () => {
    if (pinyin) {
      await AudioService.playPronunciation(pinyin);
    }
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
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
      <TouchableOpacity
        onPress={flipCard}
        style={styles.cardContainer}
        accessibilityRole="button"
        accessibilityLabel={isFlipped ? 'Flip card to front' : 'Flip card to back'}
        accessibilityHint="Double tap to flip the card"
      >
        <Animated.View
          style={[
            styles.card,
            frontAnimatedStyle,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          <Text
            style={[styles.text, { color: theme.colors.onSurface }]}
            variant="displayMedium"
          >
            {front}
          </Text>
          {pinyin && (
            <IconButton
              icon="volume-high"
              size={24}
              onPress={playAudio}
              style={styles.audioButton}
              accessibilityLabel="Play pronunciation"
              accessibilityHint="Double tap to hear the pronunciation"
            />
          )}
        </Animated.View>

        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            backAnimatedStyle,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          <Text
            style={[styles.text, { color: theme.colors.onSurface }]}
            variant="displayMedium"
          >
            {back}
          </Text>
          {pinyin && (
            <Text
              style={[styles.pinyin, { color: theme.colors.onSurface }]}
              variant="titleMedium"
            >
              {pinyin}
            </Text>
          )}
          <View style={styles.buttonContainer}>
            <IconButton
              icon="check"
              size={32}
              onPress={onCorrect}
              style={[styles.button, { backgroundColor: theme.colors.primary }]}
              iconColor={theme.colors.onPrimary}
              accessibilityLabel="Mark as correct"
              accessibilityHint="Double tap to mark this card as correct"
            />
            <IconButton
              icon="close"
              size={32}
              onPress={onIncorrect}
              style={[styles.button, { backgroundColor: theme.colors.error }]}
              iconColor={theme.colors.onError}
              accessibilityLabel="Mark as incorrect"
              accessibilityHint="Double tap to mark this card as incorrect"
            />
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '100%',
    aspectRatio: 1.5,
    perspective: 1000,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: 16,
    padding: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBack: {
    transform: [{ rotateY: '180deg' }],
  },
  text: {
    ...TYPOGRAPHY.title1,
    textAlign: 'center',
  },
  pinyin: {
    marginTop: SPACING.sm,
    opacity: 0.7,
  },
  audioButton: {
    position: 'absolute',
    bottom: SPACING.sm,
    right: SPACING.sm,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: SPACING.md,
    flexDirection: 'row',
    gap: SPACING.md,
  },
  button: {
    width: ACCESSIBILITY.minimumTouchTargetSize,
    height: ACCESSIBILITY.minimumTouchTargetSize,
    borderRadius: ACCESSIBILITY.minimumTouchTargetSize / 2,
  },
}); 