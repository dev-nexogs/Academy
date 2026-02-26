export const tutorials = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    category: 'Web Development',
    description: 'Learn the fundamentals of React and build your first component.',
    duration: '30 min read',
    level: 'Beginner',
    content: `
# Getting Started with React

React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Meta and a community of individual developers.

## Why React?

- **Component-Based**: Build encapsulated components that manage their own state
- **Declarative**: Design simple views for each state in your application
- **Learn Once, Write Anywhere**: Develop new features without rewriting existing code

## Your First Component

\`\`\`jsx
function Welcome() {
  return <h1>Hello, World!</h1>
}
\`\`\`

## Key Concepts

1. **JSX**: JavaScript XML syntax
2. **Components**: Reusable UI pieces
3. **Props**: Pass data to components
4. **State**: Manage component data

Start building amazing user interfaces today!
    `
  },
  {
    id: 2,
    slug: 'python-basics',
    title: 'Python Basics for Beginners',
    category: 'Programming',
    description: 'Master Python syntax, variables, and control structures.',
    duration: '45 min read',
    level: 'Beginner',
    content: `
# Python Basics for Beginners

Python is a high-level, interpreted programming language known for its simplicity and readability.

## Variables and Data Types

\`\`\`python
name = "IftiVerse"
age = 25
is_learning = True
\`\`\`

## Control Structures

### If-Else
\`\`\`python
if age >= 18:
    print("Adult")
else:
    print("Minor")
\`\`\`

### Loops
\`\`\`python
for i in range(5):
    print(i)
\`\`\`

## Functions

\`\`\`python
def greet(name):
    return f"Hello, {name}!"
\`\`\`

Practice makes perfect!
    `
  },
  {
    id: 3,
    slug: 'css-flexbox-guide',
    title: 'Complete CSS Flexbox Guide',
    category: 'Web Development',
    description: 'Master CSS Flexbox layout with practical examples.',
    duration: '40 min read',
    level: 'Beginner',
    content: `
# Complete CSS Flexbox Guide

Flexbox is a one-dimensional layout method for arranging items in rows or columns.

## Basic Flexbox Container

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

## Common Properties

- **justify-content**: Align items horizontally
- **align-items**: Align items vertically
- **flex-direction**: Row or column layout
- **flex-wrap**: Wrap items or not

## Practical Example

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
\`\`\`

Flexbox makes responsive design much easier!
    `
  },
  {
    id: 4,
    slug: 'nodejs-express-basics',
    title: 'Node.js & Express Basics',
    category: 'Backend',
    description: 'Build your first REST API with Node.js and Express.',
    duration: '50 min read',
    level: 'Intermediate',
    content: `
# Node.js & Express Basics

Learn how to build a REST API using Node.js and Express framework.

## Setting Up Express

\`\`\`javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3000)
\`\`\`

## Creating Routes

\`\`\`javascript
app.get('/api/users', (req, res) => {
  res.json({ users: [] })
})

app.post('/api/users', (req, res) => {
  res.json({ success: true })
})
\`\`\`

## Middleware

\`\`\`javascript
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
\`\`\`

Start building powerful APIs!
    `
  },
  {
    id: 5,
    slug: 'git-github-workflow',
    title: 'Git & GitHub Workflow',
    category: 'Tools',
    description: 'Master version control with Git and collaborate on GitHub.',
    duration: '35 min read',
    level: 'Beginner',
    content: `
# Git & GitHub Workflow

Version control is essential for every developer. Learn Git and GitHub basics.

## Basic Git Commands

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

## Branching Strategy

\`\`\`bash
git checkout -b feature/new-feature
git merge feature/new-feature
\`\`\`

## Pull Requests

1. Fork the repository
2. Create a branch
3. Make changes
4. Submit PR
5. Review & merge

Collaborate effectively with your team!
    `
  },
  {
    id: 6,
    slug: 'mongodb-crud-operations',
    title: 'MongoDB CRUD Operations',
    category: 'Database',
    description: 'Learn how to perform Create, Read, Update, Delete operations in MongoDB.',
    duration: '40 min read',
    level: 'Intermediate',
    content: `
# MongoDB CRUD Operations

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.

## Create

\`\`\`javascript
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 25
})
\`\`\`

## Read

\`\`\`javascript
db.users.find({ age: { $gte: 18 } })
\`\`\`

## Update

\`\`\`javascript
db.users.updateOne(
  { name: "John Doe" },
  { $set: { age: 26 } }
)
\`\`\`

## Delete

\`\`\`javascript
db.users.deleteOne({ name: "John Doe" })
\`\`\`

Master database operations!
    `
  }
]

export const getTutorialBySlug = (slug) => {
  return tutorials.find(tutorial => tutorial.slug === slug)
}

export const getTutorialsByCategory = (category) => {
  return tutorials.filter(tutorial => tutorial.category === category)
}

export const categories = [
  'Web Development',
  'Programming',
  'Backend',
  'Database',
  'Tools'
]
