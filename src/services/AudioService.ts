import { Audio } from 'expo-av';

class AudioService {
  private static instance: AudioService;
  private sound: Audio.Sound | null = null;

  private constructor() {}

  public static getInstance(): AudioService {
    if (!AudioService.instance) {
      AudioService.instance = new AudioService();
    }
    return AudioService.instance;
  }

  public async playPronunciation(text: string, language: string = 'zh'): Promise<void> {
    try {
      // Stop any currently playing sound
      if (this.sound) {
        await this.sound.unloadAsync();
      }

      // Create a new sound object
      const { sound } = await Audio.Sound.createAsync(
        { uri: this.getAudioUrl(text, language) },
        { shouldPlay: true }
      );
      this.sound = sound;

      // Play the sound
      await sound.playAsync();
    } catch (error) {
      console.error('Error playing pronunciation:', error);
    }
  }

  private getAudioUrl(text: string, language: string): string {
    // Using Google Translate TTS API as an example
    // Note: In a production app, you should use a proper TTS service
    const encodedText = encodeURIComponent(text);
    return `https://translate.google.com/translate_tts?ie=UTF-8&tl=${language}&client=tw-ob&q=${encodedText}`;
  }

  public async cleanup(): Promise<void> {
    if (this.sound) {
      await this.sound.unloadAsync();
      this.sound = null;
    }
  }
}

export default AudioService; 