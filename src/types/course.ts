export type ExerciseType = 'vocabulary' | 'translation' | 'listening' | 'speaking';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer?: string;
  answer?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
}

export interface Course {
  id: string;
  language: string;
  level: string;
  title: string;
  description: string;
  lessons: Lesson[];
} 