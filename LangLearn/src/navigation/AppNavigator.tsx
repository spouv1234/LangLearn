import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../design/designSystem';

// Import screens
import OnboardingScreen from '../screens/OnboardingScreen';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Onboarding: undefined;
  LanguageSelection: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: COLORS.background[theme],
          },
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 