---
description: How to deploy the dynamic portfolio website
---

# Deployment Guide for Impact.224 Portfolio

This guide covers deploying your dynamic React + Supabase portfolio to various platforms.

## 🎯 Recommended Platforms for Dynamic Websites

### Option 1: Vercel (RECOMMENDED) ⭐
**Best for**: Dynamic sites with database, automatic deployments, zero configuration

**Pros**:
- ✅ Perfect for Vite + React applications
- ✅ Automatic deployments from GitHub
- ✅ Built-in environment variable management
- ✅ Free SSL certificates
- ✅ Excellent performance with Edge Network
- ✅ Zero configuration needed
- ✅ Free tier is generous

**Steps**:
1. Push your code to GitHub (if not already done)
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "New Project" and import your `Impact.224-Portfolio` repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `GEMINI_API_KEY`: Your Gemini API key (if used)
6. Click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

**Important**: Remove the `base: "/Impact.224-Portfolio"` from `vite.config.ts` when deploying to Vercel, or update it to match your domain.

---

### Option 2: Netlify
**Best for**: Similar to Vercel, great for JAMstack applications

**Pros**:
- ✅ Easy deployment from GitHub
- ✅ Built-in form handling
- ✅ Great for static + dynamic sites
- ✅ Free tier available

**Steps**:
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `GEMINI_API_KEY`
6. Deploy!

---

### Option 3: GitHub Pages (Current Setup)
**Best for**: Static sites (limited dynamic functionality)

**Limitations**:
- ⚠️ Client-side only (no server-side rendering)
- ⚠️ Environment variables must be baked into build
- ⚠️ Less suitable for dynamic content

**Your current setup is already configured for GitHub Pages!**

**Steps**:
// turbo-all
1. Ensure your Supabase credentials are in `.env.local`:
```bash
# View current environment variables (don't share these!)
type .env.local
```

2. Build the project:
```bash
npm run build
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Enable GitHub Pages in repository settings:
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

**Note**: Environment variables won't work on GitHub Pages without additional configuration. You'll need to either:
- Hardcode them in the build (not recommended for security)
- Use a different platform like Vercel/Netlify

---

### Option 4: Railway
**Best for**: Full-stack applications, databases included

**Pros**:
- ✅ Can host both frontend and backend
- ✅ PostgreSQL database option
- ✅ Easy environment variable management

**Steps**:
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project from GitHub repo
4. Add environment variables
5. Deploy automatically

---

## 🔐 Environment Variables Setup

For any platform, you'll need these environment variables:

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

**Where to find them:**
- **Supabase**: Go to your Supabase project → Settings → API
- **Gemini API**: Google AI Studio

---

## 🚀 Pre-Deployment Checklist

Before deploying, ensure:

1. ✅ All code is committed to GitHub
2. ✅ `.env.local` is in `.gitignore` (don't commit secrets!)
3. ✅ Supabase database is set up and populated
4. ✅ Run a local build test:
```bash
npm run build
npm run preview
```
5. ✅ Test all features locally
6. ✅ Update `vite.config.ts` base path if needed

---

## 🔧 Platform-Specific Configuration

### For Vercel/Netlify (Remove base path):

Edit `vite.config.ts` and remove or update the `base` field:

```typescript
// Change from:
base: "/Impact.224-Portfolio",

// To (for custom domain or Vercel):
base: "/",
```

### For GitHub Pages (Keep base path):

Keep the current configuration:
```typescript
base: "/Impact.224-Portfolio",
```

---

## 🎉 Recommended Deployment Flow

**Best Practice**: Use Vercel for production deployment

1. **Deploy to Vercel** for your live site
2. **Keep GitHub Pages** as a backup/preview environment
3. **Set up automatic deployments**: Every push to `main` branch auto-deploys

---

## 📊 Monitoring After Deployment

After deploying:
1. Test all pages and features
2. Check admin panel functionality
3. Verify Supabase database connections
4. Test content updates through CMS
5. Check browser console for errors
6. Test on mobile devices

---

## 🆘 Troubleshooting

**Issue**: Environment variables not loading
- **Solution**: Ensure they're added in the hosting platform dashboard, not just in `.env.local`

**Issue**: 404 errors on page refresh
- **Solution**: Add redirect rules (platforms like Vercel/Netlify handle this automatically)

**Issue**: Supabase connection fails
- **Solution**: Check if CORS is enabled in Supabase settings for your new domain

**Issue**: Build fails
- **Solution**: Run `npm run build` locally first to catch errors

---

## 📝 Custom Domain Setup (Optional)

After deploying to Vercel/Netlify:
1. Buy a domain (Namecheap, GoDaddy, Google Domains)
2. Add custom domain in platform settings
3. Update DNS records as instructed
4. SSL certificate will be auto-generated

---

**Recommended Next Step**: Deploy to Vercel for the best experience with your dynamic Supabase-powered website! 🚀
