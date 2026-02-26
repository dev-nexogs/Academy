export const blogs = [
  {
    id: 1,
    slug: 'future-of-web-development-2026',
    title: 'The Future of Web Development in 2026',
    author: 'John Doe',
    date: '2026-02-15',
    category: 'Web Development',
    excerpt: 'Explore the emerging trends and technologies shaping web development this year.',
    readTime: '8 min read',
    image: '/images/blog1.jpg',
    content: `
# The Future of Web Development in 2026

Web development continues to evolve at a rapid pace. Here are the key trends shaping the industry in 2026.

## 1. Server Components Become Standard

React Server Components and similar technologies are now mainstream, offering better performance and user experience.

## 2. AI-Assisted Development

AI tools like GitHub Copilot and ChatGPT have become essential development companions, boosting productivity significantly.

## 3. Edge Computing

Edge functions and distributed computing bring applications closer to users, reducing latency and improving performance.

## 4. Web3 Integration

Blockchain and decentralized technologies are gradually finding their way into mainstream web applications.

## 5. Progressive Web Apps (PWAs)

PWAs continue to bridge the gap between web and native apps, offering offline capabilities and app-like experiences.

## Conclusion

The future of web development is exciting and full of opportunities. Stay curious and keep learning!
    `
  },
  {
    id: 2,
    slug: 'mastering-python-for-data-science',
    title: 'Mastering Python for Data Science',
    author: 'Jane Smith',
    date: '2026-02-10',
    category: 'Data Science',
    excerpt: 'A comprehensive guide to using Python for data analysis and machine learning.',
    readTime: '12 min read',
    image: '/images/blog2.jpg',
    content: `
# Mastering Python for Data Science

Python has become the go-to language for data science. Let's explore why and how to master it.

## Essential Libraries

### 1. NumPy
Foundation for numerical computing in Python.

### 2. Pandas
Data manipulation and analysis library.

### 3. Matplotlib & Seaborn
Data visualization libraries.

### 4. Scikit-learn
Machine learning algorithms and tools.

## Getting Started

\`\`\`python
import pandas as pd
import numpy as np

data = pd.read_csv('data.csv')
print(data.head())
\`\`\`

## Machine Learning Workflow

1. Data Collection
2. Data Cleaning
3. Exploratory Data Analysis
4. Feature Engineering
5. Model Training
6. Evaluation
7. Deployment

## Conclusion

Python's ecosystem makes data science accessible and powerful. Start your journey today!
    `
  },
  {
    id: 3,
    slug: 'building-scalable-nodejs-apps',
    title: 'Building Scalable Node.js Applications',
    author: 'Mike Johnson',
    date: '2026-02-05',
    category: 'Backend',
    excerpt: 'Best practices and patterns for building enterprise-grade Node.js applications.',
    readTime: '10 min read',
    image: '/images/blog3.jpg',
    content: `
# Building Scalable Node.js Applications

Scalability is crucial for modern applications. Here's how to build Node.js apps that can grow.

## Architecture Patterns

### 1. Microservices
Break down monolithic applications into smaller, independent services.

### 2. Event-Driven Architecture
Use message queues and event buses for asynchronous communication.

### 3. Caching Strategies
Implement Redis or similar caching solutions for frequently accessed data.

## Performance Optimization

\`\`\`javascript
// Use connection pooling
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000
})

// Implement caching
const cache = new Redis()
\`\`\`

## Monitoring & Logging

- Use PM2 or similar process managers
- Implement structured logging
- Set up monitoring dashboards
- Configure alerts

## Conclusion

Scalability requires planning and the right architecture. Follow these patterns for success.
    `
  },
  {
    id: 4,
    slug: 'odoo-erp-customization-tips',
    title: 'Odoo ERP Customization Tips',
    author: 'Sarah Williams',
    date: '2026-01-28',
    category: 'ERP',
    excerpt: 'Learn how to customize Odoo ERP to fit your business needs perfectly.',
    readTime: '15 min read',
    image: '/images/blog4.jpg',
    content: `
# Odoo ERP Customization Tips

Odoo is a powerful ERP system that can be customized to fit any business. Here's how.

## Module Development

Create custom modules to extend Odoo functionality:

\`\`\`python
from odoo import models, fields

class CustomModel(models.Model):
    _name = 'custom.model'
    _description = 'Custom Model'
    
    name = fields.Char(string='Name')
    description = fields.Text(string='Description')
\`\`\`

## View Customization

Modify existing views or create new ones:

\`\`\`xml
<record id="view_custom_form" model="ir.ui.view">
    <field name="name">custom.form</field>
    <field name="model">custom.model</field>
    <field name="arch" type="xml">
        <form>
            <field name="name"/>
            <field name="description"/>
        </form>
    </field>
</record>
\`\`\`

## Best Practices

1. Follow Odoo coding standards
2. Use inheritance instead of modification
3. Test thoroughly
4. Document your customizations

## Conclusion

Odoo's flexibility makes it perfect for any business. Follow these tips for successful customization.
    `
  },
  {
    id: 5,
    slug: 'career-transition-to-tech',
    title: 'Making a Career Transition to Tech',
    author: 'David Brown',
    date: '2026-01-20',
    category: 'Career',
    excerpt: 'A practical guide for professionals looking to transition into the tech industry.',
    readTime: '9 min read',
    image: '/images/blog5.jpg',
    content: `
# Making a Career Transition to Tech

Changing careers can be daunting, but with the right approach, you can successfully transition to tech.

## Step 1: Choose Your Path

- Frontend Development
- Backend Development
- Data Science
- DevOps
- Mobile Development

## Step 2: Learn the Fundamentals

Start with the basics:
- Programming fundamentals
- Git & version control
- Problem-solving skills

## Step 3: Build Projects

Create a portfolio:
- Personal projects
- Open-source contributions
- Freelance work

## Step 4: Network & Apply

- Attend meetups
- Connect on LinkedIn
- Apply strategically

## Step 5: Prepare for Interviews

- Practice coding challenges
- Prepare behavioral questions
- Review system design

## Conclusion

Career transitions take time and effort, but they're definitely achievable. Stay consistent and persistent!
    `
  },
  {
    id: 6,
    slug: 'ai-tools-for-developers',
    title: 'Top AI Tools Every Developer Should Use',
    author: 'Emily Davis',
    date: '2026-01-15',
    category: 'AI',
    excerpt: 'Boost your productivity with these game-changing AI tools for developers.',
    readTime: '7 min read',
    image: '/images/blog6.jpg',
    content: `
# Top AI Tools Every Developer Should Use

AI is transforming how we code. Here are the must-have tools for modern developers.

## 1. GitHub Copilot

AI pair programmer that suggests code in real-time.

**Best for**: Code completion, boilerplate generation

## 2. ChatGPT

Conversational AI for debugging, explaining code, and brainstorming.

**Best for**: Problem-solving, learning new concepts

## 3. TabNine

AI-powered code completion supporting multiple languages.

**Best for**: Multi-language projects

## 4. Codeium

Free AI coding assistant with chat capabilities.

**Best for**: Budget-conscious developers

## 5. Sourcegraph Cody

AI assistant with codebase awareness.

**Best for**: Large codebases

## Conclusion

AI tools are no longer optional—they're essential for staying competitive. Start using them today!
    `
  }
]

export const getBlogBySlug = (slug) => {
  return blogs.find(blog => blog.slug === slug)
}

export const getBlogsByCategory = (category) => {
  return blogs.filter(blog => blog.category === category)
}

export const blogCategories = [
  'Web Development',
  'Data Science',
  'Backend',
  'ERP',
  'Career',
  'AI'
]
