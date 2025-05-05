import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../design/designSystem';

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

export default function LessonScreen({ route, navigation }: Props) {
  const { lessonId } = route.params;
  const { colors, theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background[theme] }]}>
      <Text style={[styles.title, { color: colors.text[theme] }]}>
        Lesson {lessonId}
      </Text>
      <Text style={[styles.content, { color: colors.text[theme] }]}>
        This is a placeholder for lesson content. In a real app, this would contain
        the actual lesson material, exercises, and interactive elements.
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Practice', { practiceId: lessonId })}
        style={styles.button}
      >
        Practice What You've Learned
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