import React from 'react'
import { motion } from 'framer-motion'
import ScrollProgress from './components/ScrollProgress'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import HorizontalScroll from './components/HorizontalScroll'
import WorkShowcase from './components/WorkShowcase'
import Services from './components/Services'
import Process from './components/Process'
import WhatsAppForm from './components/WhatsAppForm'
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
        <WorkShowcase />
        <Services />
        <Process />
        <WhatsAppForm />
        <Footer />
      </main>
    </div>
  )
}

export default App
