# LangLearn - Chinese Language Learning Platform

A modern mobile application for learning Chinese, built with React Native and Expo. This platform provides interactive lessons, vocabulary support, and cultural context to help users learn Chinese effectively.

## Features

- Interactive reading lessons with stories and dialogues
- Vocabulary support with pinyin, translations, and audio
- Graded content by difficulty level
- Progressive courses with structured lessons
- Quizzes and exercises for comprehension
- Audio narration for listening practice
- Cultural and historical context
- Offline support for lessons
- Progress tracking and statistics

## Tech Stack

- Frontend: React Native, Expo, TypeScript
- State Management: Redux Toolkit
- UI Components: React Native Paper
- Database: Firebase Realtime Database
- Authentication: Firebase Auth
- Storage: Firebase Storage
- Audio: Expo AV
- Testing: Jest, React Native Testing Library

## Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device
- iOS Simulator (for Mac users) or Android Emulator

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/spouv1234/LangLearn.git
   cd LangLearn
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add required environment variables (see `.env.example`)

4. Start the development server:

   ```bash
   npx expo start
   ```

5. Run the app:
   - Scan the QR code with Expo Go app (Android) or Camera app (iOS)
   - Press 'a' to open on Android emulator
   - Press 'i' to open on iOS simulator
   - Press 'w' to open in web browser

## Development Guidelines

### Code Structure

```text
langlearn/
├── assets/                # Static assets (images, fonts, etc.)
├── src/
│   ├── components/        # Reusable UI components
│   ├── screens/          # App screens
│   ├── navigation/       # Navigation configuration
│   ├── store/            # Redux store and slices
│   ├── services/         # API and external services
│   ├── utils/            # Helper functions
│   └── constants/        # App constants
├── .expo/                # Expo configuration (do not commit)
└── app.json             # Expo app configuration
```

### Development Workflow

1. Create a new branch for your feature:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:

   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

3. Push your changes:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub

### Testing

Run tests:

```bash
npm test
# or
yarn test
```

### Building for Production

1. Configure app.json with your app details

2. Build for specific platforms:

   ```bash
   # For Android
   npx expo build:android
   
   # For iOS
   npx expo build:ios
   ```

## Troubleshooting

### Common Issues

1. Metro Bundler not starting:
   - Kill all Node processes: `taskkill /F /IM node.exe`
   - Clear Metro cache: `npx expo start --clear`

2. App not updating:
   - Press 'r' in the terminal to reload
   - Press 'm' to open the developer menu
   - Select "Reload" from the menu

3. Expo Go connection issues:
   - Ensure your device and computer are on the same network
   - Try using the Expo Go app's QR scanner instead of the camera

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
