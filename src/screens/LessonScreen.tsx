import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Text } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

const LessonScreen: React.FC<Props> = ({ route }) => {
  const { lessonId } = route.params;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Lesson {lessonId}</Title>
      <Text>Lesson content will go here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LessonScreen; 