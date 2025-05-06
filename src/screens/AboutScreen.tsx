import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../design/designSystem';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function AboutScreen({ navigation }: Props) {
  const { theme, colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background[theme] }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.title, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
        The Developer
      </Text>

      <Card style={[styles.card, { backgroundColor: theme === 'dark' ? '#2D2D2D' : '#F5F5F5' }]}>
        <Card.Content>
          <Text style={[styles.cardTitle, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
            Sophal Pouv
          </Text>
          <Text style={[styles.description, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
            The creator of LangLearn, a passionate developer dedicated to making language learning accessible and engaging for everyone.
          </Text>
        </Card.Content>
      </Card>

      <Card style={[styles.card, { backgroundColor: theme === 'dark' ? '#2D2D2D' : '#F5F5F5' }]}>
        <Card.Content>
          <Text style={[styles.cardTitle, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
            Contact Information
          </Text>
          <Text style={[styles.description, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
            Email: sophal_pouv@yahoo.com
          </Text>
        </Card.Content>
      </Card>

      <Button
        mode="outlined"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        labelStyle={{ color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }}
      >
        Back to Settings
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  card: {
    marginBottom: SPACING.lg,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  backButton: {
    marginTop: SPACING.xl,
  },
}); 