import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title, Card } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Title style={[styles.title, { color: theme.colors.text }]}>Welcome to LangLearn</Title>
      
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Title style={{ color: theme.colors.text }}>Start Learning</Title>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('Lesson', { lessonId: '1' })}
          >
            Begin Lesson
          </Button>
        </Card.Actions>
      </Card>

      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Title style={{ color: theme.colors.text }}>Practice</Title>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="contained"
            onPress={() => navigation.navigate('Practice', { practiceId: '1' })}
          >
            Start Practice
          </Button>
        </Card.Actions>
      </Card>

      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Title style={{ color: theme.colors.text }}>Flashcards</Title>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="contained"
            onPress={() => navigation.navigate('Flashcards')}
          >
            Start Flashcards
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    marginVertical: 10,
  },
});

export default HomeScreen; 