import Link from 'next/link'
import Button from '@/components/Button'
import CourseCard from '@/components/CourseCard'
import { courses } from '@/data/courses'
import { instructors, coordinators, testimonials } from '@/data/team'

export default function Home() {
  const featuredCourses = courses.slice(0, 4)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IftiVerse – Learn. Practice. Build.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A modern learning platform for future-ready skills.
            </p>

            {/* Banner for offers */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
              <p className="text-accent font-semibold text-lg">
                🎉 Special Offer: Get 30% off on all courses this month!
              </p>
              <p className="text-gray-600 mt-2">
                Join our upcoming Web Development Bootcamp starting March 1st
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button variant="primary">Explore Courses</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary">Join Free Session</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600 text-lg">
              Learn from industry experts and build real-world projects
            </p>
          </div>

          {/* Course Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-accent transition-colors">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-bold mb-2">Programming Languages</h3>
              <p className="text-sm text-gray-600">Python, JavaScript, and more</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-accent transition-colors">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold mb-2">Web Development</h3>
              <p className="text-sm text-gray-600">Full-stack development skills</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-accent transition-colors">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold mb-2">ERP / Business Software</h3>
              <p className="text-sm text-gray-600">Odoo and enterprise systems</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-accent transition-colors">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-bold mb-2">AI & Automation</h3>
              <p className="text-sm text-gray-600">Leverage AI for productivity</p>
            </div>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Academy Overview */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              IftiVerse was born from a vision to democratize quality education in technology.
              We believe that everyone deserves access to world-class learning resources and 
              mentorship to achieve their career goals. Our mission is to empower learners
              with practical skills that are directly applicable in the industry.
            </p>
          </div>

          {/* Instructors */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10">Meet Our Instructors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {instructors.map((instructor) => (
                <div key={instructor.id} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍🏫</span>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{instructor.name}</h4>
                  <p className="text-sm text-accent mb-3">{instructor.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{instructor.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.expertise.slice(0, 2).map((skill, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coordinators */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10">Our Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {coordinators.map((coordinator) => (
                <div key={coordinator.id} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{coordinator.name}</h4>
                      <p className="text-sm text-accent mb-2">{coordinator.role}</p>
                      <p className="text-sm text-gray-600 mb-2">{coordinator.bio}</p>
                      <a href={`mailto:${coordinator.email}`} className="text-sm text-accent hover:underline">
                        {coordinator.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Guidance */}
          <div className="bg-white p-10 rounded-lg border-2 border-accent mb-16">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Career Guidance</h3>
              <p className="text-gray-600 mb-6">
                Not sure which path to choose? Our career guidance experts are here to help you
                make informed decisions about your learning journey and career goals.
              </p>
              <Link href="/contact">
                <Button variant="primary">Schedule Free Session</Button>
              </Link>
            </div>
          </div>

          {/* Marketing Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5000+</div>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-gray-600">Courses Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h3>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students already learning with IftiVerse
            </p>
            <Link href="/courses">
              <Button variant="primary" className="text-lg px-10 py-4">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
