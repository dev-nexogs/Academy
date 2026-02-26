import BlogCard from '@/components/BlogCard'
import { blogs, blogCategories } from '@/data/blogs'

export default function BlogsPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6">Blog & Articles</h1>
          <p className="text-xl text-gray-600">
            Insights, tutorials, and industry updates from our team of experts and guest contributors.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-2 rounded-full bg-accent text-white">
            All
          </button>
          {blogCategories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-gray-300 hover:border-accent hover:text-accent transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8 mb-12">
          <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-xs font-semibold mb-4">
            FEATURED POST
          </span>
          <h2 className="text-3xl font-bold mb-4">{blogs[0].title}</h2>
          <p className="text-gray-600 mb-4">{blogs[0].excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By {blogs[0].author}</span>
            <span>•</span>
            <span>{blogs[0].readTime}</span>
            <span>•</span>
            <span>{new Date(blogs[0].date).toLocaleDateString()}</span>
          </div>
          <a 
            href={`/blogs/${blogs[0].slug}`}
            className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Read More
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.slice(1).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-accent text-white p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6 text-indigo-100">
            Get the latest articles, tutorials, and tech insights delivered to your inbox every week.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
            />
            <button className="px-6 py-3 bg-white text-accent rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-indigo-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
}
