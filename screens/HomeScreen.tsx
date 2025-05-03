import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from '../types/navigation';

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenProps['navigation']>();

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Learn Chinese Through Stories</Text>
        <Text style={styles.heroSubtitle}>
          Immerse yourself in Chinese language and culture with interactive stories, 
          audio narration, and comprehensive learning tools.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('Courses')}
          >
            <Text style={[styles.buttonText, styles.primaryButtonText]}>Browse Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>Start Learning</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Why Learn with LangLearn?</Text>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Interactive Stories</Text>
          <Text style={styles.featureText}>
            Learn through engaging stories with audio narration, pinyin support, and translations.
          </Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Progressive Learning</Text>
          <Text style={styles.featureText}>
            Start from beginner level and progress through carefully structured lessons.
          </Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Cultural Context</Text>
          <Text style={styles.featureText}>
            Understand Chinese culture and history while learning the language.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    padding: 20,
    backgroundColor: '#0ea5e9',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#fff',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButtonText: {
    color: '#0ea5e9',
  },
  secondaryButtonText: {
    color: '#fff',
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 16,
    color: '#666',
  },
}); 