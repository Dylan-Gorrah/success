import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, Check, Clock } from 'lucide-react'

export default function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format message for WhatsApp
    const whatsappMessage = `
🌟 NEW PROJECT INQUIRY

👤 Name: ${formData.name}
📧 Email: ${formData.email}
💼 Project Type: ${formData.projectType}
💰 Budget: ${formData.budget}

📝 MESSAGE:
${formData.message}

---
Reply to start the conversation! ✨
    `.trim()

    // Your WhatsApp number (format: country code + number, no spaces or +)
    const whatsappNumber = '27677020221' // Replace with your actual number
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Small delay for UX
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
      })
    }, 1000)
  }

  return (
    <section id="whatsapp-form" className="py-32 px-6 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-gold-500 animate-pulse" />
            <span className="text-sm text-gray-300">Just browsing our talent, right?</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Fill this out and we'll chat on WhatsApp. 
            Simple, quick, and way more personal than email.
          </p>

          {/* Free Demo Banner */}
          <motion.div
            className="glass-dark p-6 rounded-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-gold-500" />
              <h3 className="font-display font-bold text-gold-500">Tomorrow Morning Special</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Chat with us today, wake up to a <span className="text-gold-500 font-semibold">free first draft</span> tomorrow. 
              We'll whip up your first demo, first consultation, and first design idea. 
              <span className="text-white font-semibold"> All free.</span> No catch.
            </p>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass-dark p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-display font-semibold text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="What should we call you?"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-display font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-display font-semibold text-gray-300 mb-2">
                What do you need?
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors"
              >
                <option value="">Pick one...</option>
                <option value="Web Design">Website</option>
                <option value="App Design">Mobile App</option>
                <option value="System Creation">Custom System/Tool</option>
                <option value="Not Sure">Not sure yet</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-display font-semibold text-gray-300 mb-2">
                Budget Range (Optional)
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors"
              >
                <option value="">Rather not say</option>
                <option value="Under R10,000">Under R10,000</option>
                <option value="R10,000 - R25,000">R10,000 - R25,000</option>
                <option value="R25,000 - R50,000">R25,000 - R50,000</option>
                <option value="R50,000+">R50,000+</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-display font-semibold text-gray-300 mb-2">
                Tell us about your project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                placeholder="What's the dream? What problem are you solving? The more details, the better we can help."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 rounded-full bg-gold-500 text-black hover:bg-gold-400 transition-all font-display font-semibold text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send to WhatsApp</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-500" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-500" />
                <span>Response within 1 hour</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-500" />
                <span>Free demo by tomorrow</span>
              </div>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
