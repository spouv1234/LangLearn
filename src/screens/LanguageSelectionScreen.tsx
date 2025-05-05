import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';
import { LANGUAGES } from '../types/language';
import { SPACING } from '../design/designSystem';

export default function LanguageSelectionScreen({ navigation }: any) {
  const { colors, theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background[theme] }]}>
      <Text style={[styles.title, { color: colors.text[theme] }]}>
        Select a Language to Learn
      </Text>
      <View style={styles.buttonContainer}>
        {Object.values(LANGUAGES).map((language) => (
          <Button
            key={language.id}
            mode="contained"
            onPress={() => navigation.navigate('Main', { language })}
            style={styles.button}
          >
            {`${language.flag} ${language.name}`}
          </Button>
        ))}
      </View>
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
  buttonContainer: {
    gap: SPACING.md,
  },
  button: {
    marginVertical: SPACING.sm,
  },
}); 