export const courses = [
  {
    id: 1,
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    category: 'Web Development',
    description: 'Master modern web development with React, Node.js, and MongoDB. Build production-ready applications from scratch.',
    instructor: 'John Doe',
    duration: '12 weeks',
    level: 'Intermediate',
    price: '$299',
    topics: [
      'HTML, CSS, JavaScript Fundamentals',
      'React.js & Modern Frontend',
      'Node.js & Express Backend',
      'MongoDB Database Design',
      'REST APIs & Authentication',
      'Deployment & DevOps Basics'
    ]
  },
  {
    id: 2,
    slug: 'python-programming-masterclass',
    title: 'Python Programming Masterclass',
    category: 'Programming Languages',
    description: 'Learn Python from basics to advanced concepts. Perfect for beginners and aspiring data scientists.',
    instructor: 'Jane Smith',
    duration: '10 weeks',
    level: 'Beginner',
    price: '$249',
    topics: [
      'Python Basics & Syntax',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'File Handling & Modules',
      'Web Scraping with BeautifulSoup',
      'Introduction to Data Science'
    ]
  },
  {
    id: 3,
    slug: 'erp-systems-odoo',
    title: 'ERP Systems with Odoo',
    category: 'ERP / Business Software',
    description: 'Comprehensive guide to implementing and customizing Odoo ERP for business automation.',
    instructor: 'Mike Johnson',
    duration: '8 weeks',
    level: 'Intermediate',
    price: '$349',
    topics: [
      'ERP Fundamentals',
      'Odoo Installation & Setup',
      'Sales & CRM Module',
      'Inventory & Warehouse Management',
      'Accounting & Finance',
      'Custom Module Development'
    ]
  },
  {
    id: 4,
    slug: 'ai-automation-chatgpt',
    title: 'AI & Automation with ChatGPT',
    category: 'AI & Automation',
    description: 'Harness the power of AI tools to automate workflows and boost productivity.',
    instructor: 'Sarah Williams',
    duration: '6 weeks',
    level: 'Beginner',
    price: '$199',
    topics: [
      'Introduction to AI & LLMs',
      'Prompt Engineering Techniques',
      'ChatGPT API Integration',
      'Workflow Automation',
      'AI-Powered Content Creation',
      'Building AI Chatbots'
    ]
  },
  {
    id: 5,
    slug: 'javascript-advanced',
    title: 'Advanced JavaScript & Design Patterns',
    category: 'Programming Languages',
    description: 'Deep dive into JavaScript internals, ES6+ features, and professional coding patterns.',
    instructor: 'David Brown',
    duration: '8 weeks',
    level: 'Advanced',
    price: '$279',
    topics: [
      'Closures & Scope',
      'Asynchronous JavaScript',
      'Promises & Async/Await',
      'Design Patterns',
      'Performance Optimization',
      'Testing & Debugging'
    ]
  },
  {
    id: 6,
    slug: 'react-nextjs-mastery',
    title: 'React & Next.js Mastery',
    category: 'Web Development',
    description: 'Build modern, SEO-friendly web applications with React and Next.js framework.',
    instructor: 'Emily Davis',
    duration: '10 weeks',
    level: 'Intermediate',
    price: '$299',
    topics: [
      'React Hooks & Context',
      'Next.js App Router',
      'Server Components',
      'API Routes & Serverless',
      'SEO & Performance',
      'Deployment Strategies'
    ]
  }
]

export const getCourseBySlug = (slug) => {
  return courses.find(course => course.slug === slug)
}

export const getCoursesByCategory = (category) => {
  return courses.filter(course => course.category === category)
}
