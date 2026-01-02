import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe, Smartphone, Server, Sparkles } from 'lucide-react'

export default function HorizontalScroll() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  const services = [
    {
      icon: Globe,
      title: 'Web Design',
      subtitle: 'Your digital home',
      description: 'We build websites that actually work. Fast, beautiful, and built to convert your visitors into customers.',
      color: 'from-gold-500 to-yellow-500',
      features: ['Responsive Design', 'Lightning Fast', 'SEO Optimized']
    },
    {
      icon: Smartphone,
      title: 'App Design',
      subtitle: 'In their pocket',
      description: 'Native or cross-platform? We build apps people love using. Smooth, intuitive, and built for real users.',
      color: 'from-yellow-500 to-gold-500',
      features: ['iOS & Android', 'Beautiful UI', 'Push Notifications']
    },
    {
      icon: Server,
      title: 'System Creation',
      subtitle: 'The engine behind it all',
      description: 'Need custom tools or internal systems? We build the backend magic that powers your business.',
      color: 'from-gold-600 to-gold-400',
      features: ['Custom APIs', 'Database Design', 'Cloud Integration']
    },
    {
      icon: Sparkles,
      title: 'Personal Projects',
      subtitle: 'Our playground',
      description: "We don't just build for clients. We experiment, test new tech, and create cool stuff just because we can.",
      color: 'from-purple-500 to-gold-500',
      features: ['Latest Tech', 'Open Source', 'Pure Innovation'],
      badge: 'Our Lab'
    },
  ]

  return (
    <section ref={containerRef} className="py-32 overflow-hidden relative">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-gold-500 animate-pulse" />
            <span className="text-sm text-gray-300">What We're All About</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
            What We <span className="text-gradient">Create</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Not just "services" — we build the stuff that makes your business actually work.
            <br />
            <span className="text-gold-500 font-semibold">Simple as that.</span>
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <motion.div
        style={{ x }}
        className="flex gap-6 px-6"
      >
        {[...services, ...services].map((service, index) => (
          <motion.div
            key={index}
            className="flex-[0_0_75%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
            whileHover={{ scale: 1.03, y: -12 }}
          >
            <div className="glass-dark p-6 md:p-10 rounded-3xl relative overflow-hidden group cursor-pointer">
              {/* Badge */}
              {service.badge && (
                <motion.div
                  className="absolute top-6 right-6 glass px-3 py-1 rounded-full text-xs text-gold-500 font-semibold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  {service.badge}
                </motion.div>
              )}

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1), transparent 70%)` 
                }}
              />

              {/* Icon with Animated Ring */}
              <motion.div
                className="relative w-16 h-16 mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {/* Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-gold-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Icon Container */}
                <div className="relative w-full h-full rounded-2xl glass flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-gold-500 group-hover:text-black transition-colors duration-300" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xs md:text-sm text-gold-500 font-semibold mb-2 uppercase tracking-wider">
                  {service.subtitle}
                </p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 text-white group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="glass px-2 py-1 md:px-3 md:py-1 rounded-full text-xs text-gray-400 group-hover:text-gold-500 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <motion.div
                  className="text-gold-500 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="font-display font-semibold text-sm md:text-base">Explore</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-500 text-sm">
          <motion.span
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ←
          </motion.span>
          {" "}Scroll to explore{" "}
          <motion.span
            animate={{ x: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.span>
        </p>
      </motion.div>
    </section>
  )
}
