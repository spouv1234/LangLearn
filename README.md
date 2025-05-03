# LangLearn - Chinese Language Learning Platform

A modern web application for learning Chinese, inspired by Du Chinese. This platform provides interactive lessons, vocabulary support, and cultural context to help users learn Chinese effectively.

## Features

- Interactive reading lessons with stories and dialogues
- Vocabulary support with pinyin, translations, and audio
- Graded content by difficulty level
- Progressive courses with structured lessons
- Quizzes and exercises for comprehension
- Audio narration for listening practice
- Cultural and historical context

## Tech Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Audio: Web Audio API

## Getting Started

1. Clone the repository

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add required environment variables (see `.env.example`)

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```text
langlearn/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── components/        # React components
│   ├── lib/              # Utility functions
│   └── styles/           # Global styles
├── public/               # Static files
├── server/              # Express server
└── types/              # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT
