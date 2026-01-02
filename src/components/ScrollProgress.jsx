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
