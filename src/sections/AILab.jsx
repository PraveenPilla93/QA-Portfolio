import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { portfolioData } from '../data/portfolio'
import { ChevronDown } from 'lucide-react'

const AILab = () => {
  const { aiLab } = portfolioData
  const [expandedLab, setExpandedLab] = useState(0)

  return (
    <SectionWrapper id="ai-lab">
      <SectionTitle
        title="AI-Powered QA Lab"
        subtitle="Cutting-edge AI-assisted testing"
      />

      <div className="space-y-4">
        {aiLab.map((lab, index) => (
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
              onClick={() => setExpandedLab(expandedLab === index ? -1 : index)}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors group"
            >
              <div className="text-left">
                <h3 className="text-xl font-bold group-hover:text-qa-green transition-colors">
                  {lab.title}
                </h3>
                <p className="text-sm text-qa-muted mt-1">{lab.description}</p>
              </div>
              <motion.div
                animate={{ rotate: expandedLab === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-qa-blue" size={24} />
              </motion.div>
            </button>

            {/* Use cases */}
            <AnimatePresence>
              {expandedLab === index && (
                <motion.div
                  className="border-t border-qa-blue/20 bg-black/20 p-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-bold text-qa-blue mb-3">Use Cases</h4>
                  <div className="space-y-2">
                    {lab.useCases.map((useCase, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-black/30 rounded"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="text-qa-blue mt-1">●</span>
                        <span className="text-sm">{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* AI capabilities */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: 'Intelligent Automation',
            features: [
              'Automated script generation',
              'Dynamic locator updates',
              'Self-healing tests',
            ],
          },
          {
            title: 'Smart Analysis',
            features: [
              'Root cause analysis',
              'Pattern recognition',
              'Anomaly detection',
            ],
          },
          {
            title: 'Optimization',
            features: [
              'Test scenario optimization',
              'Edge case identification',
              'Performance tuning',
            ],
          },
          {
            title: 'Documentation',
            features: [
              'Auto-generated documentation',
              'Test plan generation',
              'Report creation',
            ],
          },
        ].map((capability, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h4 className="font-bold text-qa-blue mb-4">{capability.title}</h4>
            <ul className="space-y-2">
              {capability.features.map((feature, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-qa-muted">
                  <span className="text-qa-blue">✨</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default AILab
