# Deployment Guide

This guide covers various deployment options for your React portfolio website.

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended - Free)

**Why Vercel?**

- Automatic deployments from Git
- Built-in CI/CD
- Global CDN
- Perfect for React apps
- Free tier available

**Steps:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect React and configure build settings
7. Click "Deploy"

**Build Settings (Auto-detected):**

- Framework Preset: Vite
- Build Command: `pnpm run build`
- Output Directory: `dist`

### 2. Netlify (Free)

**Steps:**

1. Build your project locally:
   ```bash
   pnpm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to deploy
4. Or connect your Git repository for automatic deployments

**For SPA routing, add `_redirects` file in `public/`:**

```
/*    /index.html   200
```

### 3. GitHub Pages (Free)

**Steps:**

1. Install gh-pages:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:

   ```json
   {
     "homepage": "https://yourusername.github.io/rehanshabbirak-portfolio",
     "scripts": {
       "predeploy": "pnpm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting (Free)

**Steps:**

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:

   ```bash
   firebase login
   firebase init hosting
   ```

3. Configure:

   - Public directory: `dist`
   - Single-page app: Yes
   - Overwrite index.html: No

4. Build and deploy:
   ```bash
   pnpm run build
   firebase deploy
   ```

## 🔧 Build Configuration

### Environment Variables

If you need environment variables, create `.env` file:

```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

Access in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Custom Domain

Most platforms support custom domains:

1. Add CNAME record pointing to platform
2. Configure domain in platform settings
3. Enable HTTPS (usually automatic)

## 📊 Performance Optimization

### Before Deployment

1. **Optimize images**: Use WebP format, compress images
2. **Bundle analysis**: Run `pnpm run build` and check bundle size
3. **Lighthouse audit**: Test performance, accessibility, SEO
4. **Test on mobile**: Ensure responsive design works

### Post-Deployment

1. **CDN**: Most platforms include CDN automatically
2. **Caching**: Configure proper cache headers
3. **Monitoring**: Set up analytics and error tracking

## 🔍 Testing Before Deployment

### Local Production Build

```bash
pnpm run build
pnpm run preview
```

### Cross-browser Testing

Test on:

- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)
- Mobile browsers

### Performance Testing

- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## 🚨 Common Issues

### 1. Routing Issues (404 on refresh)

**Solution**: Configure server for SPA routing

- Netlify: Add `_redirects` file
- Vercel: Add `vercel.json` with rewrites
- Apache: Configure `.htaccess`

### 2. GSAP License

**Note**: GSAP is free for most use cases. For commercial projects, check licensing.

### 3. Font Loading

**Solution**: Preload fonts in `index.html`:

```html
<link
  rel="preload"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
  as="style"
/>
```

## 📱 Mobile Optimization

### Viewport Meta Tag

Already included in `index.html`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Touch Interactions

- All buttons are touch-friendly (44px minimum)
- Hover effects work on touch devices
- Smooth scrolling enabled

## 🔒 Security Headers

For production, consider adding security headers:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

Most modern hosting platforms include these by default.

---

**Need help with deployment? Feel free to reach out!**
