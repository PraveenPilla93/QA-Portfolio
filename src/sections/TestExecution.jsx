import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, TerminalText } from '../components/UI'

const TestExecution = () => {
  const [displayLines, setDisplayLines] = useState([])
  const [isComplete, setIsComplete] = useState(false)

  const testLines = [
    { type: 'info', text: '> Running Regression Suite...' },
    { type: 'info', text: '> Spawning Chrome browsers (4 workers)' },
    { type: 'delay', duration: 800 },
    { type: 'pass', text: '  ✓ login.spec.ts [Chrome] 12 passed (2.3s)' },
    { type: 'pass', text: '  ✓ analytics.spec.ts [Chrome] 8 passed (1.8s)' },
    { type: 'pass', text: '  ✓ reports.spec.ts [Chrome] 15 passed (3.2s)' },
    { type: 'pass', text: '  ✓ devices.spec.ts [Chrome] 10 passed (2.1s)' },
    { type: 'pass', text: '  ✓ rbac.spec.ts [Chrome] 7 passed (1.5s)' },
    { type: 'pass', text: '  ✓ ehr-integration.spec.ts [Chrome] 6 passed (2.8s)' },
    { type: 'delay', duration: 800 },
    { type: 'summary', text: '' },
  ]

  useEffect(() => {
    let timeoutId
    let currentIndex = 0

    const displayLine = () => {
      if (currentIndex < testLines.length) {
        const line = testLines[currentIndex]

        if (line.type === 'delay') {
          timeoutId = setTimeout(() => {
            currentIndex++
            displayLine()
          }, line.duration)
        } else {
          setDisplayLines((prev) => [...prev, { ...line, id: currentIndex }])
          currentIndex++

          timeoutId = setTimeout(displayLine, line.type === 'summary' ? 200 : 300)
        }
      } else {
        setIsComplete(true)
      }
    }

    displayLine()

    return () => clearTimeout(timeoutId)
  }, [])

  const stats = {
    total: 58,
    passed: 58,
    failed: 0,
    duration: '4m 22s',
  }

  return (
    <SectionWrapper id="test-execution">
      <SectionTitle
        title="Live Test Execution Dashboard"
        subtitle="Realistic Playwright regression suite"
      />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal output */}
        <div className="lg:col-span-2">
          <div className="glass rounded-lg overflow-hidden font-mono text-sm">
            {/* Header */}
            <div className="bg-black/50 px-4 py-3 border-b border-qa-green/20 flex items-center gap-2">
              <span className="text-qa-green">▶</span>
              <span className="text-qa-green">Terminal</span>
              <span className="ml-auto text-xs text-qa-muted">Exit Code: 0</span>
            </div>

            {/* Output */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {displayLines.map((line, index) => (
                <motion.div
                  key={line.id}
                  className={`py-1 ${
                    line.type === 'pass'
                      ? 'text-qa-green'
                      : line.type === 'info'
                        ? 'text-qa-blue'
                        : 'text-qa-green'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {line.text}
                  {line.type === 'info' && index === 0 && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  )}
                </motion.div>
              ))}

              {isComplete && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="py-2 text-qa-green font-bold">SUMMARY</div>
                  <div className="py-1 text-qa-green">✓ All tests passed</div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="space-y-4">
          {[
            { label: 'TOTAL TESTS', value: stats.total, color: 'text-qa-blue' },
            { label: 'PASSED', value: stats.passed, color: 'text-qa-green' },
            { label: 'FAILED', value: stats.failed, color: 'text-qa-muted' },
            { label: 'DURATION', value: stats.duration, color: 'text-qa-green' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-lg p-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-xs text-qa-muted mb-1 font-mono">
                {stat.label}
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </motion.div>
          ))}

          {/* Success rate */}
          <motion.div
            className="glass rounded-lg p-4 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-xs text-qa-muted mb-2 font-mono">SUCCESS RATE</div>
            <div className="text-3xl font-bold gradient-text">100%</div>
            <div className="h-2 bg-qa-green/20 rounded mt-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-qa-green to-qa-blue"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Browser matrix */}
      <motion.div
        className="grid grid-cols-3 gap-4 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {[
          { name: 'Chrome', tests: '25/25', color: 'bg-qa-green' },
          { name: 'Firefox', tests: '20/20', color: 'bg-qa-blue' },
          { name: 'Edge', tests: '13/13', color: 'bg-qa-green' },
        ].map((browser, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-4 text-center"
            whileHover={{ y: -5 }}
          >
            <div className={`w-3 h-3 rounded-full ${browser.color} mx-auto mb-2`} />
            <div className="font-bold">{browser.name}</div>
            <div className="text-sm text-qa-green">{browser.tests}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default TestExecution
