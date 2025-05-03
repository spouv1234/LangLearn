import { notFound } from 'next/navigation'

interface Course {
  id: string
  title: string
  description: string
  level: string
  chapters: Chapter[]
}

interface Chapter {
  id: string
  title: string
  content: string
  vocabulary: VocabularyItem[]
}

interface VocabularyItem {
  chinese: string
  pinyin: string
  english: string
}

// This would typically come from a database
const courses: Record<string, Course> = {
  'digital-dad': {
    id: '1',
    title: 'Digital Dad',
    description: 'Follow the adventures of a modern Chinese family in this engaging story series.',
    level: 'Beginner',
    chapters: [
      {
        id: '1',
        title: 'Chapter 1: The New Phone',
        content: '今天，爸爸买了一个新手机。他很高兴。这个手机很贵，但是功能很多。',
        vocabulary: [
          {
            chinese: '手机',
            pinyin: 'shǒu jī',
            english: 'mobile phone'
          },
          {
            chinese: '贵',
            pinyin: 'guì',
            english: 'expensive'
          },
          {
            chinese: '功能',
            pinyin: 'gōng néng',
            english: 'function, feature'
          }
        ]
      }
    ]
  }
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses[params.slug]
  
  if (!course) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-8">{course.description}</p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Course Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Level</p>
              <p className="font-medium">{course.level}</p>
            </div>
            <div>
              <p className="text-gray-600">Chapters</p>
              <p className="font-medium">{course.chapters.length}</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {course.chapters.map((chapter) => (
            <div key={chapter.id} className="card">
              <h3 className="text-2xl font-semibold mb-4">{chapter.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Story</h4>
                <p className="text-gray-800 leading-relaxed">{chapter.content}</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Vocabulary</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {chapter.vocabulary.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded">
                      <p className="text-xl font-chinese">{item.chinese}</p>
                      <p className="text-gray-600">{item.pinyin}</p>
                      <p className="text-gray-800">{item.english}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 