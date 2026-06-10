import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { portfolioData } from '../data/portfolio'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'

const Contact = () => {
  const { contactInfo } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Contact Command Center" subtitle="Get in touch" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Connect with Me</h3>

          {/* Email */}
          <motion.a
            href={`mailto:${contactInfo.email}`}
            className="glass rounded-lg p-6 flex items-start gap-4 group hover:bg-white/5 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-qa-green/20 rounded flex items-center justify-center group-hover:bg-qa-green/30 transition-colors">
              <Mail className="text-qa-green" size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-1">Email</h4>
              <p className="text-sm text-qa-muted">{contactInfo.email}</p>
              <p className="text-xs text-qa-green mt-1">Send me an email</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${contactInfo.phone}`}
            className="glass rounded-lg p-6 flex items-start gap-4 group hover:bg-white/5 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-qa-blue/20 rounded flex items-center justify-center group-hover:bg-qa-blue/30 transition-colors">
              <Phone className="text-qa-blue" size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-1">Phone</h4>
              <p className="text-sm text-qa-muted">{contactInfo.phone}</p>
              <p className="text-xs text-qa-blue mt-1">Call or message</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            className="glass rounded-lg p-6 flex items-start gap-4"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-qa-green/20 rounded flex items-center justify-center">
              <MapPin className="text-qa-green" size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-1">Location</h4>
              <p className="text-sm text-qa-muted">{contactInfo.location}</p>
              <p className="text-xs text-qa-green mt-1">Based in India</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="pt-4 border-t border-qa-green/20">
            <h4 className="font-bold mb-4">Social Links</h4>
            <div className="flex gap-4">
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg w-12 h-12 flex items-center justify-center hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="text-qa-green" size={20} />
              </motion.a>
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg w-12 h-12 flex items-center justify-center hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="text-qa-green" size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="glass rounded-lg w-12 h-12 flex items-center justify-center hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="text-qa-green" size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass rounded-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Send Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-qa-green/30 rounded px-4 py-2 text-qa-text placeholder-qa-muted focus:outline-none focus:border-qa-green transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-qa-green/30 rounded px-4 py-2 text-qa-text placeholder-qa-muted focus:outline-none focus:border-qa-green transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-black/30 border border-qa-green/30 rounded px-4 py-2 text-qa-text placeholder-qa-muted focus:outline-none focus:border-qa-green transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-qa-green to-qa-blue hover:shadow-lg transition-all py-3 rounded font-bold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <span>✓ Sent Successfully</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Note */}
          <p className="text-xs text-qa-muted mt-4 text-center">
            I'll get back to you as soon as possible
          </p>
        </motion.div>
      </div>

      {/* Calendar/Availability */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="glass rounded-lg p-6 text-center">
          <div className="text-3xl mb-2">📅</div>
          <h4 className="font-bold mb-2">Schedule Interview</h4>
          <p className="text-sm text-qa-muted mb-4">
            Available for interviews and collaborations
          </p>
          <button className="px-4 py-2 border border-qa-green text-qa-green rounded hover:bg-qa-green/10 transition-colors text-sm font-semibold">
            Book Time
          </button>
        </div>

        <div className="glass rounded-lg p-6 text-center">
          <div className="text-3xl mb-2">💼</div>
          <h4 className="font-bold mb-2">Collaboration</h4>
          <p className="text-sm text-qa-muted mb-4">
            Open to consulting and partnership opportunities
          </p>
          <button className="px-4 py-2 border border-qa-blue text-qa-blue rounded hover:bg-qa-blue/10 transition-colors text-sm font-semibold">
            Discuss
          </button>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Contact
