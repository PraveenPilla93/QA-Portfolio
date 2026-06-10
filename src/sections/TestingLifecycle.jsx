import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { portfolioData } from '../data/portfolio'

const TestingLifecycle = () => {
  const { testingLifecycle } = portfolioData

  return (
    <SectionWrapper id="testing-lifecycle">
      <SectionTitle
        title="Testing Lifecycle Visualization"
        subtitle="End-to-end quality assurance flow"
      />

      {/* Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testingLifecycle.map((phase, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-6 relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Phase number */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-qa-green/20 border border-qa-green rounded-full flex items-center justify-center text-sm font-bold text-qa-green">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="text-4xl mb-4">
              {[
                '📋',
                '🔍',
                '🧬',
                '🤖',
                '▶️',
                '🐛',
                '🔄',
                '✅',
              ][index] || '📝'}
            </div>

            {/* Phase name */}
            <h4 className="text-lg font-bold mb-2 group-hover:text-qa-green transition-colors">
              {phase}
            </h4>

            {/* Descriptions */}
            <p className="text-sm text-qa-muted">
              {[
                'Define quality standards and test scope',
                'Identify test requirements and scenarios',
                'Design test cases and strategies',
                'Develop automated test scripts',
                'Execute tests against application',
                'Report and track defects',
                'Re-test fixed issues',
                'Release validation and closure',
              ][index]}
            </p>

            {/* Connector line */}
            {index < testingLifecycle.length - 1 && (
              <motion.div
                className="absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-qa-green to-transparent hidden lg:block"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Cycle info */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: 'Quality Gates',
            items: [
              'Entry criteria: Code review + env ready',
              'Exit criteria: All bugs fixed, 90% automation',
              'Sign-off: Product + Engineering approval',
            ],
          },
          {
            title: 'Key Activities',
            items: [
              'Daily stand-ups and progress updates',
              'Weekly test execution reviews',
              'Risk-based testing approach',
              'Continuous improvement cycles',
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-6"
            whileHover={{ y: -5 }}
          >
            <h4 className="font-bold text-qa-green mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-qa-muted">
                  <span className="text-qa-green">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default TestingLifecycle
