import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

interface SpeechButtonProps {
  text: string;
  language?: string;
  size?: number;
  color?: string;
}

export const SpeechButton: React.FC<SpeechButtonProps> = ({
  text,
  language = 'en',
  size = 24,
  color = '#000',
}) => {
  const speak = async () => {
    try {
      await Speech.speak(text, {
        language,
        pitch: 1.0,
        rate: 0.9,
      });
    } catch (error) {
      console.error('Error speaking:', error);
    }
  };

  return (
    <TouchableOpacity onPress={speak} style={styles.button}>
      <Ionicons name="volume-medium" size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
}); 