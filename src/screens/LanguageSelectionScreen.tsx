import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Card, Button, Text } from 'react-native-paper';
import Animated, { FadeInDown } from 'react-native-reanimated';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const languages = [
  { id: 'zh', name: 'Chinese', flag: '🇨🇳', description: 'Learn Mandarin Chinese' },
  { id: 'ja', name: 'Japanese', flag: '🇯🇵', description: 'Learn Japanese' },
  { id: 'ko', name: 'Korean', flag: '🇰🇷', description: 'Learn Korean' },
  { id: 'es', name: 'Spanish', flag: '🇪🇸', description: 'Learn Spanish' },
  { id: 'fr', name: 'French', flag: '🇫🇷', description: 'Learn French' },
];

const LanguageSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Choose a Language</Title>
      <Text style={styles.subtitle}>Select the language you want to learn</Text>
      
      <View style={styles.languagesContainer}>
        {languages.map((language, index) => (
          <Animated.View
            key={language.id}
            entering={FadeInDown.delay(index * 100)}
          >
            <Card
              style={[
                styles.languageCard,
                selectedLanguage === language.id && styles.selectedCard
              ]}
              onPress={() => setSelectedLanguage(language.id)}
            >
              <Card.Content>
                <View style={styles.languageHeader}>
                  <Text style={styles.flag}>{language.flag}</Text>
                  <Title style={styles.languageName}>{language.name}</Title>
                </View>
                <Text style={styles.description}>{language.description}</Text>
              </Card.Content>
            </Card>
          </Animated.View>
        ))}
      </View>

      <Button
        mode="contained"
        style={styles.startButton}
        disabled={!selectedLanguage}
        onPress={() => navigation.navigate('Home')}
      >
        Start Learning
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  languagesContainer: {
    gap: 16,
  },
  languageCard: {
    marginBottom: 16,
    elevation: 2,
  },
  selectedCard: {
    borderColor: '#4A90E2',
    borderWidth: 2,
  },
  languageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  flag: {
    fontSize: 24,
    marginRight: 12,
  },
  languageName: {
    fontSize: 20,
  },
  description: {
    color: '#666',
  },
  startButton: {
    marginTop: 24,
    marginBottom: 32,
    paddingVertical: 8,
  },
});

export default LanguageSelectionScreen; 