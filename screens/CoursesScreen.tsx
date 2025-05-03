import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CoursesScreenProps } from '../types/navigation';

interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  imageUrl: string;
}

export default function CoursesScreen() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<CoursesScreenProps['navigation']>();

  useEffect(() => {
    // TODO: Fetch courses from your backend
    const fetchCourses = async () => {
      try {
        // Mock data for now
        const mockCourses: Course[] = [
          {
            id: '1',
            title: 'Beginner Chinese',
            description: 'Start your Chinese learning journey with basic vocabulary and grammar.',
            level: 'beginner',
            imageUrl: '../assets/placeholder.png',
          },
          {
            id: '2',
            title: 'Intermediate Chinese',
            description: 'Expand your vocabulary and master more complex sentence structures.',
            level: 'intermediate',
            imageUrl: '../assets/placeholder.png',
          },
          {
            id: '3',
            title: 'Advanced Chinese',
            description: 'Refine your language skills and learn advanced expressions.',
            level: 'advanced',
            imageUrl: '../assets/placeholder.png',
          },
        ];
        setCourses(mockCourses);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const renderCourse = ({ item }: { item: Course }) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}
    >
      <Image
        source={require('../assets/placeholder.png')}
        style={styles.courseImage}
      />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>
        <Text style={styles.courseLevel}>Level: {item.level}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading courses...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Courses</Text>
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    gap: 16,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  courseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  courseInfo: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  courseLevel: {
    fontSize: 14,
    color: '#0ea5e9',
  },
}); 