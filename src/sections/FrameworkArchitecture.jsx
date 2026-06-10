import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { ArrowDown } from 'lucide-react'

const FrameworkArchitecture = () => {
  const layers = [
    { title: 'Tests', icon: '🧪', desc: 'Test scenarios and cases' },
    { title: 'Page Objects', icon: '📄', desc: 'UI element abstractions' },
    { title: 'Fixtures', icon: '🔧', desc: 'Test data & setup/teardown' },
    { title: 'Utilities', icon: '🛠️', desc: 'Common helper functions' },
    { title: 'API Layer', icon: '🔌', desc: 'Backend API interactions' },
    { title: 'Reporting', icon: '📊', desc: 'Results & analytics' },
    { title: 'CI/CD', icon: '🚀', desc: 'Automation orchestration' },
  ]

  return (
    <SectionWrapper id="framework-architecture">
      <SectionTitle
        title="Automation Framework Architecture"
        subtitle="Scalable Playwright framework design"
      />

      {/* Architecture diagram */}
      <div className="flex flex-col items-center gap-6">
        {layers.map((layer, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="glass rounded-lg p-6 w-full sm:w-2/3 md:w-1/2 text-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0, 255, 136, 0.15)' }}
            >
              <div className="text-3xl mb-2">{layer.icon}</div>
              <h4 className="text-lg font-bold mb-1">{layer.title}</h4>
              <p className="text-sm text-qa-muted">{layer.desc}</p>
            </motion.div>

            {/* Arrow connector */}
            {index < layers.length - 1 && (
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={24} className="text-qa-green" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Key features */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: 'Page Object Model',
            description: '150+ page classes with maintainable locators',
            icon: '📦',
          },
          {
            title: 'Data-Driven Testing',
            description: 'Parameterized test design for complex scenarios',
            icon: '📊',
          },
          {
            title: 'Fixtures',
            description: 'Reusable test data factories and setup',
            icon: '🔄',
          },
          {
            title: 'Error Handling',
            description: 'Comprehensive error handling and recovery',
            icon: '⚠️',
          },
          {
            title: 'Reporting',
            description: 'Custom HTML and JSON reporting',
            icon: '📈',
          },
          {
            title: 'Performance',
            description: 'Optimized execution with parallel runs',
            icon: '⚡',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl mb-2">{feature.icon}</div>
            <h5 className="font-bold mb-2">{feature.title}</h5>
            <p className="text-sm text-qa-muted">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default FrameworkArchitecture
