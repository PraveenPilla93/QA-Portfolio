# Praveen Pilla - QA Engineering Command Center

A production-ready portfolio website showcasing **Senior QA Automation Engineer** expertise, built with React, Vite, and Tailwind CSS. Designed to position high-performing QA professionals as strategic engineering partners rather than traditional testers.

## 🎯 Overview

This portfolio is a **futuristic QA Engineering Command Center** featuring:

- **21 Interactive Sections** covering skills, projects, metrics, and achievements
- **Live Test Execution Dashboard** with realistic Playwright test scenarios
- **Professional Bug Analytics** with Recharts visualizations
- **Interactive Playwright Report Viewer** resembling modern test reports
- **Healthcare Domain Expertise** showcase
- **AI-Assisted QA Lab** featuring Claude and ChatGPT integrations
- **Glassmorphism Design** with particle animations
- **Dark Mode with Premium SaaS aesthetic**

## ✨ Features

### Core Sections

1. **Hero Landing Page** - Animated startup sequence with CTA buttons
2. **About Me** - Professional introduction and engineering philosophy
3. **Live QA Metrics Dashboard** - Animated KPI cards with counters
4. **Skills Matrix** - Expandable skill categories with proficiency levels
5. **Career Timeline** - Interactive timeline of experience
6. **Project Command Center** - Detailed project showcase with expandable cards
7. **Live Test Execution Dashboard** - Realistic test terminal with output
8. **Interactive Playwright Report** - Modern HTML report viewer
9. **Bug Analytics Center** - Recharts visualizations of bug metrics
10. **Real QA Artifacts** - Professional deliverables with modals
11. **Bug Report Portfolio** - Sample bug reports with Jira-style design
12. **Automation Framework Architecture** - Visual framework layers
13. **CI/CD Pipeline Visualization** - DevOps pipeline flow
14. **Healthcare Domain Expertise** - Specialized healthcare knowledge
15. **AI-Powered QA Lab** - AI-assisted testing capabilities
16. **Testing Lifecycle** - End-to-end QA process visualization
17. **Achievements Center** - Major milestones and impact metrics
18. **Resume Center** - Professional resume preview and download
19. **Contact Command Center** - Contact form and social links
20. **Recruiter Quick View** - Floating widget for quick info
21. **Footer** - Professional footer with links

### Design System

- **Color Palette**: Green (#00ff88) + Blue (#00c8ff) on dark background (#0b0f14)
- **Typography**: Premium modern fonts with varying weights
- **Animations**: Smooth Framer Motion animations throughout
- **Responsiveness**: Mobile-first design for all screen sizes
- **Performance**: Optimized for Lighthouse scores 90+

### Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite (lightning-fast builds)
- **Styling**: Tailwind CSS + custom CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/praveenpilla/QA-Portfolio.git
cd QA-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Run dev server (opens at http://localhost:3000)
npm run dev

# Format code with Prettier
npm run format

# Lint code
npm run lint
```

## 📁 Project Structure

```
QA-Portfolio/
├── index.html                 # HTML entry point
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main App component
│   ├── index.css             # Global styles
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Footer.jsx        # Footer component
│   │   ├── ParticleBackground.jsx
│   │   ├── StartupSequence.jsx
│   │   └── UI.jsx            # Reusable UI components
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Metrics.jsx
│   │   ├── SkillsMatrix.jsx
│   │   ├── CareerTimeline.jsx
│   │   ├── Projects.jsx
│   │   ├── TestExecution.jsx
│   │   ├── PlaywrightReport.jsx
│   │   ├── BugAnalytics.jsx
│   │   ├── Artifacts.jsx
│   │   ├── BugReports.jsx
│   │   ├── FrameworkArchitecture.jsx
│   │   ├── CIPipeline.jsx
│   │   ├── HealthcareDomain.jsx
│   │   ├── AILab.jsx
│   │   ├── TestingLifecycle.jsx
│   │   ├── Achievements.jsx
│   │   ├── ResumeCenter.jsx
│   │   └── Contact.jsx
│   └── data/
│       └── portfolio.js      # All portfolio content
└── README.md                 # This file
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/data/portfolio.js` to customize:

- Personal information
- Skills and expertise
- Projects and achievements
- Experience timeline
- Certifications
- Contact information

### Customize Colors

Update color palette in `tailwind.config.js`:

```js
colors: {
  'qa-dark': '#0b0f14',
  'qa-green': '#00ff88',
  'qa-blue': '#00c8ff',
  'qa-text': '#ffffff',
  'qa-muted': '#94a3b8',
}
```

### Modify Animations

Adjust animation settings in components using Framer Motion `motion` components and customize in `index.css` keyframes.

## 📊 Performance Optimization

- **Lazy Loading**: Images and components lazy-load on scroll
- **Code Splitting**: Vite automatically code-splits components
- **Minification**: Production builds are minified
- **Asset Optimization**: Optimized images and fonts
- **Lighthouse Target**: 90+ scores across all metrics

### Performance Metrics

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

## 🚢 Deployment

### Deploy to GitHub Pages

```bash
# Ensure repository is named correctly
# Repository: praveenpilla/QA-Portfolio
# Homepage in package.json: "homepage": "https://praveenpilla.github.io/QA-Portfolio"

# Build and deploy
npm run deploy

# Or push to main branch and GitHub Actions will deploy automatically
git push origin main
```

### Manual GitHub Pages Setup

1. Go to repository Settings → Pages
2. Set source to "GitHub Actions"
3. Workflow will automatically deploy on push to main

### Alternative Deployments

- **Vercel**: Connect GitHub repo to Vercel for automatic deployment
- **Netlify**: Deploy with Netlify CLI or GitHub integration
- **Custom Server**: Build and serve `dist` folder

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 SEO Optimization

- **Meta Tags**: Title, description, og:tags configured
- **Semantic HTML**: Proper heading hierarchy and structure
- **Structured Data**: Schema.org markup ready
- **Mobile Responsive**: Mobile-first design
- **Performance**: Core Web Vitals optimized

## 📈 Analytics Integration

To add analytics:

1. Add Google Analytics tag to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

2. Track custom events in components using gtag()

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Not Updating

1. Check GitHub Actions workflow status
2. Verify `homepage` in package.json matches deployment URL
3. Clear browser cache
4. Check gh-pages branch exists

## 📚 Documentation Files

- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Detailed deployment instructions
- **package.json** - Dependencies and scripts
- **vite.config.js** - Build configuration

## 🤝 Contributing

To update your portfolio:

1. Edit `src/data/portfolio.js` with your information
2. Customize components in `src/sections/` as needed
3. Test locally: `npm run dev`
4. Build: `npm run build`
5. Deploy: Push to main branch

## 📝 License

Open source project. Feel free to use and modify for your own portfolio.

## 🙏 Credits

Built with:
- React & Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide Icons

## 📧 Contact

**Praveen Pilla**  
Senior QA Automation Engineer  
Location: Hyderabad, India

- Email: hello@praveenpilla.dev
- LinkedIn: [praveenpilla](https://linkedin.com/in/praveenpilla)
- GitHub: [praveenpilla](https://github.com/praveenpilla)
- Portfolio: [praveenpilla.dev](https://praveenpilla.dev)

---

**Last Updated**: 2024

**Portfolio Status**: Production Ready ✅