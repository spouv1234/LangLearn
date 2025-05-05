import { Platform } from 'react-native';

// Color Palette - WCAG 2.1 AA compliant
export const COLORS = {
  // Primary Colors
  primary: {
    light: '#007AFF', // iOS Blue
    dark: '#0A84FF',
  },
  secondary: {
    light: '#5856D6', // iOS Purple
    dark: '#5E5CE6',
  },
  
  // Semantic Colors
  success: {
    light: '#34C759', // iOS Green
    dark: '#30D158',
  },
  warning: {
    light: '#FF9500', // iOS Orange
    dark: '#FF9F0A',
  },
  error: {
    light: '#FF3B30', // iOS Red
    dark: '#FF453A',
  },
  
  // Neutral Colors
  neutral: {
    100: '#FFFFFF',
    200: '#F2F2F7',
    300: '#E5E5EA',
    400: '#D1D1D6',
    500: '#C7C7CC',
    600: '#AEAEB2',
    700: '#8E8E93',
    800: '#636366',
    900: '#48484A',
    1000: '#3A3A3C',
    1100: '#2C2C2E',
    1200: '#1C1C1E',
  },
  
  // Background Colors
  background: {
    light: '#FFFFFF',
    dark: '#000000',
  },
  
  // Text Colors
  text: {
    light: '#000000',
    dark: '#FFFFFF',
  },
  
  // Surface Colors
  surface: {
    light: '#FFFFFF',
    dark: '#1C1C1E',
  },
};

// Typography System
export const TYPOGRAPHY = {
  // Display Styles
  displayLarge: {
    fontSize: 57,
    lineHeight: 64,
    fontWeight: '400' as const,
    letterSpacing: -0.25,
  },
  displayMedium: {
    fontSize: 45,
    lineHeight: 52,
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
  displaySmall: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
  
  // Headline Styles
  headlineLarge: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
  headlineMedium: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
  headlineSmall: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
  
  // Title Styles
  titleLarge: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
  titleMedium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500' as const,
    letterSpacing: 0.15,
  },
  titleSmall: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const,
    letterSpacing: 0.1,
  },
  
  // Body Styles
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
    letterSpacing: 0.5,
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400' as const,
    letterSpacing: 0.4,
  },
  
  // Label Styles
  labelLarge: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500' as const,
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '500' as const,
    letterSpacing: 0.5,
  },
};

// Spacing System (8pt grid)
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
};

// Sizing System
export const SIZING = {
  // Component Sizes
  button: {
    height: 44,
    minWidth: 88,
    borderRadius: 8,
  },
  input: {
    height: 44,
    borderRadius: 8,
  },
  card: {
    borderRadius: 12,
    padding: SPACING.md,
  },
  
  // Tab Bar Sizes
  tabBar: {
    height: 83,
    paddingBottom: 34,
    paddingTop: 8,
    label: {
      fontSize: 10,
      lineHeight: 12,
      letterSpacing: 0.12,
    },
  },
  
  // Icon Sizes
  icon: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40,
  },
  
  // Avatar Sizes
  avatar: {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56,
  },
};

// Elevation System
export const ELEVATION = {
  level0: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  level1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  level2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  level3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  level4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.24,
    shadowRadius: 2.62,
    elevation: 4,
  },
  level5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

// Animation Durations
export const ANIMATION = {
  fast: 200,
  normal: 300,
  slow: 400,
};

// Border Radius
export const BORDER_RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

// Z-Index
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  modal: 2000,
  toast: 3000,
  tooltip: 4000,
}; 