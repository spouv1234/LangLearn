import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    secondary: '#03dac6',
    error: '#b00020',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
    onSurface: '#000000',
    disabled: 'rgba(0, 0, 0, 0.26)',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: '#f50057',
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#bb86fc',
    secondary: '#03dac6',
    error: '#cf6679',
    background: '#121212',
    surface: '#121212',
    text: '#ffffff',
    onSurface: '#ffffff',
    disabled: 'rgba(255, 255, 255, 0.38)',
    placeholder: 'rgba(255, 255, 255, 0.38)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: '#ff80ab',
  },
}; 