import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { ArrowRight } from 'lucide-react'

const CIPipeline = () => {
  const stages = [
    { name: 'Developer\nCommit', icon: '💻', color: 'text-qa-blue' },
    { name: 'GitHub\nPush', icon: '📤', color: 'text-qa-green' },
    { name: 'GitHub\nActions', icon: '⚙️', color: 'text-qa-blue' },
    { name: 'Jenkins\nOrchestration', icon: '🏗️', color: 'text-qa-green' },
    { name: 'Playwright\nExecution', icon: '🎭', color: 'text-qa-blue' },
    { name: 'Report\nGeneration', icon: '📊', color: 'text-qa-green' },
    { name: 'Deployment', icon: '🚀', color: 'text-qa-blue' },
  ]

  return (
    <SectionWrapper id="ci-pipeline">
      <SectionTitle title="CI/CD Pipeline Visualization" subtitle="DevOps automation flow" />

      {/* Desktop pipeline */}
      <div className="hidden lg:flex items-center justify-between mb-16">
        {stages.map((stage, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="glass rounded-lg p-4 w-20 h-20 flex items-center justify-center">
                <div className="text-3xl">{stage.icon}</div>
              </div>
              <div className="text-sm font-semibold text-center max-w-20">
                {stage.name}
              </div>
            </motion.div>

            {/* Arrow */}
            {index < stages.length - 1 && (
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="px-4"
              >
                <ArrowRight className="text-qa-green" size={24} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile pipeline */}
      <div className="lg:hidden flex flex-col items-center gap-4 mb-16">
        {stages.map((stage, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-lg p-4 w-20 h-20 flex items-center justify-center">
                <div className="text-3xl">{stage.icon}</div>
              </div>
              <div className="text-sm font-semibold text-center">{stage.name}</div>
            </motion.div>

            {/* Arrow */}
            {index < stages.length - 1 && (
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="text-qa-green rotate-90" size={24} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Pipeline details */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: 'Source Control',
            points: [
              'Push code to GitHub',
              'Automatic trigger on PR/Merge',
              'Branch protection enabled',
            ],
          },
          {
            title: 'GitHub Actions',
            points: [
              'Matrix testing (3 browsers)',
              'Parallel execution (4 workers)',
              'Real-time notifications',
            ],
          },
          {
            title: 'Jenkins Pipeline',
            points: [
              'Advanced orchestration',
              'Custom build scripts',
              'Performance monitoring',
            ],
          },
          {
            title: 'Deployment',
            points: [
              'Auto-deploy on success',
              'Rollback capability',
              'Post-deploy validation',
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
              {section.points.map((point, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-qa-muted">
                  <span className="text-qa-green">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default CIPipeline
