# QUICK START GUIDE

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Opens at: http://localhost:3000

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to GitHub Pages
```bash
git add .
git commit -m "Initial portfolio deployment"
git push origin main
```
Portfolio will be live at: https://praveenpilla.github.io/QA-Portfolio

---

## 📝 Customization Checklist

### Update Your Information
```bash
# Edit: src/data/portfolio.js
```

Update:
- [ ] Name, email, phone
- [ ] Social links (LinkedIn, GitHub)
- [ ] Resume URL
- [ ] Project details
- [ ] Skills and expertise
- [ ] Experience history
- [ ] Achievements and metrics

### Customize Design (Optional)
```bash
# Edit: tailwind.config.js
```

Change colors, fonts, animations

### Add Your Resume
Place your resume PDF at:
```
public/resume.pdf
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)
```bash
npm run deploy
```

### Option 2: Vercel (Easiest)
1. Visit https://vercel.com/new
2. Import GitHub repository
3. Auto-deploys on push

### Option 3: Netlify
```bash
npm run build
# Drag dist folder to Netlify
```

See DEPLOYMENT_GUIDE.md for detailed instructions.

---

## 📂 Project Structure

```
src/
├── components/          # Reusable components
├── sections/            # 19 page sections
├── data/portfolio.js    # All your content
├── App.jsx             # Main app
└── index.css           # Global styles
```

---

## 🔧 Available Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview build locally
npm run deploy     # Deploy to GitHub Pages
npm run format     # Format code with Prettier
npm run lint       # Check code with ESLint
```

---

## 🎨 Sections Overview

1. Hero - Landing with startup animation
2. About - Professional intro
3. Metrics - KPI dashboard
4. Skills - Skill matrix
5. Timeline - Career progression
6. Projects - Major projects
7. Test Execution - Playwright demo
8. Playwright Report - Test results
9. Bug Analytics - Charts & trends
10. Artifacts - QA deliverables
11. Bug Reports - Sample reports
12. Framework Architecture - Design
13. CI/CD Pipeline - DevOps flow
14. Healthcare Domain - Expertise
15. AI Lab - AI capabilities
16. Testing Lifecycle - QA process
17. Achievements - Key wins
18. Resume - Download
19. Contact - Contact form

---

## 📊 Performance Targets

- Lighthouse: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## 🐛 Troubleshooting

**Port 3000 in use?**
```bash
npx kill-port 3000
npm run dev
```

**Build fails?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Deploy not working?**
- Check GitHub Actions status
- Verify homepage in package.json
- Clear browser cache

---

## 📚 Documentation

- **README.md** - Full documentation
- **DEPLOYMENT_GUIDE.md** - Deployment steps
- **src/data/portfolio.js** - Data structure

---

## 🎯 What Recruiters See

✅ Modern, professional design
✅ Real portfolio data (from your resume)
✅ Impressive technical showcase
✅ Live demos of skills
✅ Production-ready code
✅ Mobile responsive
✅ Fast performance

---

## 💡 Pro Tips

1. **Update Content**: Edit `src/data/portfolio.js`
2. **Test Locally**: Always run `npm run dev` before deploying
3. **Monitor Performance**: Use Chrome DevTools Lighthouse
4. **Keep Updated**: Regularly update dependencies
5. **Version Control**: Use Git to track changes

---

## 🎓 Learning Resources

- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Vite: https://vitejs.dev
- GitHub Pages: https://pages.github.com

---

## ✅ Pre-Deployment Checklist

- [ ] Installed dependencies
- [ ] Tested locally with `npm run dev`
- [ ] Updated portfolio data
- [ ] Reviewed all sections
- [ ] Checked responsive design
- [ ] Verified links work
- [ ] No console errors
- [ ] Built successfully with `npm run build`

---

**Status**: Ready for Production ✅
**Next Step**: `npm run dev` or `npm run deploy`
