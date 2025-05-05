import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from '../../context/ThemeContext';
import { SPACING } from '../../design/designSystem';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export default function AppButton({
  title,
  onPress,
  style,
  accessibilityLabel,
  accessibilityHint,
}: AppButtonProps) {
  const { theme, colors } = useTheme();

  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={[styles.button, style]}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: SPACING.sm,
  },
}); 