# 🌟 Premium Glassmorphic UI - Complete Code

## 📋 Overview

**Design Style:** Premium glassmorphic with black background and gold accents  
**Animations:** Extensive micro-interactions, horizontal scrolling, parallax effects  
**Copy:** Simple, conversational English  
**Services:** Web Design, App Design, System Creation  

---

## 🗂️ File Structure

```
my-site/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── ScrollProgress.jsx
        ├── Navigation.jsx
        ├── Hero.jsx
        ├── HorizontalScroll.jsx
        ├── Services.jsx
        ├── Process.jsx
        └── Footer.jsx
```

---

## 📦 package.json

```json
{
  "name": "premium-glass-site",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "vite": "^5.0.2"
  }
}
```

---

## ⚙️ vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

---

## 🎨 tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#ffd700',
          500: '#ffcc00',
          600: '#e6b800',
        },
        glass: {
          dark: 'rgba(0, 0, 0, 0.4)',
          light: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-left': 'slide-left 1s ease-out',
        'slide-right': 'slide-right 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 📝 postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 📄 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Premium Design Studio</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    /* Prevent FOUC */
    html {
      background: #000;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

---

## 🎨 src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Scrollbar - Minimal */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #ffd700;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffcc00;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Glassmorphism Base */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Gold Gradient Text */
.text-gradient {
  background: linear-gradient(135deg, #ffd700 0%, #ffcc00 50%, #e6b800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glow Effect */
.glow {
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.glow-strong {
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.5);
}

/* Selection */
::selection {
  background: #ffd700;
  color: #000;
}

/* Remove default margins */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}
```

---

## ⚛️ src/main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 📱 src/App.jsx

```jsx
import React from 'react'
import { motion } from 'framer-motion'
import ScrollProgress from './components/ScrollProgress'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import HorizontalScroll from './components/HorizontalScroll'
import Services from './components/Services'
import Process from './components/Process'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <HorizontalScroll />
        <Services />
        <Process />
        <Footer />
      </main>
    </div>
  )
}

export default App
```

---

## 📊 src/components/ScrollProgress.jsx

```jsx
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Percentage Indicator */}
      <motion.div
        className="fixed top-6 right-6 glass-dark px-4 py-2 rounded-full z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.span 
          className="text-gold-500 font-display font-semibold text-sm"
          style={{ 
            opacity: useSpring(scrollYProgress, { stiffness: 100 })
          }}
        >
          <ScrollPercentage scrollYProgress={scrollYProgress} />
        </motion.span>
      </motion.div>
    </>
  )
}

function ScrollPercentage({ scrollYProgress }) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100))
    })
  }, [scrollYProgress])

  return <>{percentage}%</>
}
```

---

## 🧭 src/components/Navigation.jsx

```jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#footer' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-dark' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-display font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient">STUDIO</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-gold-500 font-display transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full" />
              </motion.a>
            ))}
            
            <motion.a
              href="#footer"
              className="glass px-6 py-2 rounded-full text-gold-500 hover:glow transition-all font-display font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 glass-dark rounded-2xl p-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-gold-500 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#footer"
              className="block mt-4 text-center glass px-6 py-3 rounded-full text-gold-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
```

---

## 🎯 src/components/Hero.jsx

```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Layers } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-gold-500" />
          <span className="text-sm text-gray-300">Premium Digital Solutions</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">We Build</span>
          <br />
          <span className="text-gradient">Digital Experiences</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creating stunning websites, apps, and systems that drive results.
          Simple, elegant, and built for success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#services"
            className="w-full sm:w-auto glass px-8 py-4 rounded-full text-gold-500 hover:glow transition-all font-display font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
          
          <motion.a
            href="#footer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 text-black hover:bg-gold-400 transition-all font-display font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { icon: Zap, text: 'Lightning Fast' },
            { icon: Layers, text: 'Modern Stack' },
            { icon: Sparkles, text: 'Premium Quality' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="glass-dark px-6 py-3 rounded-full flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <feature.icon className="w-4 h-4 text-gold-500" />
              <span className="text-sm text-gray-300">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-gold-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## 🔄 src/components/HorizontalScroll.jsx

```jsx
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Smartphone, Server } from 'lucide-react'

export default function HorizontalScroll() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  const cards = [
    {
      icon: Code,
      title: 'Web Design',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      color: 'from-gold-500 to-yellow-500'
    },
    {
      icon: Smartphone,
      title: 'App Design',
      description: 'Native and cross-platform apps that users love to use.',
      color: 'from-yellow-500 to-gold-500'
    },
    {
      icon: Server,
      title: 'System Creation',
      description: 'Custom backend systems and APIs built for scale.',
      color: 'from-gold-600 to-gold-400'
    },
  ]

  return (
    <section ref={containerRef} className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-4xl md:text-6xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What We <span className="text-gradient">Create</span>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-400 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Three core services. Unlimited possibilities.
        </motion.p>
      </div>

      <motion.div
        style={{ x }}
        className="flex gap-8 px-6"
      >
        {[...cards, ...cards].map((card, index) => (
          <motion.div
            key={index}
            className="glass-dark p-8 rounded-3xl min-w-[400px] relative overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Icon */}
            <motion.div
              className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <card.icon className="w-8 h-8 text-gold-500" />
            </motion.div>

            {/* Content */}
            <h3 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-gold-500 transition-colors">
              {card.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {card.description}
            </p>

            {/* Arrow */}
            <motion.div
              className="mt-6 text-gold-500 flex items-center gap-2 opacity-0 group-hover:opacity-100"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <span className="font-display font-semibold">Learn More</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
```

---

## 💎 src/components/Services.jsx

```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Palette, Zap, Shield, Users, Rocket } from 'lucide-react'

export default function Services() {
  const features = [
    {
      icon: Layout,
      title: 'Responsive Design',
      description: 'Looks perfect on every device, from phone to desktop.'
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Your unique style, built into every pixel.'
    },
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Optimized for performance and user experience.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security built in from day one.'
    },
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Designed with your users in mind, always.'
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Grows with your business, no limits.'
    },
  ]

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine cutting-edge technology with stunning design to create
            experiences that drive real results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-dark p-8 rounded-3xl hover:glow transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-all"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors" />
              </motion.div>

              <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-gold-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#footer"
            className="inline-block px-8 py-4 rounded-full bg-gold-500 text-black hover:bg-gold-400 transition-all font-display font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## 🔄 src/components/Process.jsx

```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Discovery',
      description: 'We learn about your goals, audience, and vision.'
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Strategy',
      description: 'We plan the perfect solution tailored to your needs.'
    },
    {
      icon: Code2,
      number: '03',
      title: 'Build',
      description: 'We bring your vision to life with expert craftsmanship.'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch',
      description: 'We deploy and support your success from day one.'
    },
  ]

  return (
    <section id="process" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to launch, we guide you every step of the way.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-gold-500 to-transparent" />
              )}

              <motion.div
                className="glass-dark p-8 rounded-3xl hover:glow transition-all group cursor-pointer relative z-10"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Number */}
                <div className="text-6xl font-display font-bold text-gold-500 opacity-20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <step.icon className="w-7 h-7 text-gold-500 group-hover:text-black transition-colors" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-gold-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 🔗 src/components/Footer.jsx

```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="relative py-20 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA Section */}
        <motion.div
          className="glass-dark p-12 rounded-3xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Build</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch and let's talk about your project.
          </p>
          
          <motion.a
            href="mailto:hello@studio.com"
            className="inline-block px-8 py-4 rounded-full bg-gold-500 text-black hover:bg-gold-400 transition-all font-display font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">
              STUDIO
            </h3>
            <p className="text-gray-400">
              Premium digital solutions that drive real results.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Mail, href: 'mailto:hello@studio.com' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-gold-500/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>© 2024 Studio. All rights reserved. Built with precision.</p>
        </motion.div>
      </div>
    </footer>
  )
}
```

---

## 🚀 Installation & Setup

### Step 1: Create Project
```bash
# Navigate to your project folder
cd my-site

# Install dependencies
npm install
```

### Step 2: Copy All Files
Copy each code block above into the corresponding file in your project.

### Step 3: Start Development Server
```bash
npm run dev
```

Your browser should open to `http://localhost:3000` with the new design! 🎉

---

## 🎨 Customization Guide

### Change Colors
In `tailwind.config.js`, modify the gold values:
```javascript
gold: {
  400: '#your-color',
  500: '#your-color',
  600: '#your-color',
}
```

### Change Text Content
- **Hero headline:** `src/components/Hero.jsx` (line ~40)
- **Service descriptions:** `src/components/HorizontalScroll.jsx` (line ~15)
- **Contact email:** `src/components/Footer.jsx` (line ~25)

### Add More Sections
In `src/App.jsx`, import and add your new component:
```jsx
import NewSection from './components/NewSection'

// Then in JSX:
<NewSection />
```

---

## ✨ Key Features Implemented

✅ **Custom scroll progress bar** (top + percentage indicator)  
✅ **Glassmorphic design** throughout  
✅ **Horizontal scrolling showcase**  
✅ **Premium black + gold theme**  
✅ **Extensive micro-interactions**  
✅ **Smooth animations** (entrance, hover, scroll)  
✅ **Mobile responsive**  
✅ **Simple conversational copy**  
✅ **No pricing shown**  

---

## 🎯 Pro Tips

- **Test on mobile:** Open Chrome DevTools (F12) → Toggle device toolbar
- **Performance:** All animations use GPU-accelerated properties (transform, opacity)
- **Accessibility:** All interactive elements have proper hover states
- **SEO:** Add meta tags in `index.html` for better search ranking

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (single column)
- **Tablet:** 640px - 1024px (2 columns)
- **Desktop:** > 1024px (3+ columns)

---

## 🐛 Troubleshooting

**Issue:** Animations not working  
**Fix:** Check console for Framer Motion errors, ensure all imports are correct

**Issue:** Styles not applying  
**Fix:** Run `npm run dev` again, clear browser cache

**Issue:** Horizontal scroll not smooth  
**Fix:** Ensure `scroll-behavior: smooth` is in `index.css`

---

## 🎉 You're All Set!

Your developer can now copy-paste all this code and have a fully functional premium glassmorphic site. If you need any modifications or additional components, just let me know!