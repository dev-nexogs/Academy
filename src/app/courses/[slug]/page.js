import { courses, getCourseBySlug } from '@/data/courses'
import Link from 'next/link'
import Button from '@/components/Button'

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export default function CourseDetailPage({ params }) {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
        <Link href="/courses">
          <Button variant="primary">Back to Courses</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-accent">Home</Link>
          {' / '}
          <Link href="/courses" className="hover:text-accent">Courses</Link>
          {' / '}
          <span className="text-gray-900">{course.title}</span>
        </div>

        {/* Course Header */}
        <div className="mb-8">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            {course.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{course.description}</p>

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span>👨‍🏫</span>
              <span>{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📊</span>
              <span className="font-semibold text-accent">{course.level}</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
              <ul className="space-y-3">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Overview */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  This comprehensive course is designed to take you from basics to advanced concepts
                  in {course.title.toLowerCase()}. Through hands-on projects and real-world examples,
                  you'll gain practical skills that are immediately applicable in the industry.
                </p>
                <p>
                  Whether you're looking to start a new career, upgrade your existing skills, or
                  build your own projects, this course provides everything you need to succeed.
                </p>
                <p>
                  You'll learn from industry expert {course.instructor}, who brings years of
                  professional experience and a passion for teaching.
                </p>
              </div>
            </div>

            {/* Who This Course Is For */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Who This Course Is For</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Beginners looking to start their journey in tech</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Professionals seeking to upgrade their skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Career switchers transitioning into technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Students wanting to supplement their education</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>A computer with internet access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Willingness to learn and practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Basic computer literacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>No prior programming experience needed (for beginner courses)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-accent rounded-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-accent mb-2">{course.price}</div>
                <p className="text-sm text-gray-600">One-time payment</p>
              </div>

              <button className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors mb-4 font-semibold">
                Enroll Now
              </button>

              <button className="w-full px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors mb-6 font-semibold">
                Try Free Lesson
              </button>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold mb-4">This course includes:</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-3">
                    <span>📹</span>
                    <span>40+ hours of video content</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>📝</span>
                    <span>Assignments & Projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>📄</span>
                    <span>Downloadable resources</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>🎓</span>
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>♾️</span>
                    <span>Lifetime access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>💬</span>
                    <span>Community support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>📱</span>
                    <span>Mobile & desktop access</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <p className="text-xs text-gray-500 text-center">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-accent/5 p-10 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of students already enrolled in this course.
          </p>
          <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
            Enroll in {course.title}
          </button>
        </div>
      </div>
    </div>
  )
}
