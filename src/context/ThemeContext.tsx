/**
 * ThemeContext
 * 
 * Provides theme management functionality for the entire application.
 * Supports light and dark themes with consistent colors, spacing, and typography.
 * Uses React's Context API to make theme variables and toggle function available throughout the app.
 */

import React, { createContext, useContext, useState } from 'react';

// Type definition for theme modes
export type Theme = 'light' | 'dark';

// Interface defining the shape of our theme context
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

// Create the context with undefined as initial value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom hook to use the theme context
 * Throws an error if used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * ThemeProvider Component
 * 
 * Wraps the application and provides theme-related values and functions
 * to all child components through React Context.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme state with dark mode as default
  const [theme, setTheme] = useState<Theme>('dark');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Theme color definitions
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