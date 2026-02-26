import { tutorials, getTutorialBySlug } from '@/data/tutorials'
import Link from 'next/link'
import Button from '@/components/Button'

export async function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }))
}

export default function TutorialDetailPage({ params }) {
  const tutorial = getTutorialBySlug(params.slug)

  if (!tutorial) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Tutorial Not Found</h1>
        <Link href="/tutorials">
          <Button variant="primary">Back to Tutorials</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-accent">Home</Link>
          {' / '}
          <Link href="/tutorials" className="hover:text-accent">Tutorials</Link>
          {' / '}
          <span className="text-gray-900">{tutorial.title}</span>
        </div>

        {/* Tutorial Header */}
        <div className="mb-8">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            {tutorial.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{tutorial.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-medium text-sm">
              {tutorial.level}
            </span>
            <span className="flex items-center gap-2">
              <span>⏱️</span>
              {tutorial.duration}
            </span>
            <span className="flex items-center gap-2">
              <span>🆓</span>
              Free Tutorial
            </span>
          </div>

          <p className="text-xl text-gray-600">{tutorial.description}</p>
        </div>

        {/* Tutorial Content */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {tutorial.content}
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Practice?</h2>
          <p className="text-gray-600 mb-6">
            Head over to our student portal to practice what you've learned in our coding environment.
          </p>
          <Link href="/student/practice">
            <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
              Go to Practice Environment
            </button>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/tutorials">
            <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-accent hover:text-accent transition-colors">
              ← Back to Tutorials
            </button>
          </Link>
          <Link href="/courses">
            <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors">
              View Full Courses →
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
