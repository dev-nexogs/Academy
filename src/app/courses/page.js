import CourseCard from '@/components/CourseCard'
import { courses } from '@/data/courses'

export default function CoursesPage() {
  const categories = ['All', 'Programming Languages', 'Web Development', 'ERP / Business Software', 'AI & Automation']

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-gray-600">
            Industry-relevant courses designed to help you master in-demand skills and advance your career.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-gray-300 hover:border-accent hover:text-accent transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-accent/5 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-accent mb-2">{courses.length}+</div>
            <p className="text-gray-600">Courses Available</p>
          </div>
          <div className="bg-accent/5 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-accent mb-2">5000+</div>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          <div className="bg-accent/5 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <p className="text-gray-600">Expert Instructors</p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-accent/5 p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-6">
            We're constantly adding new courses. Contact us to suggest a course or request custom training.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
