import Link from 'next/link'
import { studentData } from '@/data/team'

export default function StudentCoursesPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Courses</h1>
          <p className="text-gray-600">Continue learning and track your progress</p>
        </div>

        {/* Course Cards */}
        <div className="space-y-6">
          {studentData.enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Course Info */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                  <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Overall Progress</span>
                      <span className="text-sm font-bold text-accent">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-accent h-3 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Next Lesson */}
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-1">Continue where you left off</p>
                    <p className="font-semibold text-accent">📖 {course.nextLesson}</p>
                  </div>

                  {/* Course Sections */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-lg text-accent">12/20</div>
                      <div className="text-xs text-gray-600">Lessons</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-lg text-accent">5/8</div>
                      <div className="text-xs text-gray-600">Assignments</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-lg text-accent">3/4</div>
                      <div className="text-xs text-gray-600">Quizzes</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-lg text-accent">2/3</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Continue Learning
                    </button>
                    <button className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:border-accent hover:text-accent transition-colors">
                      View Syllabus
                    </button>
                    <button className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:border-accent hover:text-accent transition-colors">
                      Download Resources
                    </button>
                  </div>
                </div>

                {/* Certificate Preview (if completed) */}
                {course.progress === 100 && (
                  <div className="lg:w-64 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-lg p-6 text-center">
                    <div className="text-5xl mb-3">🎓</div>
                    <h3 className="font-bold mb-2">Certificate Ready!</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Congratulations on completing this course!
                    </p>
                    <button className="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Download Certificate
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-12 bg-white rounded-lg border-2 border-accent p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-gray-600 mb-6">
            Explore our catalog of courses and continue expanding your knowledge.
          </p>
          <Link 
            href="/courses"
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    </div>
  )
}
