import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { ChevronDown } from 'lucide-react'

const PlaywrightReport = () => {
  const [expandedSuite, setExpandedSuite] = useState(null)

  const suites = [
    {
      name: 'Analytics',
      tests: 8,
      passed: 8,
      failed: 0,
      duration: '1.8s',
      cases: [
        { name: 'Load analytics dashboard', status: 'passed', duration: '0.3s' },
        { name: 'Filter data by date range', status: 'passed', duration: '0.2s' },
        { name: 'Export report to PDF', status: 'passed', duration: '0.6s' },
        { name: 'Real-time data updates', status: 'passed', duration: '0.4s' },
      ],
    },
    {
      name: 'Reports',
      tests: 15,
      passed: 15,
      failed: 0,
      duration: '3.2s',
      cases: [
        { name: 'Generate clinical report', status: 'passed', duration: '0.5s' },
        { name: 'Multi-format export', status: 'passed', duration: '0.7s' },
        { name: 'Report distribution', status: 'passed', duration: '0.4s' },
      ],
    },
    {
      name: 'Devices',
      tests: 10,
      passed: 10,
      failed: 0,
      duration: '2.1s',
      cases: [
        { name: 'Device registration', status: 'passed', duration: '0.3s' },
        { name: 'Health monitoring', status: 'passed', duration: '0.2s' },
        { name: 'Configuration updates', status: 'passed', duration: '0.5s' },
      ],
    },
    {
      name: 'RBAC',
      tests: 7,
      passed: 7,
      failed: 0,
      duration: '1.5s',
      cases: [
        { name: 'Permission enforcement', status: 'passed', duration: '0.3s' },
        { name: 'Role-based access', status: 'passed', duration: '0.2s' },
      ],
    },
    {
      name: 'Integrations',
      tests: 6,
      passed: 6,
      failed: 0,
      duration: '2.8s',
      cases: [
        { name: 'EHR data sync', status: 'passed', duration: '0.8s' },
        { name: 'Healthcare API integration', status: 'passed', duration: '0.6s' },
      ],
    },
  ]

  const totalStats = suites.reduce(
    (acc, suite) => ({
      tests: acc.tests + suite.tests,
      passed: acc.passed + suite.passed,
      failed: acc.failed + suite.failed,
    }),
    { tests: 0, passed: 0, failed: 0 }
  )

  return (
    <SectionWrapper id="playwright-report">
      <SectionTitle
        title="Interactive Playwright Report Demo"
        subtitle="Modern HTML report viewer"
      />

      {/* Top stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Passed', value: totalStats.passed, color: 'text-qa-green' },
          { label: 'Failed', value: totalStats.failed, color: 'text-qa-muted' },
          { label: 'Success Rate', value: '100%', color: 'text-qa-green' },
          { label: 'Duration', value: '4m 22s', color: 'text-qa-blue' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-qa-muted mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Test suites */}
      <div className="space-y-4">
        {suites.map((suite, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Suite header */}
            <button
              onClick={() =>
                setExpandedSuite(expandedSuite === index ? null : index)
              }
              className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                {/* Status icon */}
                <div className="w-3 h-3 rounded-full bg-qa-green" />

                {/* Suite info */}
                <div className="text-left flex-1">
                  <div className="font-bold">{suite.name}</div>
                  <div className="text-xs text-qa-muted">
                    {suite.passed}/{suite.tests} tests passed • {suite.duration}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-sm">
                  <span className="text-qa-green">{suite.passed} ✓</span>
                  {suite.failed > 0 && (
                    <span className="text-red-500">{suite.failed} ✗</span>
                  )}
                </div>
              </div>

              {/* Expand icon */}
              <motion.div
                animate={{
                  rotate: expandedSuite === index ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            {/* Suite details */}
            <AnimatePresence>
              {expandedSuite === index && (
                <motion.div
                  className="border-t border-qa-green/20 bg-black/20 p-4 space-y-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {suite.cases.map((testCase, caseIndex) => (
                    <motion.div
                      key={caseIndex}
                      className="flex items-center justify-between p-3 bg-black/30 rounded"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: caseIndex * 0.05 }}
                    >
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-qa-green text-sm">✓</span>
                        <span className="text-sm">{testCase.name}</span>
                      </div>
                      <span className="text-xs text-qa-muted">
                        {testCase.duration}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Browser summary */}
      <motion.div
        className="mt-8 glass rounded-lg p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold mb-4">Browser Results</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: 'Chrome', passed: 35, failed: 0 },
            { name: 'Firefox', passed: 12, failed: 0 },
            { name: 'Edge', passed: 11, failed: 0 },
          ].map((browser, index) => (
            <div
              key={index}
              className="bg-black/20 rounded p-4 text-center border border-qa-green/20"
            >
              <div className="font-semibold mb-2">{browser.name}</div>
              <div className="text-qa-green font-bold">{browser.passed}</div>
              <div className="text-xs text-qa-muted">Passed</div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default PlaywrightReport
