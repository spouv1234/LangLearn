/**
 * LanguageSelectionScreen Component
 * 
 * This is the main entry point for users to select their desired learning language.
 * Currently, only Chinese is fully implemented, with other languages marked as coming soon.
 * The screen also provides access to user statistics and app settings through header buttons.
 */

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, IconButton } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { LANGUAGES } from '../types/language';
import { SPACING } from '../design/designSystem';

// Props type definition using React Navigation's typing system
type Props = NativeStackScreenProps<RootStackParamList, 'LanguageSelection'>;

export default function LanguageSelectionScreen({ navigation }: Props) {
  // Get theme colors and current theme mode from context
  const { colors, theme } = useTheme();

  /**
   * Handles the language selection action
   * Currently only Chinese (zh) is enabled, other languages are disabled
   */
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
      {/* Header section with title and navigation buttons */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: '#000' }]}>
          Choose Your Language
        </Text>
        <View style={styles.headerButtons}>
          <IconButton
            icon="chart-line"
            size={24}
            onPress={() => navigation.navigate('Stats')}
            style={styles.headerButton}
            iconColor="#000"
          />
          <IconButton
            icon="cog"
            size={24}
            onPress={() => navigation.navigate('Settings')}
            style={styles.headerButton}
            iconColor="#000"
          />
        </View>
      </View>

      {/* Language selection buttons */}
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
              { color: '#000' }
            ]}
          >
            {`${language.flag} ${language.name}`}
            {id !== 'zh' && ' (Coming Soon)'}
          </Button>
        ))}
      </View>

      {/* Footer note about upcoming languages */}
      <Text style={[styles.note, { color: '#000' }]}>
        More languages coming soon! Stay tuned for updates.
      </Text>
    </ScrollView>
  );
}

// Styles for layout and appearance
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
  subtitle: {
    fontSize: 16,
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
  languageName: {
    fontSize: 16,
  },
  comingSoon: {
    fontSize: 12,
    fontStyle: 'italic',
    opacity: 0.5,
  },
}); 