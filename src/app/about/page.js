import { instructors, coordinators } from '@/data/team'

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">About IftiVerse</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to make quality tech education accessible to everyone,
            everywhere. Learn from the best and build your future with confidence.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower learners worldwide with practical, industry-relevant skills that 
              enable them to succeed in the rapidly evolving tech landscape. We focus on 
              hands-on learning and real-world application.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="text-4xl mb-4">👁️</div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the world's most trusted learning platform for technology education,
              where quality meets accessibility, and every learner can achieve their full 
              potential regardless of their background.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16 bg-gray-50 p-10 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 leading-relaxed">
            <p>
              IftiVerse was founded in 2024 with a simple yet powerful idea: everyone deserves 
              access to high-quality technology education. What started as a small initiative 
              to teach programming to local students has grown into a comprehensive learning 
              platform serving thousands of students worldwide.
            </p>
            <p>
              Our founders, experienced software engineers and educators, noticed a significant 
              gap between traditional education and industry requirements. They created IftiVerse 
              to bridge that gap by offering practical, project-based courses taught by industry 
              professionals.
            </p>
            <p>
              Today, we're proud to be a Nexogs initiative, continuing to expand our course 
              offerings and helping students transition into successful tech careers.
            </p>
          </div>
        </div>

        {/* Instructors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Expert Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍🏫</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{instructor.name}</h3>
                <p className="text-sm text-accent mb-3">{instructor.role}</p>
                <p className="text-sm text-gray-600 mb-4">{instructor.bio}</p>
                <div className="space-y-1">
                  {instructor.expertise.map((skill, index) => (
                    <div key={index} className="text-xs bg-gray-100 px-2 py-1 rounded inline-block mr-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinators Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.map((coordinator) => (
              <div key={coordinator.id} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{coordinator.name}</h3>
                    <p className="text-sm text-accent mb-2">{coordinator.role}</p>
                    <p className="text-sm text-gray-600 mb-3">{coordinator.bio}</p>
                    <a 
                      href={`mailto:${coordinator.email}`} 
                      className="text-sm text-accent hover:underline"
                    >
                      📧 {coordinator.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Methodology */}
        <div className="bg-accent/5 p-10 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-10">Our Teaching Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Project-Based Learning</h3>
              <p className="text-sm text-gray-600">
                Learn by building real-world projects that you can showcase in your portfolio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-lg mb-2">Mentorship & Support</h3>
              <p className="text-sm text-gray-600">
                Get personalized guidance from industry experts throughout your learning journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Hands-On Practice</h3>
              <p className="text-sm text-gray-600">
                Practice coding in our integrated development environment with instant feedback.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-lg mb-2">Comprehensive Resources</h3>
              <p className="text-sm text-gray-600">
                Access tutorials, notes, and supplementary materials for in-depth understanding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">Career Guidance</h3>
              <p className="text-sm text-gray-600">
                Receive career counseling and job placement assistance upon course completion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-lg mb-2">Community Learning</h3>
              <p className="text-sm text-gray-600">
                Join a vibrant community of learners and collaborate on projects together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
