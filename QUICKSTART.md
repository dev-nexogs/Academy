# 🚀 Quick Start Guide - IftiVerse

Get your IftiVerse learning platform up and running in minutes!

## ⚡ Installation

1. **Navigate to the project directory**:
   ```bash
   cd "C:\Users\utsha\OneDrive\Desktop\Academy"
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

## 🏃 Running Locally

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

Your app will be available at: **http://localhost:3000**

### Production Build

Build the optimized production version:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## 📂 Project Structure

```
Academy/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Homepage
│   │   ├── layout.js          # Root layout (Navbar + Footer)
│   │   ├── globals.css        # Global styles
│   │   ├── about/             # About page
│   │   ├── blogs/             # Blogs listing & detail pages
│   │   ├── contact/           # Contact page
│   │   ├── courses/           # Courses listing & detail pages
│   │   ├── notes/             # Notes/Resources page
│   │   ├── tutorials/         # Tutorials listing & detail pages
│   │   ├── student/           # Student portal pages
│   │   │   ├── page.js        # Portal home
│   │   │   ├── dashboard/     # Student dashboard
│   │   │   ├── courses/       # My courses
│   │   │   ├── progress/      # Progress tracking
│   │   │   └── practice/      # Coding practice
│   │   └── api/               # Serverless API routes
│   │       ├── health/        # Health check
│   │       ├── courses/       # Get courses data
│   │       ├── tutorials/     # Get tutorials data
│   │       ├── blogs/         # Get blogs data
│   │       └── notes/         # Get notes data
│   ├── components/            # Reusable React components
│   │   ├── Navbar.js         # Navigation bar
│   │   ├── Footer.js         # Footer
│   │   ├── Button.js         # Button component
│   │   ├── CourseCard.js     # Course card
│   │   ├── TutorialCard.js   # Tutorial card
│   │   ├── BlogCard.js       # Blog card
│   │   └── NoteCard.js       # Note card
│   └── data/                  # Mock data (no database)
│       ├── courses.js        # Course data
│       ├── tutorials.js      # Tutorial data
│       ├── blogs.js          # Blog data
│       ├── notes.js          # Notes data
│       └── team.js           # Team & student data
├── public/                    # Static assets
├── .gitignore                # Git ignore file
├── package.json              # Dependencies & scripts
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── jsconfig.json             # Path aliases config
├── vercel.json               # Vercel deployment config
├── README.md                 # Project documentation
├── DEPLOYMENT_GUIDE.md       # Deployment instructions
└── .env.example              # Environment variables template
```

## 🎨 Key Features

### Public Pages
- ✅ Homepage with hero section, featured courses, and success stories
- ✅ About page with mission, vision, and team information
- ✅ Courses listing and individual course detail pages
- ✅ Free tutorials with categorization
- ✅ Downloadable notes/resources
- ✅ Blog with articles and insights
- ✅ Contact form and information

### Student Portal (UI Only)
- ✅ Dashboard with learning stats
- ✅ My Courses with progress tracking
- ✅ Progress page with achievements
- ✅ Practice coding environment (UI only)

### API Routes (Serverless)
- ✅ `/api/health` - Health check
- ✅ `/api/courses` - Get all courses
- ✅ `/api/tutorials` - Get all tutorials
- ✅ `/api/blogs` - Get all blogs
- ✅ `/api/notes` - Get all notes

## 🎯 Testing Your App

After starting the dev server, test these routes:

### Main Pages
- Homepage: http://localhost:3000
- About: http://localhost:3000/about
- Courses: http://localhost:3000/courses
- Tutorials: http://localhost:3000/tutorials
- Notes: http://localhost:3000/notes
- Blogs: http://localhost:3000/blogs
- Contact: http://localhost:3000/contact

### Student Portal
- Portal: http://localhost:3000/student
- Dashboard: http://localhost:3000/student/dashboard
- My Courses: http://localhost:3000/student/courses
- Progress: http://localhost:3000/student/progress
- Practice: http://localhost:3000/student/practice

### API Endpoints
- Health: http://localhost:3000/api/health
- Courses: http://localhost:3000/api/courses
- Tutorials: http://localhost:3000/api/tutorials

## 📱 Mobile Testing

The app is fully responsive. Test on:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## 🔧 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      accent: '#6366f1', // Change this to your brand color
    },
  },
}
```

### Update Content

All content is in the `src/data/` folder:
- Modify `courses.js` to update course listings
- Modify `tutorials.js` to change tutorials
- Modify `blogs.js` to update blog content
- Modify `team.js` to change team information

### Add New Pages

1. Create a new folder in `src/app/`
2. Add a `page.js` file
3. Export a React component
4. The route will be automatically available

Example:
```javascript
// src/app/pricing/page.js
export default function PricingPage() {
  return <div>Pricing Page</div>
}
```

Access at: http://localhost:3000/pricing

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

### Build Errors

Clear cache and rebuild:

```bash
rm -rf .next
npm run build
```

### Module Not Found

Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 🚀 Next Steps

1. **Customize Content**: Update data files with your own content
2. **Add Logo**: Place your logo in `public/` folder
3. **Test Locally**: Verify all pages work correctly
4. **Deploy to Vercel**: Follow the `DEPLOYMENT_GUIDE.md`
5. **Share Your Site**: Send the URL to your students!

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Read `DEPLOYMENT_GUIDE.md` for Vercel deployment
- Review [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

## ✅ Production Checklist

Before deploying:

- [ ] Update all placeholder content
- [ ] Test all pages and routes
- [ ] Verify mobile responsiveness
- [ ] Check API endpoints
- [ ] Review console for errors
- [ ] Test navigation flow
- [ ] Optimize images (if any)
- [ ] Build succeeds without errors

## 🎉 You're Ready!

Your IftiVerse learning platform is set up and ready to deploy. Follow the deployment guide to go live on Vercel!

---

**Happy Teaching! 📚🚀**
