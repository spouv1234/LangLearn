import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../design/designSystem';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainScreen({ route, navigation }: Props) {
  const { language } = route.params;
  const { colors, theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background[theme] }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text[theme] }]}>
          {`${language.flag} ${language.name}`}
        </Text>
      </View>
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