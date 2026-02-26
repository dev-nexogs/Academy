import NoteCard from '@/components/NoteCard'
import { notes, noteCategories } from '@/data/notes'

export default function NotesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6">Learning Resources & Notes</h1>
          <p className="text-xl text-gray-600">
            Comprehensive study materials, cheat sheets, and reference guides to supplement your learning journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-2 rounded-full bg-accent text-white">
            All
          </button>
          {noteCategories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-gray-300 hover:border-accent hover:text-accent transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">High-Quality Study Materials</h3>
              <p className="text-blue-800 text-sm">
                All our notes are carefully curated by industry experts and regularly updated to reflect 
                the latest best practices. Download PDFs for offline access and easier reference.
              </p>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-accent/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need More Guidance?</h2>
            <p className="text-gray-600 mb-6">
              Our comprehensive courses include detailed notes, video explanations, and hands-on projects.
            </p>
            <a 
              href="/courses" 
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Explore Courses
            </a>
          </div>

          <div className="bg-green-50 p-8 rounded-lg border border-green-200">
            <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
            <p className="text-gray-600 mb-6">
              If you have quality study materials you'd like to share with our community, we'd love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
