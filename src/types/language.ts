export interface Language {
  id: string;
  name: string;
  flag: string;
}

export const LANGUAGES: Record<string, Language> = {
  id: { id: 'id', name: 'Indonesian', flag: '🇮🇩' },
  es: { id: 'es', name: 'Spanish', flag: '🇪🇸' },
  fr: { id: 'fr', name: 'French', flag: '🇫🇷' },
  zh: { id: 'zh', name: 'Chinese', flag: '🇨🇳' },
}; 