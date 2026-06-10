import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { portfolioData } from '../data/portfolio'
import { ChevronDown } from 'lucide-react'

const HealthcareDomain = () => {
  const { healthcareDomainExpertise } = portfolioData
  const [expandedDomain, setExpandedDomain] = useState(0)

  return (
    <SectionWrapper id="healthcare-domain">
      <SectionTitle
        title="Healthcare Domain Expertise"
        subtitle="Specialized knowledge in healthcare systems"
      />

      <div className="space-y-4">
        {healthcareDomainExpertise.map((domain, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <button
              onClick={() => setExpandedDomain(expandedDomain === index ? -1 : index)}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="text-left">
                <h3 className="text-xl font-bold">{domain.title}</h3>
                <p className="text-sm text-qa-muted mt-1">{domain.description}</p>
              </div>
              <motion.div
                animate={{ rotate: expandedDomain === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-qa-green" size={24} />
              </motion.div>
            </button>

            {/* Expertise list */}
            <AnimatePresence>
              {expandedDomain === index && (
                <motion.div
                  className="border-t border-qa-green/20 bg-black/20 p-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-2">
                    {domain.expertise.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-black/30 rounded"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="text-qa-green">▸</span>
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Key statistics */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'EHR Systems Integrated', value: '15+', icon: '🏥' },
          { label: 'Healthcare Certifications', value: '3', icon: '📜' },
          { label: 'HIPAA Compliance', value: '100%', icon: '🔐' },
          { label: 'Patient Data Tests', value: '500+', icon: '👥' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-4 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold gradient-text">{stat.value}</div>
            <div className="text-xs text-qa-muted mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default HealthcareDomain
