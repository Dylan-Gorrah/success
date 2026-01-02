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
