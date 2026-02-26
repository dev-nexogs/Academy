import { studentData } from '@/data/team'

export default function StudentProgressPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Learning Progress</h1>
          <p className="text-gray-600">Track your achievements and growth</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold text-accent mb-1">2</div>
            <div className="text-gray-600">Courses In Progress</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="text-4xl mb-2">✅</div>
            <div className="text-3xl font-bold text-accent mb-1">15</div>
            <div className="text-gray-600">Lessons Completed</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-3xl font-bold text-accent mb-1">85%</div>
            <div className="text-gray-600">Average Score</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="text-4xl mb-2">🔥</div>
            <div className="text-3xl font-bold text-accent mb-1">7</div>
            <div className="text-gray-600">Day Streak</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Progress */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Course Progress</h2>
              <div className="space-y-6">
                {studentData.enrolledCourses.map((course) => (
                  <div key={course.id}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold">{course.title}</h3>
                      <span className="font-bold text-accent">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className="bg-accent h-3 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>📖 12/20 Lessons</div>
                      <div>📝 5/8 Assignments</div>
                      <div>🎯 3/4 Quizzes</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Weekly Activity</h2>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-xs text-gray-500 mb-2">{day}</div>
                    <div 
                      className={`h-20 rounded ${
                        index < 5 ? 'bg-accent' : 'bg-gray-200'
                      }`}
                      title={index < 5 ? 'Active' : 'No activity'}
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 text-center">
                You've been active 5 out of 7 days this week! 🎉
              </p>
            </div>

            {/* Skills Progress */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Skills Progress</h2>
              <div className="space-y-4">
                {[
                  { skill: 'JavaScript', level: 75 },
                  { skill: 'React', level: 60 },
                  { skill: 'Python', level: 45 },
                  { skill: 'Node.js', level: 50 },
                  { skill: 'MongoDB', level: 35 }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{item.skill}</span>
                      <span className="text-sm text-accent">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiz Performance */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Quiz Performance</h2>
              <div className="space-y-4">
                {[
                  { quiz: 'JavaScript Basics', score: 90, date: '2 days ago' },
                  { quiz: 'React Fundamentals', score: 85, date: '5 days ago' },
                  { quiz: 'Python Variables', score: 78, date: '1 week ago' }
                ].map((quiz, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-semibold">{quiz.quiz}</p>
                      <p className="text-sm text-gray-500">{quiz.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{quiz.score}%</div>
                      <div className="text-xs text-gray-500">Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4">Achievements 🏆</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="font-semibold text-sm">First Course</p>
                    <p className="text-xs text-gray-600">Enrolled in a course</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <span className="text-3xl">⭐</span>
                  <div>
                    <p className="font-semibold text-sm">10 Lessons</p>
                    <p className="text-xs text-gray-600">Completed 10 lessons</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <p className="font-semibold text-sm">Quiz Master</p>
                    <p className="text-xs text-gray-600">Scored 90%+ on a quiz</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <span className="text-3xl">🔥</span>
                  <div>
                    <p className="font-semibold text-sm">Week Streak</p>
                    <p className="text-xs text-gray-600">7 days in a row</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">This Week's Rank</h3>
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">🥈</div>
                <div className="text-3xl font-bold text-accent">#2</div>
                <p className="text-sm text-gray-600">Out of 150 students</p>
              </div>
              <p className="text-xs text-center text-gray-600">
                You're 50 points away from #1!
              </p>
            </div>

            {/* Learning Goals */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4">Monthly Goals</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Complete 20 lessons</span>
                    <span className="text-sm font-bold text-accent">15/20</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Pass 5 quizzes</span>
                    <span className="text-sm font-bold text-accent">3/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Submit 3 projects</span>
                    <span className="text-sm font-bold text-accent">2/3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '67%' }} />
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
