import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AppButton from '../components/common/AppButton';
import { SPACING, TYPOGRAPHY } from '../utils/constants';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const theme = useTheme();

  const features = [
    {
      title: 'Lessons',
      description: 'Start learning with interactive lessons',
      onPress: () => navigation.navigate('Lesson', { id: '1' }),
      accessibilityLabel: 'Start lessons',
      accessibilityHint: 'Double tap to begin learning with interactive lessons',
    },
    {
      title: 'Practice',
      description: 'Practice what you\'ve learned',
      onPress: () => navigation.navigate('Practice', { id: '1' }),
      accessibilityLabel: 'Start practice',
      accessibilityHint: 'Double tap to practice what you\'ve learned',
    },
    {
      title: 'Flashcards',
      description: 'Review vocabulary with flashcards',
      onPress: () => navigation.navigate('Flashcards'),
      accessibilityLabel: 'Start flashcards',
      accessibilityHint: 'Double tap to review vocabulary with flashcards',
    },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      bounces={false}
    >
      <Text
        style={[styles.title, { color: theme.colors.onSurface }]}
        accessibilityRole="header"
      >
        Welcome to LangLearn
      </Text>

      {features.map((feature, index) => (
        <Card
          key={index}
          style={[styles.card, { backgroundColor: theme.colors.surface }]}
          accessibilityRole="button"
          accessibilityLabel={feature.accessibilityLabel}
          accessibilityHint={feature.accessibilityHint}
        >
          <Card.Content>
            <Text
              style={[styles.cardTitle, { color: theme.colors.onSurface }]}
              variant="titleLarge"
            >
              {feature.title}
            </Text>
            <Text
              style={[styles.cardDescription, { color: theme.colors.onSurface }]}
              variant="bodyMedium"
            >
              {feature.description}
            </Text>
          </Card.Content>
          <Card.Actions>
            <AppButton
              title="Start"
              onPress={feature.onPress}
              variant="primary"
            />
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.md,
  },
  title: {
    ...TYPOGRAPHY.title1,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  card: {
    marginBottom: SPACING.md,
    borderRadius: 12,
  },
  cardTitle: {
    ...TYPOGRAPHY.title2,
    marginBottom: SPACING.xs,
  },
  cardDescription: {
    ...TYPOGRAPHY.body,
    opacity: 0.7,
  },
}); 