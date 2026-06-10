# Deployment Guide - QA Engineering Command Center Portfolio

Complete step-by-step guide to deploy your portfolio website to production.

## 📋 Table of Contents

1. [GitHub Pages (Recommended)](#github-pages-recommended)
2. [GitHub Pages Manual Setup](#github-pages-manual-setup)
3. [Vercel Deployment](#vercel-deployment)
4. [Netlify Deployment](#netlify-deployment)
5. [Self-Hosted Deployment](#self-hosted-deployment)
6. [CI/CD Pipeline](#cicd-pipeline)
7. [Post-Deployment Testing](#post-deployment-testing)
8. [Monitoring & Updates](#monitoring--updates)

---

## GitHub Pages (Recommended)

GitHub Pages offers **free hosting** and seamless integration with your GitHub repository.

### Prerequisites

- GitHub account with the repository `praveenpilla/QA-Portfolio`
- GitHub Personal Access Token (for gh-pages)
- Local repository cloned

### Step 1: Update Repository Settings

```bash
# Clone repository
git clone https://github.com/praveenpilla/QA-Portfolio.git
cd QA-Portfolio

# Install dependencies
npm install
```

### Step 2: Verify Homepage URL

Update `package.json` homepage field:

```json
{
  "homepage": "https://praveenpilla.github.io/QA-Portfolio"
}
```

### Step 3: Build the Project

```bash
npm run build
```

### Step 4: Automatic Deployment

GitHub Actions will automatically deploy on push:

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### Step 5: Verify Deployment

1. Go to repository Settings → Pages
2. Verify deployment under "Deployments"
3. Visit: `https://praveenpilla.github.io/QA-Portfolio`

---

## GitHub Pages Manual Setup

If automatic deployment doesn't work:

### Step 1: Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json Scripts

```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 3: Deploy

```bash
npm run deploy
```

### Step 4: Configure GitHub Pages

1. Go to repository Settings → Pages
2. Select source: "Deploy from a branch"
3. Select branch: `gh-pages`
4. Select folder: `/ (root)`
5. Save

### Step 5: Access Your Portfolio

Visit: `https://praveenpilla.github.io/QA-Portfolio`

---

## Vercel Deployment

Vercel offers **automatic deployments** on every push.

### Step 1: Create Vercel Account

- Visit [vercel.com](https://vercel.com)
- Sign in with GitHub
- Authorize Vercel access to your repositories

### Step 2: Import Project

1. Click "New Project"
2. Select "Import Git Repository"
3. Search for "QA-Portfolio"
4. Click Import

### Step 3: Configure Build Settings

Default settings should work, but verify:

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Environment Variables

No special environment variables required for basic setup.

### Step 5: Deploy

Click "Deploy" and wait for build to complete.

### Step 6: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add custom domain
3. Follow DNS configuration
4. Wait for verification

---

## Netlify Deployment

### Step 1: Connect GitHub

1. Visit [netlify.com](https://netlify.com)
2. Click "Connect to Git"
3. Authorize GitHub
4. Select your repository

### Step 2: Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### Step 3: Deploy Settings

Leave defaults and click "Deploy site"

### Step 4: Configure Functions (Optional)

No serverless functions needed for this portfolio.

### Step 5: Custom Domain

1. Go to Site settings → Custom domains
2. Add your domain
3. Update DNS records as instructed

---

## Self-Hosted Deployment

For hosting on your own server:

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Upload to Server

```bash
# Using SSH/SFTP
scp -r dist/* user@yourserver.com:/var/www/portfolio/

# Or using rsync
rsync -avz dist/ user@yourserver.com:/var/www/portfolio/
```

### Step 3: Web Server Configuration

#### Nginx

```nginx
server {
    listen 80;
    server_name portfolio.example.com;
    root /var/www/portfolio;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Apache

```apache
<Directory /var/www/portfolio>
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </IfModule>
</Directory>
```

### Step 4: SSL Certificate

```bash
# Using Let's Encrypt
certbot certonly --webroot -w /var/www/portfolio -d portfolio.example.com
```

### Step 5: HTTPS Configuration

Update nginx/apache config to use SSL certificates.

---

## CI/CD Pipeline

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file includes:

- **Automatic builds** on push
- **Lighthouse performance testing**
- **Automatic deployment** to GitHub Pages

To customize:

1. Edit `.github/workflows/deploy.yml`
2. Modify build steps as needed
3. Commit and push changes
4. Workflow runs automatically

### Workflow Features

```yaml
# Runs on push to main branch
# Installs dependencies
# Builds production bundle
# Runs Lighthouse CI
# Deploys to GitHub Pages
```

---

## Post-Deployment Testing

### Step 1: Verify Deployment

```bash
# Check website loads
curl https://your-portfolio-url.com

# Verify all assets load
# Check console for errors
# Test responsive design
```

### Step 2: Performance Testing

1. **Lighthouse**: DevTools → Lighthouse
2. **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
3. **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

### Step 3: Functional Testing

- [ ] All sections load correctly
- [ ] Animations work smoothly
- [ ] Links work (internal and external)
- [ ] Responsive design on mobile/tablet
- [ ] Forms submit correctly
- [ ] Charts render properly
- [ ] No console errors

### Step 4: SEO Verification

- [ ] Meta tags visible in page source
- [ ] OG tags for social sharing
- [ ] Sitemap present (if needed)
- [ ] robots.txt configured
- [ ] Mobile friendly
- [ ] Page indexable

---

## Monitoring & Updates

### Setup Monitoring

1. **Google Analytics**: Add tracking to index.html
2. **Sentry**: Error tracking (optional)
3. **Uptime Monitoring**: UptimeRobot or similar

### Regular Updates

```bash
# Update dependencies
npm outdated
npm update

# Rebuild and redeploy
npm run build
git add .
git commit -m "Update dependencies"
git push origin main
```

### Backup Strategy

```bash
# Keep local backups
# Use Git version control
# Tag releases
git tag -a v1.0.0 -m "Production release"
git push origin v1.0.0
```

### Security

- [ ] Keep dependencies updated
- [ ] Review GitHub security alerts
- [ ] Enable branch protection
- [ ] Use environment variables for sensitive data
- [ ] Enable HTTPS (automatic with GitHub Pages/Vercel/Netlify)

---

## Troubleshooting

### Deployment Failed

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Assets Not Loading

Check `vite.config.js` base path:

```js
export default defineConfig({
  base: '/QA-Portfolio/', // for GitHub Pages
  // or
  base: '/', // for other platforms
})
```

### Page Not Updating

1. Clear browser cache (Ctrl+Shift+Delete)
2. Check GitHub Actions for build errors
3. Verify deployment completed successfully

### Performance Issues

1. Check Lighthouse report
2. Optimize images
3. Reduce bundle size
4. Enable caching headers

---

## Quick Reference

### GitHub Pages

```bash
git push origin main
# Automatic deployment via GitHub Actions
```

### Vercel

```bash
npm install -g vercel
vercel
# Follow prompts, automatic deployments on push
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Manual Deployment

```bash
npm run build
# Upload dist folder to server
```

---

## Support

For deployment issues:

1. Check GitHub Actions logs
2. Review platform-specific documentation
3. Check console for error messages
4. Clear cache and rebuild

---

**Last Updated**: 2024  
**Status**: Production Ready ✅
