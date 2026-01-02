import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

export default function WorkShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const projects = [
    {
      title: 'E-Commerce Platform',
      vibe: 'Modern & Clean',
      description: 'Sleek shopping experience with smooth animations and intuitive checkout flow.',
      category: 'Web Design',
      color: 'from-blue-500 to-purple-500',
      // Replace with actual GIF URL
      gif: 'https://via.placeholder.com/600x400/1a1a1a/ffd700?text=E-Commerce+Demo'
    },
    {
      title: 'Fitness App',
      vibe: 'Energetic & Bold',
      description: 'High-energy workout tracker with real-time stats and social features.',
      category: 'App Design',
      color: 'from-green-500 to-teal-500',
      gif: 'https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Fitness+App+Demo'
    },
    {
      title: 'Restaurant Dashboard',
      vibe: 'Elegant & Minimal',
      description: 'Beautiful admin panel for managing orders, menus, and analytics.',
      category: 'System Creation',
      color: 'from-orange-500 to-red-500',
      gif: 'https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Dashboard+Demo'
    },
    {
      title: 'Real Estate Portal',
      vibe: 'Luxurious & Sophisticated',
      description: 'Premium property listings with virtual tours and advanced search.',
      category: 'Web Design',
      color: 'from-gold-500 to-yellow-500',
      gif: 'https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Real+Estate+Demo'
    },
    {
      title: 'Music Streaming',
      vibe: 'Dark & Immersive',
      description: 'Spotify-like experience with custom playlists and social sharing.',
      category: 'App Design',
      color: 'from-purple-500 to-pink-500',
      gif: 'https://via.placeholder.com/600x400/1a1a1a/ffd700?text=Music+App+Demo'
    },
  ]

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real projects. Real results. Check out what we've built for people just like you.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_90%] md:flex-[0_0_60%] min-w-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="glass-dark rounded-3xl overflow-hidden group cursor-pointer h-full">
                    {/* GIF Preview */}
                    <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                      <img 
                        src={project.gif} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          className="glass px-6 py-3 rounded-full flex items-center gap-2 text-gold-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span className="font-display font-semibold">View Project</span>
                        </motion.div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 glass-dark px-4 py-2 rounded-full">
                        <span className="text-sm text-gold-500 font-semibold">{project.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Vibe Badge */}
                      <div className="inline-block mb-4">
                        <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-10`}>
                          <span className="text-sm font-semibold text-white">
                            {project.vibe}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-gold-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full glass hover:bg-gold-500 hover:text-black transition-all flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gold-500 group-hover:text-black transition-colors" />
            </motion.button>
            
            <motion.button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full glass hover:bg-gold-500 hover:text-black transition-all flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gold-500 group-hover:text-black transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6">
            Like what you see? Let's build something amazing for you too.
          </p>
          <motion.a
            href="#whatsapp-form"
            className="inline-block px-8 py-4 rounded-full bg-gold-500 text-black hover:bg-gold-400 transition-all font-display font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
