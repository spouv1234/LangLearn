import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './src/context/ThemeContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useTheme } from './src/context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();
  return (
    <PaperProvider theme={theme}>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
      <AppNavigator />
    </PaperProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
} 