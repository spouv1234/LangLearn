import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { SPACING, TYPOGRAPHY, SIZING } from '../../design/designSystem';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  style?: ViewStyle;
};

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
  style,
}: AppButtonProps) {
  const { theme, colors } = useTheme();

  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.primary[theme],
          borderColor: colors.primary[theme],
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          borderColor: colors.primary[theme],
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        };
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return { color: colors.onPrimary };
      case 'secondary':
        return { color: colors.primary[theme] };
      case 'text':
        return { color: colors.primary[theme] };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        getButtonStyle(),
        disabled && styles.disabled,
        style,
      ]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
    >
      <Text
        style={[
          styles.text,
          getTextStyle(),
          disabled && styles.disabledText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: SIZING.button.height,
    minWidth: SIZING.button.minWidth,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: SIZING.button.borderRadius,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...TYPOGRAPHY.labelLarge,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.5,
  },
}); 