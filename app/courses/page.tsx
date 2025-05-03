import Link from 'next/link'

// This would typically come from a database
const courses = [
  {
    id: '1',
    slug: 'digital-dad',
    title: 'Digital Dad',
    description: 'Follow the adventures of a modern Chinese family in this engaging story series.',
    level: 'Beginner',
    chapters: 10,
    image: '/images/digital-dad.jpg'
  },
  {
    id: '2',
    slug: 'three-kingdoms',
    title: 'Three Kingdoms',
    description: 'Learn Chinese through classic historical tales from the Three Kingdoms period.',
    level: 'Intermediate',
    chapters: 15,
    image: '/images/three-kingdoms.jpg'
  },
  {
    id: '3',
    slug: 'modern-life',
    title: 'Modern Life',
    description: 'Explore contemporary Chinese culture and daily life through authentic stories.',
    level: 'Beginner',
    chapters: 8,
    image: '/images/modern-life.jpg'
  }
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Available Courses</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link 
            key={course.id} 
            href={`/courses/${course.slug}`}
            className="card hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-gray-200 rounded-t-lg mb-4">
              {/* Image would be displayed here */}
            </div>
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{course.level}</span>
              <span>{course.chapters} chapters</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 