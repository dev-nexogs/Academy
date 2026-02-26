import Link from 'next/link'

export default function CourseCard({ course }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-3">
        <span className="text-xs font-semibold text-accent bg-indigo-50 px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {course.description}
      </p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span>👤 {course.instructor}</span>
        <span>⏱️ {course.duration}</span>
        <span className="font-semibold text-accent">{course.level}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{course.price}</span>
        <Link
          href={`/courses/${course.slug}`}
          className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
