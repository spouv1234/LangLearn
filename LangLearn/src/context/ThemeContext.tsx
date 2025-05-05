import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING, SIZING, ELEVATION, BORDER_RADIUS } from '../design/designSystem';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: typeof COLORS;
  typography: typeof TYPOGRAPHY;
  spacing: typeof SPACING;
  sizing: typeof SIZING;
  elevation: typeof ELEVATION;
  borderRadius: typeof BORDER_RADIUS;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemTheme = useColorScheme() as ThemeType;
  const [theme, setTheme] = useState<ThemeType>(systemTheme);

  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
    colors: COLORS,
    typography: TYPOGRAPHY,
    spacing: SPACING,
    sizing: SIZING,
    elevation: ELEVATION,
    borderRadius: BORDER_RADIUS,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 