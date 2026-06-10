import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { portfolioData } from '../data/portfolio'
import { Download, Eye, Printer, FileText } from 'lucide-react'

const ResumeCenter = () => {
  const { personal } = portfolioData

  return (
    <SectionWrapper id="resume">
      <SectionTitle title="Resume Center" subtitle="Professional documentation" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resume preview */}
        <motion.div
          className="lg:col-span-2 glass rounded-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-video bg-black/50 rounded border border-qa-green/20 flex items-center justify-center mb-6">
            <div className="text-center">
              <FileText size={48} className="text-qa-green mx-auto mb-4" />
              <p className="text-qa-muted">PDF Resume Preview</p>
              <p className="text-sm text-qa-muted mt-2">
                Praveen Pilla - Senior QA Automation Engineer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">5+</div>
              <div className="text-xs text-qa-muted">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-qa-green">850+</div>
              <div className="text-xs text-qa-muted">Test Automation Scripts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-qa-blue">90%</div>
              <div className="text-xs text-qa-muted">Automation Coverage</div>
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href={personal.resumeUrl}
            download
            className="glass rounded-lg p-6 text-center group cursor-pointer block hover:bg-white/5 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-3">📥</div>
            <h4 className="font-bold mb-2 group-hover:text-qa-green transition-colors">
              Download Resume
            </h4>
            <p className="text-xs text-qa-muted">PDF format</p>
          </motion.a>

          <motion.button
            className="glass rounded-lg p-6 text-center group cursor-pointer w-full hover:bg-white/5 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-3">👁️</div>
            <h4 className="font-bold mb-2 group-hover:text-qa-green transition-colors">
              View Online
            </h4>
            <p className="text-xs text-qa-muted">Full screen viewer</p>
          </motion.button>

          <motion.button
            onClick={() => window.print()}
            className="glass rounded-lg p-6 text-center group cursor-pointer w-full hover:bg-white/5 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-3">🖨️</div>
            <h4 className="font-bold mb-2 group-hover:text-qa-green transition-colors">
              Print Resume
            </h4>
            <p className="text-xs text-qa-muted">Direct print</p>
          </motion.button>

          {/* Resume highlights */}
          <motion.div
            className="glass rounded-lg p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-qa-green mb-3">Key Sections</h4>
            <ul className="space-y-2 text-sm text-qa-muted">
              {[
                'Professional Summary',
                'Core Expertise',
                'Career Experience',
                'Major Achievements',
                'Certifications',
                'Skills & Proficiencies',
              ].map((section, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-qa-green">✓</span>
                  <span>{section}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default ResumeCenter
