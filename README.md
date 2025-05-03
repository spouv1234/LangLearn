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
  - Speech recognition for pronunciation practice
  - **Chinese Language Support**:
    - Native Chinese text-to-speech
    - Pinyin pronunciation
    - Character-by-character reading
    - Meaning pronunciation
    - Customizable speech rate for learning
    - Chinese-specific speech recognition
    - Pinyin input support

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Ionicons
- Expo Speech (Text-to-Speech)
- Expo Speech Recognition
- Chinese Language Support

## Project Structure

```text
LangLearn/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── SpeechButton.tsx
│   │   └── ChineseSpeechButton.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── CoursesScreen.tsx
│   │   ├── StoriesScreen.tsx
│   │   ├── VocabularyScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── types/
│   │   └── navigation.ts
│   └── utils/
│       └── speech.ts
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
- Latest ECMAScript features enabled (ES2022)
- Force consistent file name casing for cross-platform compatibility
- Module resolution set to Node.js style
- JSON module imports enabled
- JSX support for React Native
- Strict null checks and type checking

## Speech Recognition Features

The app includes comprehensive speech recognition capabilities:

- **General Speech Recognition**:
  - Real-time speech-to-text conversion
  - Multiple language support
  - Configurable recognition settings
  - Error handling and feedback

- **Chinese-Specific Features**:
  - Pinyin pronunciation recognition
  - Character recognition
  - Tone detection
  - Custom Chinese language models
  - Integration with Chinese text-to-speech

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

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
