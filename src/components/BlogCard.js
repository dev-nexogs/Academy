import Link from 'next/link'

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="p-6">
          <div className="mb-3">
            <span className="text-xs font-semibold text-accent bg-indigo-50 px-3 py-1 rounded-full">
              {blog.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
          
          <p className="text-gray-600 text-sm mb-4">
            {blog.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>By {blog.author}</span>
            <span>{blog.readTime}</span>
          </div>
          
          <div className="mt-2 text-xs text-gray-400">
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}
