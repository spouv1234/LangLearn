/**
 * MainScreen Component
 * 
 * This screen is displayed after a user selects a language to learn.
 * It shows the selected language with its flag and provides three main learning options:
 * 1. Start Lesson - Begin a structured learning session
 * 2. Practice - Review and practice learned content
 * 3. Flashcards - Study using flashcard method
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../design/designSystem';

// Props type definition using React Navigation's typing system
type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainScreen({ route, navigation }: Props) {
  // Extract the selected language from navigation params
  const { language } = route.params;
  // Get theme colors and current theme mode from context
  const { colors, theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background[theme] }]}>
      {/* Header section displaying the selected language */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text[theme] }]}>
          {`${language.flag} ${language.name}`}
        </Text>
      </View>

      {/* Main navigation buttons for different learning modes */}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Lesson', { lessonId: '1' })}
          style={styles.button}
        >
          Start Lesson
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Practice', { practiceId: '1' })}
          style={styles.button}
        >
          Practice
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Flashcards', { languageId: language.id })}
          style={styles.button}
        >
          Flashcards
        </Button>
      </View>
    </View>
  );
}

// Styles for layout and appearance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
  },
  header: {
    marginBottom: SPACING.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    gap: SPACING.md,
  },
  button: {
    marginVertical: SPACING.sm,
  },
}); 