import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { NavigationProps } from '../types/navigation';

interface VocabWord {
  id: string;
  word: string;
  pinyin: string;
  meaning: string;
  category: string;
}

const dummyVocabulary: VocabWord[] = [
  { id: '1', word: '你好', pinyin: 'nǐ hǎo', meaning: 'Hello', category: 'Greetings' },
  { id: '2', word: '谢谢', pinyin: 'xiè xiè', meaning: 'Thank you', category: 'Greetings' },
  { id: '3', word: '再见', pinyin: 'zài jiàn', meaning: 'Goodbye', category: 'Greetings' },
];

export default function VocabularyScreen({ navigation }: NavigationProps) {
  const renderVocabItem = ({ item }: { item: VocabWord }) => (
    <Pressable
      style={styles.vocabItem}
      onPress={() => navigation.navigate('VocabDetail', { vocabId: item.id })}
    >
      <View style={styles.wordContainer}>
        <Text style={styles.word}>{item.word}</Text>
        <Text style={styles.pinyin}>{item.pinyin}</Text>
      </View>
      <View style={styles.meaningContainer}>
        <Text style={styles.meaning}>{item.meaning}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vocabulary List</Text>
      <FlatList
        data={dummyVocabulary}
        renderItem={renderVocabItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    color: '#4F46E5', // primary-600
  },
  listContainer: {
    padding: 16,
  },
  vocabItem: {
    backgroundColor: '#F3F4F6', // gray-100
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  wordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  word: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
    color: '#1F2937', // gray-800
  },
  pinyin: {
    fontSize: 16,
    color: '#6B7280', // gray-500
    fontStyle: 'italic',
  },
  meaningContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  meaning: {
    fontSize: 16,
    color: '#4B5563', // gray-600
  },
  category: {
    fontSize: 14,
    color: '#6B7280', // gray-500
    backgroundColor: '#E5E7EB', // gray-200
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
}); 