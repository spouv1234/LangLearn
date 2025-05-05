import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './src/context/ThemeContext';
import { UserProvider } from './src/context/UserContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <PaperProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </UserProvider>
  );
} 