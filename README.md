# IftiVerse - A Modern Learning Platform

**IftiVerse** is a minimal, scalable online academy platform built with Next.js and designed for seamless Vercel deployment.

## 🚀 Features

- Free tutorials and learning resources
- Paid course listings (UI only)
- Blog section
- Career guidance session scheduling
- Student portal with dashboard & practice environment
- Mobile-first responsive design
- Serverless-ready architecture

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Backend**: Next.js API Routes (Serverless)
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment to Vercel

### Method 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: IftiVerse platform"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add: `academy.yourdomain.com`
   - Add CNAME record in your DNS: `academy` → `cname.vercel-dns.com`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
iftiverse/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/
│   │   ├── blogs/
│   │   ├── contact/
│   │   ├── courses/
│   │   ├── notes/
│   │   ├── student/
│   │   ├── tutorials/
│   │   └── api/          # Serverless API routes
│   ├── components/       # Reusable components
│   ├── data/            # Mock data files
│   └── styles/          # Global styles
├── public/              # Static assets
├── vercel.json          # Vercel configuration
└── package.json
```

## 🎨 Design Principles

- Minimal & clean interface
- White background with black text
- Indigo blue accent color
- Large spacing for readability
- Professional academy aesthetic
- Mobile-first responsive design

## 📝 Notes

- No database connection (uses mock data)
- No authentication logic (UI only)
- All APIs return static JSON
- Serverless-ready for scalability
- Future-ready for easy feature additions

## 📄 License

© 2026 IftiVerse – A Nexogs Initiative

---

**Need help?** Contact us through the platform or visit our contact page.
