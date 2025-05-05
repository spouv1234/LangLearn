import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import AppButton from '../components/common/AppButton';
import AppIcon from '../components/common/AppIcon';
import { SPACING, TYPOGRAPHY, SIZING } from '../design/designSystem';

const { width } = Dimensions.get('window');

const ONBOARDING_STEPS = [
  {
    id: '1',
    title: 'Welcome to LangLearn',
    description: 'Start your language learning journey with personalized lessons and interactive exercises.',
    icon: 'book',
  },
  {
    id: '2',
    title: 'Learn at Your Pace',
    description: 'Progress through lessons designed to match your learning style and speed.',
    icon: 'progress',
  },
  {
    id: '3',
    title: 'Practice Makes Perfect',
    description: 'Reinforce your learning with flashcards, quizzes, and pronunciation practice.',
    icon: 'quiz',
  },
  {
    id: '4',
    title: 'Track Your Progress',
    description: 'Monitor your improvement with detailed statistics and achievements.',
    icon: 'settings',
  },
];

export default function OnboardingScreen({ navigation }: any) {
  const { theme, colors } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to language selection
      navigation.replace('LanguageSelection');
    }
  };

  const handleSkip = () => {
    navigation.replace('LanguageSelection');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background[theme] }]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentStep(newIndex);
        }}
      >
        {ONBOARDING_STEPS.map((step) => (
          <View key={step.id} style={[styles.slide, { width }]}>
            <View style={styles.iconContainer}>
              <AppIcon
                name={step.icon}
                size="xl"
                color={colors.primary[theme]}
              />
            </View>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.title,
                  { color: colors.text[theme] },
                ]}
              >
                {step.title}
              </Text>
              <Text
                style={[
                  styles.description,
                  { color: colors.neutral[700] },
                ]}
              >
                {step.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {ONBOARDING_STEPS.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === currentStep
                      ? colors.primary[theme]
                      : colors.neutral[400],
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {currentStep < ONBOARDING_STEPS.length - 1 && (
            <AppButton
              title="Skip"
              onPress={handleSkip}
              variant="text"
              style={styles.skipButton}
            />
          )}
          <AppButton
            title={currentStep === ONBOARDING_STEPS.length - 1 ? 'Get Started' : 'Next'}
            onPress={handleNext}
            variant="primary"
            style={styles.nextButton}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  iconContainer: {
    marginBottom: SPACING.xl,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },
  title: {
    ...TYPOGRAPHY.headlineLarge,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  description: {
    ...TYPOGRAPHY.bodyLarge,
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: SPACING.lg,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    flex: 1,
    marginRight: SPACING.md,
  },
  nextButton: {
    flex: 2,
  },
}); 