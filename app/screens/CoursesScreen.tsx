import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { NavigationProps } from '../types/navigation';

interface Course {
  id: string;
  title: string;
  level: string;
}

const dummyCourses: Course[] = [
  { id: '1', title: 'Basic Chinese', level: 'Beginner' },
  { id: '2', title: 'Intermediate Chinese', level: 'Intermediate' },
  { id: '3', title: 'Advanced Chinese', level: 'Advanced' },
];

export default function CoursesScreen({ navigation }: NavigationProps) {
  const renderCourseItem = ({ item }: { item: Course }) => (
    <Pressable
      style={styles.courseItem}
      onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}
    >
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseLevel}>{item.level}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Courses</Text>
      <FlatList
        data={dummyCourses}
        renderItem={renderCourseItem}
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
  courseItem: {
    backgroundColor: '#F3F4F6', // gray-100
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1F2937', // gray-800
  },
  courseLevel: {
    fontSize: 14,
    color: '#6B7280', // gray-500
  },
}); 