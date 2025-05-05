import React, { createContext, useContext, useState } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: {
    background: {
      light: string;
      dark: string;
    };
    text: {
      light: string;
      dark: string;
    };
    primary: {
      light: string;
      dark: string;
    };
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const colors = {
    background: {
      light: '#FFFFFF',
      dark: '#121212',
    },
    text: {
      light: '#000000',
      dark: '#FFFFFF',
    },
    primary: {
      light: '#6200EE',
      dark: '#BB86FC',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}; 