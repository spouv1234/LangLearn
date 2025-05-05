import React from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { Text, Switch, List, Divider, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../design/designSystem';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function SettingsScreen({ navigation }: Props) {
  const { theme, toggleTheme, colors } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background[theme] }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.title, { color: colors.text[theme] }]}>
        Settings
      </Text>

      <List.Section>
        <List.Subheader style={{ color: colors.text[theme] }}>
          Appearance
        </List.Subheader>
        <List.Item
          title="Dark Mode"
          right={() => (
            <Switch
              value={theme === 'dark'}
              onValueChange={handleThemeToggle}
              color={colors.primary[theme]}
            />
          )}
        />
      </List.Section>

      <Divider style={styles.divider} />

      <List.Section>
        <List.Subheader style={{ color: colors.text[theme] }}>
          Preferences
        </List.Subheader>
        <List.Item
          title="Notifications"
          right={() => (
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              color={colors.primary[theme]}
            />
          )}
        />
        <List.Item
          title="Sound Effects"
          right={() => (
            <Switch
              value={soundEnabled}
              onValueChange={setSoundEnabled}
              color={colors.primary[theme]}
            />
          )}
        />
      </List.Section>

      <Divider style={styles.divider} />

      <List.Section>
        <List.Subheader style={{ color: colors.text[theme] }}>
          About
        </List.Subheader>
        <List.Item
          title="Rate App"
          left={props => <List.Icon {...props} icon="star" />}
        />
        <List.Item
          title="Privacy Policy"
          left={props => <List.Icon {...props} icon="shield" />}
        />
      </List.Section>

      <Button
        mode="outlined"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        Back
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: SPACING.xl,
  },
  divider: {
    marginVertical: SPACING.md,
  },
  backButton: {
    marginTop: SPACING.xl,
  },
}); 