import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const StartupSequence = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)

  const lines = [
    '> Initializing Quality Engineering Platform...',
    '> Loading Test Infrastructure...',
    '> Connecting Playwright Grid...',
    '> Connecting CI/CD Pipelines...',
    '> Loading Healthcare Integrations...',
    '> Loading Analytics Engine...',
    '> System Ready ✓',
  ]

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  return (
    <div className="fixed inset-0 bg-qa-dark flex flex-col items-center justify-center z-50">
      {/* Matrix background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-qa-green text-xs terminal-text"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3,
            }}
            animate={{ y: [0, 1000], opacity: [0.5, 0] }}
            transition={{ duration: 4, delay: i * 0.2, repeat: Infinity }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          animate={{ textShadow: ['0 0 10px rgba(0, 255, 136, 0.5)', '0 0 20px rgba(0, 255, 136, 0.8)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">PRAVEEN PILLA</h1>
          <p className="text-qa-green text-lg">Senior QA Automation Engineer</p>
        </motion.div>

        {/* Terminal lines */}
        <div className="bg-black/30 border border-qa-green/30 rounded p-6 font-mono text-sm">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              className={`py-1 ${index < currentLine ? 'text-qa-green' : 'text-qa-muted'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={index < currentLine ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {index < currentLine ? (
                <>
                  {line}
                  {index === currentLine - 1 && currentLine < lines.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  )}
                </>
              ) : (
                <span className="opacity-0">{line}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <motion.div className="mt-8">
          <div className="h-1 bg-qa-green/20 rounded overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-qa-green to-qa-blue"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentLine / lines.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Status */}
        <motion.p
          className="text-center mt-6 text-qa-muted text-sm"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {currentLine === lines.length ? '✓ Ready to explore' : 'Loading...'}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default StartupSequence
