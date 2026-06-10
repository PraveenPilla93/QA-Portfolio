import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { portfolioData } from '../data/portfolio'
import { ChevronDown } from 'lucide-react'

const BugReports = () => {
  const { bugReports } = portfolioData
  const [expandedBug, setExpandedBug] = useState(null)

  const getSeverityColor = (severity) => {
    const colors = {
      Critical: 'bg-red-500/20 text-red-400 border-red-500/50',
      High: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
      Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      Low: 'bg-green-500/20 text-green-400 border-green-500/50',
    }
    return colors[severity] || colors.Medium
  }

  return (
    <SectionWrapper id="bug-reports">
      <SectionTitle
        title="Bug Report Portfolio"
        subtitle="Professional defect documentation"
      />

      <div className="space-y-4">
        {bugReports.map((bug, index) => (
          <motion.div
            key={bug.id}
            className="glass rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <button
              onClick={() =>
                setExpandedBug(expandedBug === bug.id ? null : bug.id)
              }
              className="w-full p-4 flex items-start justify-between hover:bg-white/5 transition-colors group"
            >
              <div className="text-left flex-1">
                {/* ID and title */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-qa-green">{bug.id}</span>
                  <span className="text-lg font-bold group-hover:text-qa-green transition-colors">
                    {bug.title}
                  </span>
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold border ${getSeverityColor(
                      bug.severity
                    )}`}
                  >
                    {bug.severity}
                  </span>
                  <span className="text-xs text-qa-muted">
                    P{bug.priority.replace('P', '')} • {bug.environment}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      bug.status === 'Resolved' ? 'text-qa-green' : 'text-qa-blue'
                    }`}
                  >
                    {bug.status}
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ rotate: expandedBug === bug.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            {/* Expanded details */}
            {expandedBug === bug.id && (
              <motion.div
                className="border-t border-qa-green/20 p-4 bg-black/20 space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {/* Steps */}
                <div>
                  <h4 className="font-bold text-qa-green mb-2">Steps to Reproduce</h4>
                  <ul className="space-y-1 text-sm text-qa-muted">
                    {bug.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>

                {/* Expected vs Actual */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-qa-green mb-2">Expected</h4>
                    <p className="text-sm text-qa-muted">{bug.expected}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-qa-blue mb-2">Actual</h4>
                    <p className="text-sm text-qa-muted">{bug.actual}</p>
                  </div>
                </div>

                {/* Root cause */}
                <div>
                  <h4 className="font-bold text-qa-green mb-2">Root Cause</h4>
                  <p className="text-sm text-qa-muted">{bug.rootCause}</p>
                </div>

                {/* Resolution */}
                <div className="p-3 bg-qa-green/10 border border-qa-green/20 rounded">
                  <p className="text-sm">
                    <span className="text-qa-green font-bold">Resolved in:</span>{' '}
                    <span className="text-qa-muted">{bug.resolvedIn}</span>
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Summary stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Sample Reports', value: bugReports.length, color: 'text-qa-blue' },
          { label: 'Critical', value: 1, color: 'text-red-400' },
          { label: 'High Priority', value: 2, color: 'text-orange-400' },
          { label: 'Resolution Rate', value: '100%', color: 'text-qa-green' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-4 text-center"
            whileHover={{ y: -5 }}
          >
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-qa-muted mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default BugReports
