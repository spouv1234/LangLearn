import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../design/designSystem';

type Props = NativeStackScreenProps<RootStackParamList, 'Practice'>;

export default function PracticeScreen({ route, navigation }: Props) {
  const { practiceId } = route.params;
  const { colors, theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background[theme] }]}>
      <Text style={[styles.title, { color: colors.text[theme] }]}>
        Practice {practiceId}
      </Text>
      <Text style={[styles.content, { color: colors.text[theme] }]}>
        This is a placeholder for practice exercises. In a real app, this would contain
        interactive exercises, quizzes, and other practice activities to reinforce
        the lesson material.
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Flashcards')}
        style={styles.button}
      >
        Review with Flashcards
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: SPACING.xl,
  },
  button: {
    marginVertical: SPACING.sm,
  },
}); 