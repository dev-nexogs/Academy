import Link from 'next/link'
import Button from '@/components/Button'

export default function StudentPortalPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">Student Portal</h1>
          <p className="text-xl text-gray-600 mb-8">
            Access your courses, track progress, and practice your skills all in one place.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              🔒 <strong>Demo Mode:</strong> This is a UI-only version. Authentication coming soon!
            </p>
          </div>
        </div>

        {/* Portal Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Link href="/student/dashboard">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition-all cursor-pointer">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Dashboard</h3>
              <p className="text-gray-600 text-sm">
                View your learning overview and progress
              </p>
            </div>
          </Link>

          <Link href="/student/courses">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition-all cursor-pointer">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">My Courses</h3>
              <p className="text-gray-600 text-sm">
                Access your enrolled courses
              </p>
            </div>
          </Link>

          <Link href="/student/progress">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition-all cursor-pointer">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Progress</h3>
              <p className="text-gray-600 text-sm">
                Track your learning journey
              </p>
            </div>
          </Link>

          <Link href="/student/practice">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition-all cursor-pointer">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Practice</h3>
              <p className="text-gray-600 text-sm">
                Code in our practice environment
              </p>
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="bg-accent/5 rounded-lg p-10">
          <h2 className="text-3xl font-bold text-center mb-8">Your Learning Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2</div>
              <p className="text-gray-600">Courses Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">52%</div>
              <p className="text-gray-600">Average Progress</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15</div>
              <p className="text-gray-600">Lessons Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">8h</div>
              <p className="text-gray-600">Time Spent Learning</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/student/dashboard">
            <Button variant="primary" className="text-lg px-10 py-4">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
