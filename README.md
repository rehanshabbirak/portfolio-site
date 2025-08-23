# Qamar's Portfolio Website

A modern, interactive portfolio website built with React.js, featuring GSAP animations, dark/light theme toggle, and responsive design. Perfect for showcasing frontend development skills and AI/automation expertise.

## ✨ Features

### 🎨 Design & UI/UX
- **Modern Design**: Clean, professional layout with purple, blue, and neon green color palette
- **Dark/Light Theme**: Seamless theme switching with persistent user preference
- **Custom Cursor**: Interactive animated cursor with hover effects
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Glass Effects**: Modern glassmorphism elements throughout the design

### 🎭 Animations & Interactions
- **GSAP Animations**: Smooth entrance animations and scroll-triggered effects
- **Micro-interactions**: Hover effects, button animations, and transitions
- **Scroll Animations**: Elements animate as they come into view
- **Floating Elements**: Subtle floating animations for visual appeal
- **Project Card Hovers**: Interactive project cards with smooth transitions

### 📱 Sections
1. **Hero Section**: Animated headline with gradient text effects and CTA buttons
2. **About Section**: Personal information with animated statistics cards
3. **Skills Section**: Categorized skills with animated progress bars
4. **Projects Section**: Featured projects with tech stacks and demo links
5. **Contact Section**: Contact form with animated social media links

### 🛠 Technical Features
- **React.js**: Modern component-based architecture
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **GSAP**: Professional-grade animations and scroll triggers
- **Responsive Navigation**: Sticky navigation with smooth scrolling
- **Form Handling**: Interactive contact form with validation
- **Performance Optimized**: Fast loading and smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd qamar-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
qamar-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx     # About section
│   │   ├── Contact.jsx   # Contact section
│   │   ├── CustomCursor.jsx # Animated cursor
│   │   ├── Hero.jsx      # Hero section
│   │   ├── Navigation.jsx # Navigation bar
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── Skills.jsx    # Skills section
│   │   └── ThemeToggle.jsx # Theme switcher
│   ├── components/ui/     # UI components (shadcn/ui)
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles and theme
│   └── main.jsx          # Entry point
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🎨 Customization

### Colors & Theme
The color palette is defined in `src/App.css` using CSS custom properties:
- **Primary**: Purple (`oklch(0.5 0.2 270)`)
- **Secondary**: Blue (`oklch(0.6 0.15 240)`)
- **Accent**: Neon Green (`oklch(0.7 0.25 120)`)

### Content
Update the following files to customize content:
- `src/components/Hero.jsx` - Personal headline and introduction
- `src/components/About.jsx` - About section and statistics
- `src/components/Skills.jsx` - Skills and expertise
- `src/components/Projects.jsx` - Portfolio projects
- `src/components/Contact.jsx` - Contact information

### Animations
GSAP animations are configured in each component. Key animation features:
- Entrance animations on page load
- Scroll-triggered animations using `ScrollTrigger`
- Hover effects and micro-interactions
- Smooth scrolling navigation

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `pnpm run build`
2. Upload `dist/` folder to Netlify
3. Configure redirects for SPA

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🛠 Technologies Used

- **React.js** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **Lucide React** - Icon library
- **shadcn/ui** - UI component library

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:
- Email: qamar@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

**Built with ❤️ by Qamar - Frontend Developer & AI Specialist**

