import React from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, ArrowRight } from 'lucide-react'
import { SectionWrapper, GradientText } from '../components/UI'
import { portfolioData } from '../data/portfolio'

const Hero = ({ setActiveSection }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <SectionWrapper id="home" className="min-h-screen grid-bg flex items-center justify-center pt-20">
      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-qa-green opacity-5 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-qa-blue opacity-5 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Main text */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
            <GradientText>PRAVEEN PILLA</GradientText>
          </h1>
        </motion.div>

        <motion.div variants={item} className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Senior QA Automation Engineer
          </h2>
          <p className="text-xl text-qa-blue mb-2">
            Healthcare Quality Engineering Specialist
          </p>
          <p className="text-lg text-qa-muted">5+ Years Experience | Hyderabad, India</p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-qa-muted text-lg max-w-2xl mx-auto mb-12"
        >
          Architect of scalable Playwright automation frameworks • EHR Integration Expert •
          AI-Assisted Testing Pioneer • 90% Automation Coverage • 90% Regression Reduction
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href={portfolioData.personal.resumeUrl}
            download
            className="glass glass-hover px-8 py-4 rounded-lg flex items-center justify-center gap-2 font-semibold group"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.button
            onClick={() => setActiveSection('projects')}
            className="border-2 border-qa-green hover:bg-qa-green/10 px-8 py-4 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ArrowRight size={16} className="inline ml-2" />
          </motion.button>

          <motion.a
            href="#playwright-report"
            className="border-2 border-qa-blue hover:bg-qa-blue/10 px-8 py-4 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={16} className="inline mr-2" />
            View Test Report
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={item}
          className="flex gap-4 justify-center mb-12"
        >
          {[
            { icon: '🔗', label: 'LinkedIn', url: portfolioData.personal.linkedin },
            { icon: '💻', label: 'GitHub', url: portfolioData.personal.github },
            { icon: '📧', label: 'Email', url: `mailto:${portfolioData.personal.email}` },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover w-12 h-12 flex items-center justify-center rounded-lg text-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-qa-muted text-sm mb-2">Scroll to explore</p>
          <div className="text-qa-green text-2xl">↓</div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Hero
