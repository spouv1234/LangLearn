import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

export default function LessonScreen({ route }: Props) {
  const theme = useTheme();
  const { id } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Lesson {id}
      </Text>
      <Text style={[styles.content, { color: theme.colors.text }]}>
        This is a placeholder for lesson content. In the future, this will contain
        interactive language learning materials, including text, audio, and
        exercises.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
}); 