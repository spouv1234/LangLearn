import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4A90E2',
    secondary: '#FF6B6B',
    accent: '#4ECDC4',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#2C3E50',
    error: '#FF5252',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  fonts: {
    ...MD3LightTheme.fonts,
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700',
    },
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#6BA4E8',
    secondary: '#FF8E8E',
    accent: '#6ED6D0',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#ECF0F1',
    error: '#FF5252',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  fonts: {
    ...MD3DarkTheme.fonts,
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700',
    },
  },
}; 