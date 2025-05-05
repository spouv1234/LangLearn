import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, IconButton } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { LANGUAGES } from '../types/language';
import { SPACING } from '../design/designSystem';

type Props = NativeStackScreenProps<RootStackParamList, 'LanguageSelection'>;

export default function LanguageSelectionScreen({ navigation }: Props) {
  const { colors, theme } = useTheme();

  const handleLanguageSelect = (languageId: string) => {
    if (languageId === 'zh') {
      navigation.navigate('Main', { language: LANGUAGES[languageId] });
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background[theme] }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text[theme] }]}>
          Select a Language to Learn
        </Text>
        <View style={styles.headerButtons}>
          <IconButton
            icon="chart-line"
            size={24}
            onPress={() => navigation.navigate('Stats')}
            style={styles.headerButton}
          />
          <IconButton
            icon="cog"
            size={24}
            onPress={() => navigation.navigate('Settings')}
            style={styles.headerButton}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {Object.entries(LANGUAGES).map(([id, language]) => (
          <Button
            key={id}
            mode="contained"
            onPress={() => handleLanguageSelect(id)}
            disabled={id !== 'zh'}
            style={[
              styles.button,
              id !== 'zh' && styles.disabledButton,
            ]}
            labelStyle={[
              styles.buttonLabel,
              id !== 'zh' && styles.disabledLabel,
            ]}
          >
            {`${language.flag} ${language.name}`}
            {id !== 'zh' && ' (Coming Soon)'}
          </Button>
        ))}
      </View>
      <Text style={[styles.note, { color: colors.text[theme] }]}>
        More languages coming soon! Stay tuned for updates.
      </Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  headerButton: {
    margin: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  buttonContainer: {
    gap: SPACING.md,
  },
  button: {
    marginVertical: SPACING.sm,
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonLabel: {
    fontSize: 16,
  },
  disabledLabel: {
    opacity: 0.5,
  },
  note: {
    textAlign: 'center',
    marginTop: SPACING.xl,
    fontStyle: 'italic',
    opacity: 0.8,
  },
}); 