import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn Chinese Through Stories
            </h1>
            <p className="text-xl mb-8">
              Immerse yourself in Chinese language and culture with interactive stories, 
              audio narration, and comprehensive learning tools.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/courses" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Browse Courses
              </Link>
              <Link href="/signup" className="btn-secondary text-white border-white hover:bg-primary-500">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learn with LangLearn?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Interactive Stories</h3>
              <p className="text-gray-600">
                Learn through engaging stories with audio narration, pinyin support, and translations.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Progressive Learning</h3>
              <p className="text-gray-600">
                Start from beginner level and progress through carefully structured lessons.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Cultural Context</h3>
              <p className="text-gray-600">
                Understand Chinese culture and history while learning the language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course cards will be dynamically populated */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Digital Dad</h3>
              <p className="text-gray-600 mb-4">
                Follow the adventures of a modern Chinese family in this engaging story series.
              </p>
              <Link href="/courses/digital-dad" className="btn-primary">
                Start Course
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Three Kingdoms</h3>
              <p className="text-gray-600 mb-4">
                Learn Chinese through classic historical tales from the Three Kingdoms period.
              </p>
              <Link href="/courses/three-kingdoms" className="btn-primary">
                Start Course
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Modern Life</h3>
              <p className="text-gray-600 mb-4">
                Explore contemporary Chinese culture and daily life through authentic stories.
              </p>
              <Link href="/courses/modern-life" className="btn-primary">
                Start Course
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 