import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LangLearn</Text>
      <Text style={styles.subtitle}>Start your language learning journey today!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4F46E5', // primary-600
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280', // gray-500
    textAlign: 'center',
  },
}); 