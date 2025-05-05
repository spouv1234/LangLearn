import { Course } from '../../types/course';
import { chineseCourses } from './chinese';
import { indonesianCourses } from './indonesian';

export const courses: Course[] = [
  ...chineseCourses,
  ...indonesianCourses
]; 