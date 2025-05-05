import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Language } from '../types/language';

interface UserProgress {
  languageId: string;
  completedLessons: string[];
  practiceScores: Record<string, number>;
  masteredWords: string[];
  difficultWords: string[];
  lastStudied: Date;
}

interface UserContextType {
  userProgress: Record<string, UserProgress>;
  updateProgress: (languageId: string, progress: Partial<UserProgress>) => void;
  addMasteredWord: (languageId: string, word: string) => void;
  addDifficultWord: (languageId: string, word: string) => void;
  getLanguageProgress: (languageId: string) => UserProgress;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<Record<string, UserProgress>>({});

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const savedProgress = await AsyncStorage.getItem('userProgress');
      if (savedProgress) {
        setUserProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const saveProgress = async (progress: Record<string, UserProgress>) => {
    try {
      await AsyncStorage.setItem('userProgress', JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const updateProgress = (languageId: string, newProgress: Partial<UserProgress>) => {
    setUserProgress(prev => {
      const updated = {
        ...prev,
        [languageId]: {
          ...(prev[languageId] || {
            languageId,
            completedLessons: [],
            practiceScores: {},
            masteredWords: [],
            difficultWords: [],
            lastStudied: new Date(),
          }),
          ...newProgress,
          lastStudied: new Date(),
        },
      };
      saveProgress(updated);
      return updated;
    });
  };

  const addMasteredWord = (languageId: string, word: string) => {
    setUserProgress(prev => {
      const currentProgress = prev[languageId] || {
        languageId,
        completedLessons: [],
        practiceScores: {},
        masteredWords: [],
        difficultWords: [],
        lastStudied: new Date(),
      };

      if (!currentProgress.masteredWords.includes(word)) {
        const updated = {
          ...prev,
          [languageId]: {
            ...currentProgress,
            masteredWords: [...currentProgress.masteredWords, word],
            difficultWords: currentProgress.difficultWords.filter(w => w !== word),
          },
        };
        saveProgress(updated);
        return updated;
      }
      return prev;
    });
  };

  const addDifficultWord = (languageId: string, word: string) => {
    setUserProgress(prev => {
      const currentProgress = prev[languageId] || {
        languageId,
        completedLessons: [],
        practiceScores: {},
        masteredWords: [],
        difficultWords: [],
        lastStudied: new Date(),
      };

      if (!currentProgress.difficultWords.includes(word)) {
        const updated = {
          ...prev,
          [languageId]: {
            ...currentProgress,
            difficultWords: [...currentProgress.difficultWords, word],
          },
        };
        saveProgress(updated);
        return updated;
      }
      return prev;
    });
  };

  const getLanguageProgress = (languageId: string): UserProgress => {
    return userProgress[languageId] || {
      languageId,
      completedLessons: [],
      practiceScores: {},
      masteredWords: [],
      difficultWords: [],
      lastStudied: new Date(),
    };
  };

  return (
    <UserContext.Provider
      value={{
        userProgress,
        updateProgress,
        addMasteredWord,
        addDifficultWord,
        getLanguageProgress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}; 