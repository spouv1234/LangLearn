import { Course, Lesson, Exercise } from '../../types/course';
import { LanguageLevel } from '../../types/language';

export const indonesianCourses: Course[] = [
  {
    id: 'indonesian-beginner-1',
    language: 'indonesian',
    level: 'beginner',
    title: 'Indonesian Basics',
    description: 'Start your Indonesian journey with essential vocabulary and phrases.',
    lessons: [
      {
        id: 'indonesian-greetings',
        title: 'Greetings and Introductions',
        description: 'Learn basic greetings and how to introduce yourself in Indonesian.',
        exercises: [
          {
            id: 'indonesian-greetings-1',
            type: 'vocabulary',
            question: 'What does "Selamat pagi" mean?',
            options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
            correctAnswer: 'Good morning'
          },
          {
            id: 'indonesian-greetings-2',
            type: 'translation',
            question: 'How do you say "My name is" in Indonesian?',
            answer: 'Nama saya'
          }
        ]
      },
      {
        id: 'indonesian-numbers',
        title: 'Numbers 1-10',
        description: 'Learn to count from 1 to 10 in Indonesian.',
        exercises: [
          {
            id: 'indonesian-numbers-1',
            type: 'vocabulary',
            question: 'What is "satu" in English?',
            options: ['One', 'Two', 'Three', 'Four'],
            correctAnswer: 'One'
          }
        ]
      }
    ]
  }
]; 