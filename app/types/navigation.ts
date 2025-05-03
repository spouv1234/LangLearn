import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Main: undefined;
  CourseDetail: { courseId: string };
  StoryDetail: { storyId: string };
  VocabDetail: { vocabId: string };
  Settings: undefined;
  Progress: undefined;
  Achievements: undefined;
  Login: undefined;
};

export type TabParamList = {
  Home: undefined;
  Courses: undefined;
  Stories: undefined;
  Vocabulary: undefined;
  Profile: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type TabNavigationProp = BottomTabNavigationProp<TabParamList>;

export interface NavigationProps {
  navigation: RootStackNavigationProp | TabNavigationProp;
} 