import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { NavigationProps } from '../types/navigation';

interface Story {
  id: string;
  title: string;
  difficulty: string;
  length: string;
}

const dummyStories: Story[] = [
  { id: '1', title: 'The Journey West', difficulty: 'Easy', length: '5 min' },
  { id: '2', title: 'The Great Wall', difficulty: 'Medium', length: '8 min' },
  { id: '3', title: 'Dragon Boat Festival', difficulty: 'Hard', length: '12 min' },
];

export default function StoriesScreen({ navigation }: NavigationProps) {
  const renderStoryItem = ({ item }: { item: Story }) => (
    <Pressable
      style={styles.storyItem}
      onPress={() => navigation.navigate('StoryDetail', { storyId: item.id })}
    >
      <Text style={styles.storyTitle}>{item.title}</Text>
      <View style={styles.storyInfo}>
        <Text style={styles.storyDetail}>Difficulty: {item.difficulty}</Text>
        <Text style={styles.storyDetail}>Length: {item.length}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reading Stories</Text>
      <FlatList
        data={dummyStories}
        renderItem={renderStoryItem}
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
  storyItem: {
    backgroundColor: '#F3F4F6', // gray-100
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1F2937', // gray-800
  },
  storyInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storyDetail: {
    fontSize: 14,
    color: '#6B7280', // gray-500
  },
}); 