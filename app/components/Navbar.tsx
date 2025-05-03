import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            LangLearn
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/courses" className="text-gray-600 hover:text-primary-600">
              Courses
            </Link>
            <Link href="/stories" className="text-gray-600 hover:text-primary-600">
              Stories
            </Link>
            <Link href="/vocabulary" className="text-gray-600 hover:text-primary-600">
              Vocabulary
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-primary-600">
              Login
            </Link>
            <Link href="/signup" className="btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 