import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, AnimatedCounter, GradientText } from '../components/UI'
import { portfolioData } from '../data/portfolio'

const Metrics = () => {
  const { metrics } = portfolioData

  const metricCards = [
    { label: 'Years Experience', value: metrics.yearsExperience, icon: '📅' },
    { label: 'Automation Coverage', value: metrics.automationCoverage, icon: '📊', suffix: '%' },
    { label: 'Regression Reduction', value: metrics.regressionReduction, icon: '⚡', suffix: '%' },
    { label: 'Automation Scripts', value: metrics.automationScripts, icon: '✍️', suffix: '+' },
    { label: 'Test Cases', value: metrics.testCases, icon: '🧪', suffix: '+' },
    { label: 'Bugs Reported', value: metrics.bugsReported, icon: '🐛', suffix: '+' },
    { label: 'Production Releases', value: metrics.productionReleases, icon: '🚀', suffix: '+' },
    { label: 'Integrations', value: metrics.integrationsSupported, icon: '🔗', suffix: '+' },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <SectionWrapper id="metrics">
      <SectionTitle
        title="Live QA Metrics Dashboard"
        subtitle="Real-time performance indicators"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {metricCards.map((card, index) => (
          <motion.div
            key={index}
            variants={item}
            className="glass rounded-lg p-8 text-center group cursor-pointer"
            whileHover={{ y: -10, boxShadow: '0 10px 40px rgba(0, 255, 136, 0.15)' }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>

            <motion.div
              className="text-4xl font-bold gradient-text mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter
                end={card.value}
                duration={2.5}
                suffix={card.suffix || ''}
              />
            </motion.div>

            <p className="text-qa-muted text-sm">{card.label}</p>

            {/* Animated bar */}
            <motion.div
              className="mt-4 h-1 bg-qa-green/20 rounded overflow-hidden"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-qa-green to-qa-blue"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default Metrics
