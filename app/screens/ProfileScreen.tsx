import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationProps } from '../types/navigation';

export default function ProfileScreen({ navigation }: NavigationProps) {
  const handleLogout = () => {
    // Implement logout logic here
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Courses</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Stories</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>150</Text>
          <Text style={styles.statLabel}>Words</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.menuText}>Settings</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate('Progress')}
        >
          <Text style={styles.menuText}>Learning Progress</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate('Achievements')}
        >
          <Text style={styles.menuText}>Achievements</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937', // gray-800
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#6B7280', // gray-500
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
    paddingVertical: 16,
    backgroundColor: '#F3F4F6', // gray-100
    borderRadius: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5', // primary-600
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280', // gray-500
  },
  menuContainer: {
    marginBottom: 32,
  },
  menuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB', // gray-200
  },
  menuText: {
    fontSize: 16,
    color: '#1F2937', // gray-800
  },
  logoutButton: {
    backgroundColor: '#EF4444', // red-500
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 