import Link from 'next/link'

export default function TutorialCard({ tutorial }) {
  return (
    <Link href={`/tutorials/${tutorial.slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="mb-3">
          <span className="text-xs font-semibold text-accent bg-indigo-50 px-3 py-1 rounded-full">
            {tutorial.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {tutorial.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{tutorial.duration}</span>
          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-medium">
            {tutorial.level}
          </span>
        </div>
      </div>
    </Link>
  )
}
