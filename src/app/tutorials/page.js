import TutorialCard from '@/components/TutorialCard'
import { tutorials, categories } from '@/data/tutorials'

export default function TutorialsPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6">Free Tutorials</h1>
          <p className="text-xl text-gray-600">
            Learn new skills with our comprehensive, free tutorials. Perfect for beginners and intermediate learners.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-2 rounded-full bg-accent text-white">
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-gray-300 hover:border-accent hover:text-accent transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12 text-center">
          <p className="text-green-800 font-semibold">
            ✨ All tutorials are completely FREE and always will be!
          </p>
          <p className="text-green-700 text-sm mt-2">
            New tutorials added every week. Bookmark this page to stay updated.
          </p>
        </div>

        {/* Tutorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-accent/5 p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Want More In-Depth Learning?</h2>
          <p className="text-gray-600 mb-6">
            Check out our comprehensive paid courses with projects, assignments, and certificates.
          </p>
          <a 
            href="/courses" 
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            View All Courses
          </a>
        </div>
      </div>
    </div>
  )
}
