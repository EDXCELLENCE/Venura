# Venura - EdTech Platform

Venura is a next-generation EdTech platform combining AI-guided learning, real-world projects, and structured internships.

## �� Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 📋 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.jsx              # Reusable UI components
│   │   ├── AnimatedCounter.jsx         # Counter animation component
│   │   ├── Header.jsx                  # Header with navigation
│   │   ├── HeroSection.jsx             # Hero banner section
│   │   ├── TrustedBySection.jsx        # Partners & stats section
│   │   ├── WhyVenuraSection.jsx        # Features showcase
│   │   ├── LearningPathsSection.jsx    # Programs/courses grid
│   │   ├── LearningPyramidSection.jsx  # FutureX pyramid levels
│   │   ├── CTASection.jsx              # Call-to-action section
│   │   ├── Footer.jsx                  # Footer with links
│   │   └── HomePage.jsx                # Main page composition
│   ├── lib/
│   │   └── utils.js                    # Utility functions
│   ├── App.jsx                         # Root app component
│   ├── main.jsx                        # Entry point
│   └── index.css                       # Global styles with Tailwind
├── public/                             # Static assets (images, icons)
├── index.html                          # HTML template
├── package.json                        # Dependencies
├── vite.config.js                      # Vite configuration
├── tailwind.config.js                  # Tailwind CSS configuration
└── .eslintrc.cjs                       # ESLint configuration
```

## ✨ Features

- 🎨 Modern UI with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design (Desktop + Mobile)
- 🍞 Toast notifications for user feedback
- 🍔 Mobile hamburger menu
- 🎯 Component-based architecture for maintainability
- 📦 Modular code structure
- 🎨 Brand colors: Navy (#0A2342) & Orange (#FF7A00)

## 📦 Components

### Core Components
- **HomePage**: Main composition that brings all sections together
- **Header**: Fixed header with responsive navigation
- **HeroSection**: Landing section with CTA buttons
- **TrustedBySection**: Partners carousel and statistics
- **WhyVenuraSection**: Feature cards explaining benefits
- **LearningPathsSection**: Programs/courses grid
- **LearningPyramidSection**: FutureX learning levels
- **CTASection**: Final call-to-action with stats
- **Footer**: Site footer with links and social media

### Utility Components
- **AnimatedCounter**: Reusable animated number counter
- **Button**: Customizable button component with variants

## 🔗 Social Links

- Instagram: [venura_edtech](https://www.instagram.com/venura_edtech/?hl=en)

## 📦 Dependencies

- React 18.3.1
- Vite 5.2.0
- Tailwind CSS 3.4.1
- Framer Motion 11.0.0
- Lucide React 0.344.0
- React Hot Toast (for notifications)
- class-variance-authority & clsx (for component styling)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Code Structure Benefits

The codebase is organized with:
- **Separation of Concerns**: Each component handles a specific section
- **Reusability**: Shared components like AnimatedCounter can be used anywhere
- **Maintainability**: Easy to find and update specific sections
- **Readability**: Clear component names and focused responsibilities
- **Scalability**: Easy to add new sections or modify existing ones

## 📄 License

MIT
