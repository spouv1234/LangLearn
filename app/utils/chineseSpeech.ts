import * as Speech from 'expo-speech';

export const CHINESE_VOICE_OPTIONS = {
  language: 'zh-CN',
  pitch: 1.0,
  rate: 0.8, // Slightly slower for better pronunciation
};

export interface ChineseWord {
  hanzi: string;
  pinyin: string;
  meaning: string;
}

export const speakChinese = async (text: string, options = CHINESE_VOICE_OPTIONS) => {
  try {
    await Speech.speak(text, options);
  } catch (error) {
    console.error('Error speaking Chinese:', error);
  }
};

export const speakChineseWithPinyin = async (word: ChineseWord) => {
  try {
    // First speak the Chinese character
    await speakChinese(word.hanzi);
    
    // Add a small delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Then speak the pinyin
    await Speech.speak(word.pinyin, {
      ...CHINESE_VOICE_OPTIONS,
      language: 'en-US', // Use English voice for pinyin
    });
    
    // Add a small delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Finally speak the meaning
    await Speech.speak(word.meaning, {
      ...CHINESE_VOICE_OPTIONS,
      language: 'en-US',
    });
  } catch (error) {
    console.error('Error speaking Chinese with pinyin:', error);
  }
};

export const stopSpeaking = () => {
  Speech.stop();
}; 