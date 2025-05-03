import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CourseDetailScreenProps } from '../types/navigation';

interface Chapter {
  id: string;
  title: string;
  description: string;
  order: number;
}

interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  imageUrl: string;
  chapters: Chapter[];
}

export default function CourseDetailScreen() {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute<CourseDetailScreenProps['route']>();
  const navigation = useNavigation<CourseDetailScreenProps['navigation']>();

  useEffect(() => {
    // TODO: Fetch course details from your backend
    const fetchCourse = async () => {
      try {
        // Mock data for now
        const mockCourse: Course = {
          id: route.params.courseId,
          title: 'Beginner Chinese',
          description: 'Start your Chinese learning journey with basic vocabulary and grammar.',
          level: 'beginner',
          imageUrl: '../assets/placeholder.png',
          chapters: [
            {
              id: '1',
              title: 'Introduction to Chinese',
              description: 'Learn basic greetings and introductions',
              order: 1,
            },
            {
              id: '2',
              title: 'Numbers and Time',
              description: 'Master numbers and telling time in Chinese',
              order: 2,
            },
            {
              id: '3',
              title: 'Daily Activities',
              description: 'Learn vocabulary for daily routines',
              order: 3,
            },
          ],
        };
        setCourse(mockCourse);
      } catch (error) {
        console.error('Failed to fetch course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [route.params.courseId]);

  const renderChapter = ({ item }: { item: Chapter }) => (
    <TouchableOpacity
      style={styles.chapterCard}
      onPress={() => navigation.navigate('Chapter', { chapterId: item.id })}
    >
      <View style={styles.chapterInfo}>
        <Text style={styles.chapterTitle}>{item.title}</Text>
        <Text style={styles.chapterDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading course details...</Text>
      </View>
    );
  }

  if (!course) {
    return (
      <View style={styles.container}>
        <Text>Course not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/placeholder.png')}
        style={styles.courseImage}
      />
      <View style={styles.courseHeader}>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseLevel}>Level: {course.level}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
      </View>
      
      <Text style={styles.chaptersTitle}>Chapters</Text>
      <FlatList
        data={course.chapters}
        renderItem={renderChapter}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chaptersList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  courseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  courseHeader: {
    padding: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseLevel: {
    fontSize: 16,
    color: '#0ea5e9',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  chaptersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  chaptersList: {
    padding: 20,
    gap: 16,
  },
  chapterCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chapterInfo: {
    gap: 8,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chapterDescription: {
    fontSize: 14,
    color: '#666',
  },
}); 