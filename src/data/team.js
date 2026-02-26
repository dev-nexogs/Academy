export const instructors = [
  {
    id: 1,
    name: 'Md. Iftiajul Alam',
    role: 'Lead Instructor - Web Development',
    bio: '10+ years of experience in full-stack development. Worked at top tech companies including Google and Microsoft.',
    expertise: ['React', 'Node.js', 'TypeScript', 'System Design'],
    image: '/images/instructor1.jpg'
  },
  {
    id: 2,
    name: 'Alfat Tasnim Hasan',
    role: 'Senior Instructor - Data Science',
    bio: 'PhD in Computer Science with focus on Machine Learning. Published researcher and industry consultant.',
    expertise: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow'],
    image: '/images/instructor2.jpg'
  },
  {
    id: 3,
    name: 'Sazidul Alam',
    role: 'ERP Specialist',
    bio: 'Certified Odoo developer with 8 years of enterprise software implementation experience.',
    expertise: ['Odoo', 'Business Process', 'ERP Implementation', 'Python'],
    image: '/images/instructor3.jpg'
  },
  {
    id: 4,
    name: 'Mohammad Razu',
    role: 'Instructor - AI & Automation',
    bio: 'AI enthusiast and automation expert. Helps businesses leverage AI for productivity.',
    expertise: ['ChatGPT', 'AI Tools', 'Workflow Automation', 'Prompt Engineering'],
    image: '/images/instructor4.jpg'
  }
]

export const coordinators = [
  {
    id: 1,
    name: 'Md. Iftiajul Alam',
    role: 'Academic Coordinator',
    bio: 'Ensures smooth course delivery and student success. 5+ years in educational management.',
    email: 'david@iftiverse.com'
  },
  {
    id: 2,
    name: 'Saidur Rahman',
    role: 'Career Guidance Coordinator',
    bio: 'Helps students navigate their career paths. Former HR manager at Fortune 500 companies.',
    email: 'emily@iftiverse.com'
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Messi',
    role: 'Software Engineer at Google',
    text: 'IftiVerse helped me land my dream job. The practical projects and mentorship were invaluable.',
    rating: 5
  },
  {
    id: 2,
    name: 'Ronaldo',
    role: 'Full Stack Developer',
    text: 'Best online academy I\'ve enrolled in. The instructors are knowledgeable and always available to help.',
    rating: 5
  },
  {
    id: 3,
    name: 'Robert Chen',
    role: 'Data Scientist',
    text: 'Transitioned from finance to tech thanks to IftiVerse. The career guidance was exceptional.',
    rating: 5
  }
]

export const studentData = {
  enrolledCourses: [
    {
      id: 1,
      title: 'Full Stack Web Development',
      progress: 65,
      instructor: 'John Doe',
      nextLesson: 'React Hooks Deep Dive'
    },
    {
      id: 2,
      title: 'Python Programming Masterclass',
      progress: 40,
      instructor: 'Jane Smith',
      nextLesson: 'Object-Oriented Programming'
    }
  ],
  recentActivity: [
    {
      id: 1,
      type: 'lesson',
      title: 'Completed: React State Management',
      date: '2 hours ago'
    },
    {
      id: 2,
      type: 'assignment',
      title: 'Submitted: Build a Todo App',
      date: '1 day ago'
    },
    {
      id: 3,
      type: 'quiz',
      title: 'Scored 90% in JavaScript Quiz',
      date: '3 days ago'
    }
  ]
}
