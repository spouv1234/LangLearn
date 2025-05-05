import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar as PaperProgressBar, Text } from 'react-native-paper';
import { useTheme } from '../../context/ThemeContext';
import { SPACING } from '../../design/designSystem';

interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({ progress, label, showPercentage = true }: ProgressBarProps) {
  const { colors, theme } = useTheme();

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: colors.text[theme] }]}>
          {label}
        </Text>
      )}
      <PaperProgressBar
        progress={progress}
        color={colors.primary[theme]}
        style={styles.progressBar}
      />
      {showPercentage && (
        <Text style={[styles.percentage, { color: colors.text[theme] }]}>
          {Math.round(progress * 100)}%
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.sm,
  },
  label: {
    marginBottom: SPACING.xs,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  percentage: {
    textAlign: 'right',
    marginTop: SPACING.xs,
    fontSize: 12,
  },
}); 