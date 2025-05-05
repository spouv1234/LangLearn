import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AppButton from '../components/common/AppButton';
import { useTheme } from '../context/ThemeContext';
import { SPACING, TYPOGRAPHY } from '../design/designSystem';

type Props = NativeStackScreenProps<RootStackParamList, 'LanguageSelection'>;

export default function LanguageSelectionScreen({ navigation }: Props) {
  const { theme, colors } = useTheme();

  const languages = [
    { name: 'Chinese', code: 'zh' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background[theme] }]}
      contentContainerStyle={styles.contentContainer}
      bounces={false}
    >
      <Text
        style={[styles.title, { color: colors.text[theme] }]}
        accessibilityRole="header"
      >
        Select a Language to Learn
      </Text>

      <View style={styles.buttonContainer}>
        {languages.map((language) => (
          <AppButton
            key={language.code}
            title={language.name}
            onPress={() => navigation.navigate('Main')}
            accessibilityLabel={`Select ${language.name} language`}
            accessibilityHint={`Double tap to start learning ${language.name}`}
            style={styles.button}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: SPACING.md,
    justifyContent: 'center',
  },
  title: {
    ...TYPOGRAPHY.headlineLarge,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  buttonContainer: {
    gap: SPACING.md,
  },
  button: {
    marginBottom: SPACING.sm,
  },
}); 