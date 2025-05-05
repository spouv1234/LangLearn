import { Course, Lesson, Exercise } from '../../types/course';
import { LanguageLevel } from '../../types/language';

export const chineseCourses: Course[] = [
  {
    id: 'chinese-beginner-1',
    language: 'chinese',
    level: 'beginner',
    title: 'Chinese Basics',
    description: 'Start your Chinese journey with essential vocabulary and phrases.',
    lessons: [
      {
        id: 'chinese-greetings',
        title: 'Greetings and Introductions',
        description: 'Learn basic greetings and how to introduce yourself in Chinese.',
        exercises: [
          {
            id: 'chinese-greetings-1',
            type: 'vocabulary',
            question: 'What does "你好" mean?',
            options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
            correctAnswer: 'Hello'
          },
          {
            id: 'chinese-greetings-2',
            type: 'translation',
            question: 'How do you say "My name is" in Chinese?',
            answer: '我叫'
          }
        ]
      },
      {
        id: 'chinese-numbers',
        title: 'Numbers 1-10',
        description: 'Learn to count from 1 to 10 in Chinese.',
        exercises: [
          {
            id: 'chinese-numbers-1',
            type: 'vocabulary',
            question: 'What is "一" in English?',
            options: ['One', 'Two', 'Three', 'Four'],
            correctAnswer: 'One'
          }
        ]
      }
    ]
  }
]; 