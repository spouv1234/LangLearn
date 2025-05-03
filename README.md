# LangLearn - Language Learning App

A modern language learning application built with React Native and Expo, with a focus on Chinese language learning.

## Features

- **Home Screen**: Welcome interface with app introduction
- **Courses**: Browse and access language courses
- **Stories**: Read and learn through stories
- **Vocabulary**: Build your vocabulary with word lists
- **Profile**: Track your progress and manage your account
- **Speech Features**:
  - Text-to-speech for pronunciation practice
  - Voice feedback for language exercises
  - Audio playback for vocabulary words
  - Interactive speaking exercises
  - **Chinese Language Support**:
    - Native Chinese text-to-speech
    - Pinyin pronunciation
    - Character-by-character reading
    - Meaning pronunciation
    - Customizable speech rate for learning

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Ionicons
- Expo Speech (Text-to-Speech)
- Chinese Language Support

## Project Structure

```text
LangLearn/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── SpeechButton.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── CoursesScreen.tsx
│   │   ├── StoriesScreen.tsx
│   │   ├── VocabularyScreen.tsx
│   │   └── ProfileScreen.tsx
│   └── types/
│       └── navigation.ts
├── App.tsx
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/LangLearn.git
cd LangLearn
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npx expo start
```

1. Run the app:

- Press 'w' to open in web browser
- Press 'a' to open in Android emulator
- Press 'i' to open in iOS simulator
- Scan the QR code with your phone's Expo Go app

## TypeScript Configuration

The project uses TypeScript with the following configuration:

- Extends from Expo's base TypeScript configuration
- Strict type checking enabled
- Path aliases configured for cleaner imports
- React Native specific type definitions included

## Navigation

The app uses React Navigation with:

- Bottom Tab Navigation for main app sections
- Stack Navigation for nested screens
- Type-safe navigation using TypeScript

## Styling

- Uses React Native's StyleSheet
- Consistent color scheme throughout the app
- Responsive layouts for different screen sizes

## Development

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting

### Speech Features

The app includes text-to-speech capabilities using Expo Speech:

- Pronunciation practice for vocabulary words
- Audio playback for stories and lessons
- Voice feedback for exercises
- Multiple language support
- Customizable speech rate and pitch
- **Chinese Language Features**:
  - Native Chinese text-to-speech
  - Pinyin pronunciation support
  - Character-by-character reading
  - Meaning pronunciation
  - Optimized speech rate for learning
  - Integrated pinyin display

### Debugging

- Press 'j' to open the debugger
- Press 'r' to reload the app
- Press 'm' to toggle the developer menu

## Contributing

1. Fork the repository
1. Create your feature branch
1. Commit your changes
1. Push to the branch
1. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
