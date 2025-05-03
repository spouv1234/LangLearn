import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { speakChineseWithPinyin, ChineseWord } from '../utils/chineseSpeech';

interface ChineseSpeechButtonProps {
  word: ChineseWord;
  showPinyin?: boolean;
  size?: number;
  color?: string;
}

export const ChineseSpeechButton: React.FC<ChineseSpeechButtonProps> = ({
  word,
  showPinyin = true,
  size = 24,
  color = '#000',
}) => {
  const handlePress = async () => {
    await speakChineseWithPinyin(word);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Ionicons name="volume-medium" size={size} color={color} />
      </TouchableOpacity>
      {showPinyin && (
        <Text style={styles.pinyin}>{word.pinyin}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  pinyin: {
    fontSize: 14,
    color: '#666',
  },
}); 