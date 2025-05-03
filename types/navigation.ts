import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Courses: undefined;
  CourseDetail: { courseId: string };
  Chapter: { chapterId: string };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignupScreenProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;
export type CoursesScreenProps = NativeStackScreenProps<RootStackParamList, 'Courses'>;
export type CourseDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'CourseDetail'>;
export type ChapterScreenProps = NativeStackScreenProps<RootStackParamList, 'Chapter'>; 