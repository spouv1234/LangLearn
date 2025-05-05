# LangLearn

A modern language learning application built with React Native and Expo, designed to help users learn new languages through interactive lessons, practice sessions, and flashcards.

## Features

- 🌍 Multiple language support (currently active: Chinese, coming soon: Spanish, French, Indonesian)
- 🎨 Dark/Light theme support
- 📊 Progress tracking and statistics
- ⚙️ Customizable settings
- 📱 Cross-platform (iOS and Android)
- 🎯 Three learning modes:
  - Structured lessons
  - Practice exercises
  - Flashcard review

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/LangLearn.git
cd LangLearn
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Use the Expo Go app on your mobile device to scan the QR code, or press 'i' for iOS simulator or 'a' for Android emulator.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # React Context providers
├── data/          # Static data and course content
├── design/        # Design system constants
├── navigation/    # Navigation configuration
├── screens/       # Application screens
└── types/         # TypeScript type definitions
```

## Design System

The application uses a consistent design system with:
- Standardized spacing
- Typography scale
- Color themes
- Component-specific styling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React Native
- Expo
- React Navigation
- React Native Paper 