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
