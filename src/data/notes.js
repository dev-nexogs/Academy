export const notes = [
  {
    id: 1,
    slug: 'javascript-cheatsheet',
    title: 'JavaScript Cheat Sheet',
    category: 'Programming',
    description: 'Quick reference guide for JavaScript syntax and common patterns.',
    downloadUrl: '#',
    pages: 12,
    fileSize: '2.4 MB'
  },
  {
    id: 2,
    slug: 'react-hooks-reference',
    title: 'React Hooks Reference',
    category: 'Web Development',
    description: 'Complete guide to all React hooks with examples.',
    downloadUrl: '#',
    pages: 18,
    fileSize: '3.1 MB'
  },
  {
    id: 3,
    slug: 'python-data-structures',
    title: 'Python Data Structures',
    category: 'Programming',
    description: 'Comprehensive notes on Python lists, tuples, sets, and dictionaries.',
    downloadUrl: '#',
    pages: 24,
    fileSize: '4.2 MB'
  },
  {
    id: 4,
    slug: 'nodejs-best-practices',
    title: 'Node.js Best Practices',
    category: 'Backend',
    description: 'Industry-standard practices for building Node.js applications.',
    downloadUrl: '#',
    pages: 20,
    fileSize: '3.5 MB'
  },
  {
    id: 5,
    slug: 'sql-query-guide',
    title: 'SQL Query Guide',
    category: 'Database',
    description: 'Master SQL queries with practical examples and exercises.',
    downloadUrl: '#',
    pages: 32,
    fileSize: '5.8 MB'
  },
  {
    id: 6,
    slug: 'git-commands-handbook',
    title: 'Git Commands Handbook',
    category: 'Tools',
    description: 'Essential Git commands and workflows for developers.',
    downloadUrl: '#',
    pages: 15,
    fileSize: '2.8 MB'
  },
  {
    id: 7,
    slug: 'css-layouts-masterclass',
    title: 'CSS Layouts Masterclass',
    category: 'Web Development',
    description: 'Flexbox, Grid, and modern CSS layout techniques.',
    downloadUrl: '#',
    pages: 28,
    fileSize: '4.6 MB'
  },
  {
    id: 8,
    slug: 'mongodb-aggregation',
    title: 'MongoDB Aggregation Framework',
    category: 'Database',
    description: 'Advanced MongoDB queries and data aggregation patterns.',
    downloadUrl: '#',
    pages: 22,
    fileSize: '3.9 MB'
  },
  {
    id: 9,
    slug: 'rest-api-design',
    title: 'REST API Design Principles',
    category: 'Backend',
    description: 'Design scalable and maintainable REST APIs.',
    downloadUrl: '#',
    pages: 16,
    fileSize: '2.9 MB'
  },
  {
    id: 10,
    slug: 'odoo-development-guide',
    title: 'Odoo Development Guide',
    category: 'ERP',
    description: 'Custom module development in Odoo ERP system.',
    downloadUrl: '#',
    pages: 45,
    fileSize: '8.2 MB'
  }
]

export const getNoteBySlug = (slug) => {
  return notes.find(note => note.slug === slug)
}

export const getNotesByCategory = (category) => {
  return notes.filter(note => note.category === category)
}

export const noteCategories = [
  'Programming',
  'Web Development',
  'Backend',
  'Database',
  'Tools',
  'ERP'
]
