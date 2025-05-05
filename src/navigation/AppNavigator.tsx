import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens (we'll create these next)
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import HomeScreen from '../screens/HomeScreen';
import LessonScreen from '../screens/LessonScreen';
import PracticeScreen from '../screens/PracticeScreen';
import FlashcardScreen from '../screens/FlashcardScreen';

export type RootStackParamList = {
  LanguageSelection: undefined;
  Home: undefined;
  Lesson: { lessonId: string };
  Practice: { practiceId: string };
  Flashcards: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LanguageSelection"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4A90E2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="LanguageSelection" 
          component={LanguageSelectionScreen} 
          options={{ title: 'LangLearn' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'LangLearn' }} 
        />
        <Stack.Screen 
          name="Lesson" 
          component={LessonScreen} 
          options={{ title: 'Lesson' }} 
        />
        <Stack.Screen 
          name="Practice" 
          component={PracticeScreen} 
          options={{ title: 'Practice' }} 
        />
        <Stack.Screen 
          name="Flashcards" 
          component={FlashcardScreen} 
          options={{ title: 'Flashcards' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 