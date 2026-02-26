import Link from 'next/link'
import { studentData } from '@/data/team'

export default function StudentDashboardPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Student! 👋</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Enrolled Courses</span>
              <span className="text-2xl">📚</span>
            </div>
            <div className="text-3xl font-bold text-accent">2</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Completed Lessons</span>
              <span className="text-2xl">✅</span>
            </div>
            <div className="text-3xl font-bold text-accent">15</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Hours Learned</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-3xl font-bold text-accent">8.5</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Average Score</span>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-3xl font-bold text-accent">85%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
              <div className="space-y-4">
                {studentData.enrolledCourses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                      </div>
                      <span className="text-sm font-semibold text-accent">{course.progress}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        Next: <span className="font-semibold">{course.nextLesson}</span>
                      </p>
                      <Link 
                        href="/student/courses"
                        className="px-4 py-2 bg-accent text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Continue
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {studentData.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {activity.type === 'lesson' && <span>📖</span>}
                      {activity.type === 'assignment' && <span>📝</span>}
                      {activity.type === 'quiz' && <span>🎯</span>}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  href="/student/courses"
                  className="block w-full px-4 py-3 bg-accent text-white text-center rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  View My Courses
                </Link>
                <Link 
                  href="/student/practice"
                  className="block w-full px-4 py-3 border-2 border-accent text-accent text-center rounded-lg hover:bg-accent hover:text-white transition-colors"
                >
                  Practice Coding
                </Link>
                <Link 
                  href="/courses"
                  className="block w-full px-4 py-3 border-2 border-gray-300 text-gray-700 text-center rounded-lg hover:border-accent hover:text-accent transition-colors"
                >
                  Explore More Courses
                </Link>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Upcoming Deadlines</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📅</span>
                  <div>
                    <p className="font-semibold text-sm">Project Submission</p>
                    <p className="text-xs text-gray-600">Due in 3 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">📝</span>
                  <div>
                    <p className="font-semibold text-sm">JavaScript Quiz</p>
                    <p className="text-xs text-gray-600">Due in 5 days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Streak */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Learning Streak 🔥</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">7 Days</div>
                <p className="text-sm text-gray-600">Keep it up! You're doing great.</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-semibold text-sm">First Course Enrolled</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-semibold text-sm">10 Lessons Completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-sm">Quiz Master</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
