import React from 'react'
import { motion } from 'framer-motion'

export const SectionWrapper = ({ children, id, className = '' }) => (
  <motion.section
    id={id}
    className={`relative py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, margin: '-100px' }}
  >
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </motion.section>
)

export const GlassCard = ({ children, className = '', hoverEffect = true }) => (
  <motion.div
    className={`glass rounded-lg p-6 ${hoverEffect ? 'glass-hover' : ''} ${className}`}
    whileHover={hoverEffect ? { y: -5 } : {}}
  >
    {children}
  </motion.div>
)

export const AnimatedCounter = ({ end, duration = 2.5, suffix = '' }) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(progress * end))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return <>{count}{suffix}</>
}

export const GradientText = ({ children, className = '' }) => (
  <span className={`gradient-text ${className}`}>{children}</span>
)

export const TerminalText = ({ children, className = '' }) => (
  <span className={`terminal-text text-qa-green ${className}`}>{children}</span>
)

export const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      <GradientText>{title}</GradientText>
    </h2>
    {subtitle && <p className="text-qa-muted text-lg">{subtitle}</p>}
  </motion.div>
)
