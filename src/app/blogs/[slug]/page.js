import { blogs, getBlogBySlug } from '@/data/blogs'
import Link from 'next/link'
import Button from '@/components/Button'

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default function BlogDetailPage({ params }) {
  const blog = getBlogBySlug(params.slug)

  if (!blog) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <Link href="/blogs">
          <Button variant="primary">Back to Blogs</Button>
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
          <Link href="/blogs" className="hover:text-accent">Blogs</Link>
          {' / '}
          <span className="text-gray-900">{blog.title}</span>
        </div>

        {/* Blog Header */}
        <div className="mb-8">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <span>✍️</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{blog.author}</p>
              </div>
            </div>
            <span>•</span>
            <span>{new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          <p className="text-xl text-gray-600">{blog.excerpt}</p>
        </div>

        {/* Blog Content */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {blog.content}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
              #{blog.category.toLowerCase().replace(' ', '')}
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
              #tutorial
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
              #learning
            </span>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Share this article:</p>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors">
                f
              </button>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors">
                𝕏
              </button>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors">
                in
              </button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-3">About the Author</h3>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">{blog.author}</p>
              <p className="text-gray-600 text-sm">
                A passionate educator and technology enthusiast sharing insights and knowledge 
                with the IftiVerse community. Follow for more articles and tutorials.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/blogs">
            <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-accent hover:text-accent transition-colors">
              ← Back to Blogs
            </button>
          </Link>
          <Link href="/courses">
            <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors">
              View Courses →
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
