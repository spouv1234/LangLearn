import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import ProgressBar from '../components/common/ProgressBar';
import { SPACING } from '../design/designSystem';
import { LANGUAGES } from '../types/language';

type Props = NativeStackScreenProps<RootStackParamList, 'Stats'>;

export default function StatsScreen({ navigation }: Props) {
  const { colors, theme } = useTheme();
  const { userProgress } = useUser();

  const calculateOverallProgress = () => {
    const totalLanguages = Object.keys(LANGUAGES).length;
    const completedLanguages = Object.keys(userProgress).length;
    return completedLanguages / totalLanguages;
  };

  const getLanguageStats = (languageId: string) => {
    const progress = userProgress[languageId];
    if (!progress) return null;

    const totalLessons = 10; // This should come from your lesson data
    const completedLessons = progress.completedLessons.length;
    const masteredWords = progress.masteredWords.length;
    const difficultWords = progress.difficultWords.length;

    return {
      lessonProgress: completedLessons / totalLessons,
      masteredWords,
      difficultWords,
      lastStudied: new Date(progress.lastStudied).toLocaleDateString(),
    };
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background[theme] }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.title, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
        Your Learning Progress
      </Text>

      <Card style={[styles.card, { backgroundColor: theme === 'dark' ? '#2D2D2D' : '#F5F5F5' }]}>
        <Card.Content>
          <Text style={[styles.cardTitle, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
            Overall Progress
          </Text>
          <ProgressBar
            progress={calculateOverallProgress()}
            label="Languages Started"
          />
        </Card.Content>
      </Card>

      {Object.entries(LANGUAGES).map(([id, language]) => {
        const stats = getLanguageStats(id);
        if (!stats) return null;

        return (
          <Card key={id} style={[styles.card, { backgroundColor: theme === 'dark' ? '#2D2D2D' : '#F5F5F5' }]}>
            <Card.Content>
              <Text style={[styles.cardTitle, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
                {`${language.flag} ${language.name}`}
              </Text>
              <ProgressBar
                progress={stats.lessonProgress}
                label="Lessons Completed"
              />
              <View style={styles.statsRow}>
                <Text style={[styles.stat, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
                  Mastered Words: {stats.masteredWords}
                </Text>
                <Text style={[styles.stat, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
                  Difficult Words: {stats.difficultWords}
                </Text>
              </View>
              <Text style={[styles.lastStudied, { color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }]}>
                Last Studied: {stats.lastStudied}
              </Text>
              <Button
                mode="contained"
                onPress={() => navigation.navigate('Main', { language })}
                style={[styles.button, { backgroundColor: theme === 'dark' ? '#2D2D2D' : '#F5F5F5' }]}
                labelStyle={{ color: theme === 'dark' ? '#E0E0E0' : '#1A1A1A' }}
              >
                Continue Learning
              </Button>
            </Card.Content>
          </Card>
        );
      })}
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.md,
  },
  stat: {
    fontSize: 14,
  },
  lastStudied: {
    fontSize: 12,
    marginTop: SPACING.sm,
    fontStyle: 'italic',
  },
  button: {
    marginTop: SPACING.md,
  },
}); 