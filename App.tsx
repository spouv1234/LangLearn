import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CoursesScreen from './screens/CoursesScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'LangLearn' }}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ title: 'Login' }}
          />
          <Stack.Screen 
            name="Signup" 
            component={SignupScreen} 
            options={{ title: 'Sign Up' }}
          />
          <Stack.Screen 
            name="Courses" 
            component={CoursesScreen} 
            options={{ title: 'Courses' }}
          />
          <Stack.Screen 
            name="CourseDetail" 
            component={CourseDetailScreen} 
            options={{ title: 'Course' }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
} 