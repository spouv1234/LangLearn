import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Language } from '../types/language';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import MainScreen from '../screens/MainScreen';
import LessonScreen from '../screens/LessonScreen';
import PracticeScreen from '../screens/PracticeScreen';
import FlashcardScreen from '../screens/FlashcardScreen';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

export type RootStackParamList = {
  LanguageSelection: undefined;
  Main: { language: Language };
  Lesson: { lessonId: string };
  Practice: { practiceId: string };
  Flashcards: { languageId: string };
  Stats: undefined;
  Settings: undefined;
  About: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="LanguageSelection">
      <Stack.Screen
        name="LanguageSelection"
        component={LanguageSelectionScreen}
        options={{ title: 'Select Language' }}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={({ route }) => ({
          title: `${route.params.language.flag} ${route.params.language.name}`,
        })}
      />
      <Stack.Screen
        name="Lesson"
        component={LessonScreen}
        options={({ route }) => ({
          title: `Lesson ${route.params.lessonId}`,
        })}
      />
      <Stack.Screen
        name="Practice"
        component={PracticeScreen}
        options={({ route }) => ({
          title: `Practice ${route.params.practiceId}`,
        })}
      />
      <Stack.Screen
        name="Flashcards"
        component={FlashcardScreen}
        options={{ title: 'Flashcards' }}
      />
      <Stack.Screen
        name="Stats"
        component={StatsScreen}
        options={{ title: 'Your Progress' }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About' }}
      />
    </Stack.Navigator>
  );
} 