# Vercel Deployment Guide for IftiVerse

This guide provides step-by-step instructions for deploying the IftiVerse learning platform to Vercel.

## 📋 Prerequisites

Before you begin, make sure you have:

1. A [GitHub](https://github.com) account
2. A [Vercel](https://vercel.com) account (you can sign up with GitHub)
3. Git installed on your local machine
4. Node.js (v18 or later) installed

## 🚀 Deployment Methods

### Method 1: Deploy via GitHub (Recommended)

This is the easiest and most reliable method for deploying to Vercel.

#### Step 1: Push Your Code to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Commit your changes**:
   ```bash
   git commit -m "Initial commit: IftiVerse learning platform"
   ```

4. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com)
   - Click the "+" icon → "New repository"
   - Name it "iftiverse" (or any name you prefer)
   - Keep it public or private
   - **DO NOT** initialize with README (your local repo already has files)
   - Click "Create repository"

5. **Link your local repository to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/iftiverse.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your actual GitHub username.

#### Step 2: Deploy on Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**:
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find and select your "iftiverse" repository
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Vercel should auto-detect "Next.js" ✓
   - **Root Directory**: Leave as `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (Optional - none needed for now):
   - Skip this section for now
   - Click "Deploy"

5. **Wait for Deployment**:
   - Vercel will build and deploy your app
   - This typically takes 2-3 minutes
   - You'll see a success screen with your live URL

6. **Access Your Site**:
   - Your site will be available at: `https://iftiverse-xyz.vercel.app`
   - Click on the URL to view your deployed site

### Method 2: Deploy via Vercel CLI

If you prefer command-line deployment:

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

#### Step 3: Deploy

```bash
# Navigate to project directory
cd "C:\Users\utsha\OneDrive\Desktop\Academy"

# Deploy (first time)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? iftiverse
# - In which directory is your code located? ./
# - Auto-detected Project Settings (Next.js)? Yes
```

#### Step 4: Deploy to Production

```bash
vercel --prod
```

## 🌐 Custom Domain Setup (Optional)

If you want to use a custom domain like `academy.yourdomain.com`:

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Enter your domain: `academy.yourdomain.com`
4. Click "Add"

### Step 2: Configure DNS

Vercel will provide DNS instructions. You need to add a CNAME record:

#### For Subdomain (academy.yourdomain.com):

1. Go to your domain registrar's DNS settings
2. Add a new CNAME record:
   - **Name/Host**: `academy`
   - **Value/Points to**: `cname.vercel-dns.com`
   - **TTL**: 3600 (or default)

3. Save the record
4. Wait for DNS propagation (can take 24-48 hours, usually much faster)

#### For Root Domain (yourdomain.com):

1. Add an A record:
   - **Name/Host**: `@` or leave empty
   - **Value/Points to**: `76.76.21.21` (Vercel's IP)

2. Add AAAA records for IPv6:
   - `2606:4700:4700::1111`

Note: Check Vercel's documentation for the latest IP addresses.

## 🔄 Automatic Deployments

Once connected to GitHub, Vercel will automatically deploy:

- **Every push to main branch** → Production deployment
- **Every pull request** → Preview deployment with unique URL

You don't need to manually deploy again!

## 🧪 Testing Your Deployment

After deployment, test these pages:

### Public Pages
- Homepage: `https://your-site.vercel.app/`
- About: `https://your-site.vercel.app/about`
- Courses: `https://your-site.vercel.app/courses`
- Tutorials: `https://your-site.vercel.app/tutorials`
- Notes: `https://your-site.vercel.app/notes`
- Blogs: `https://your-site.vercel.app/blogs`
- Contact: `https://your-site.vercel.app/contact`

### Student Portal
- Portal Home: `https://your-site.vercel.app/student`
- Dashboard: `https://your-site.vercel.app/student/dashboard`
- My Courses: `https://your-site.vercel.app/student/courses`
- Progress: `https://your-site.vercel.app/student/progress`
- Practice: `https://your-site.vercel.app/student/practice`

### API Routes (Serverless Functions)
- Health: `https://your-site.vercel.app/api/health`
- Courses: `https://your-site.vercel.app/api/courses`
- Tutorials: `https://your-site.vercel.app/api/tutorials`
- Blogs: `https://your-site.vercel.app/api/blogs`
- Notes: `https://your-site.vercel.app/api/notes`

## 🐛 Troubleshooting

### Build Fails

**Issue**: "Module not found" or dependency errors

**Solution**:
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Try building locally
npm run build
```

### 404 Errors on Routes

**Issue**: Dynamic routes return 404

**Solution**: Make sure you're using Next.js App Router correctly. Check:
- File names: `page.js` (not `index.js`)
- Dynamic routes: `[slug]/page.js`

### API Routes Not Working

**Issue**: API returns 404 or 500

**Solution**: 
- Verify files are in `src/app/api/[route]/route.js`
- Check for syntax errors in API files
- Ensure you're returning `NextResponse.json()`

### Slow Build Times

**Issue**: Deployment takes too long

**Solution**:
- Check for large dependencies
- Optimize images
- Remove unused packages

## 🔒 Security & Performance

### Before Going Live:

1. **Add `.env.local` to `.gitignore`** (already done)
2. **Never commit sensitive data** to GitHub
3. **Enable Analytics** in Vercel Dashboard
4. **Set up monitoring** for uptime
5. **Configure Web Analytics** for user insights

### Performance Optimization:

- Images are already set to `unoptimized: true` for static export
- Static generation is enabled by default
- API routes are automatically serverless

## 📊 Monitoring Your Deployment

### Vercel Dashboard Features:

1. **Analytics**: View page views, user interactions
2. **Logs**: Check function execution logs
3. **Deployments**: View deployment history
4. **Performance**: Monitor loading times
5. **Bandwidth**: Track usage

## 🔄 Making Updates

### To update your live site:

1. **Make changes locally**
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
3. **Push to GitHub**:
   ```bash
   git push origin main
   ```
4. **Vercel auto-deploys** (no further action needed!)

## 📱 Mobile Testing

After deployment, test on:
- Mobile devices (iOS, Android)
- Different browsers (Chrome, Safari, Firefox)
- Different screen sizes

## ✅ Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] API endpoints return data
- [ ] Mobile responsiveness works
- [ ] Forms submit (even if mock)
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Custom domain configured (if applicable)

## 🎉 Success!

Your IftiVerse platform should now be live and accessible to the world!

**Share your URL**: `https://your-project.vercel.app`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)

## 🆘 Need Help?

If you encounter issues:

1. Check [Vercel Status](https://www.vercel-status.com/)
2. Review [Vercel Community](https://github.com/vercel/next.js/discussions)
3. Contact Vercel Support
4. Check deployment logs in Vercel Dashboard

---

**Note**: This is a UI-only version. No database or authentication is required at this stage, making deployment straightforward and error-free.

Good luck with your deployment! 🚀
