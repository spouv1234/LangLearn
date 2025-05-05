import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../context/ThemeContext';
import AppIcon from '../components/common/AppIcon';
import { SIZING } from '../design/designSystem';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import LessonsScreen from '../screens/LessonsScreen';
import PracticeScreen from '../screens/PracticeScreen';
import FlashcardsScreen from '../screens/FlashcardScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type TabParamList = {
  Home: undefined;
  Lessons: undefined;
  Practice: undefined;
  Flashcards: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const { theme, colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface[theme],
          borderTopColor: colors.neutral[400],
          height: SIZING.tabBar.height,
          paddingBottom: SIZING.tabBar.paddingBottom,
          paddingTop: SIZING.tabBar.paddingTop,
        },
        tabBarActiveTintColor: colors.primary[theme],
        tabBarInactiveTintColor: colors.neutral[700],
        tabBarLabelStyle: {
          ...SIZING.tabBar.label,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="home" size="md" color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Lessons"
        component={LessonsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="book" size="md" color={color} />
          ),
          tabBarLabel: 'Lessons',
        }}
      />
      <Tab.Screen
        name="Practice"
        component={PracticeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="quiz" size="md" color={color} />
          ),
          tabBarLabel: 'Practice',
        }}
      />
      <Tab.Screen
        name="Flashcards"
        component={FlashcardsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="flashcards" size="md" color={color} />
          ),
          tabBarLabel: 'Flashcards',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="settings" size="md" color={color} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
} 