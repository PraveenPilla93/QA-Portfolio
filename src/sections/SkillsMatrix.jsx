import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionTitle, GradientText } from '../components/UI'
import { portfolioData } from '../data/portfolio'

const SkillsMatrix = () => {
  const { skills } = portfolioData
  const [expandedCategory, setExpandedCategory] = useState(0)

  const categories = [
    { name: 'Automation Engineering', skills: skills.automationEngineering },
    { name: 'Backend Validation', skills: skills.backendValidation },
    { name: 'CI/CD', skills: skills.cicd },
    { name: 'AI Engineering', skills: skills.aiEngineering },
    { name: 'Domain Expertise', skills: skills.domainExpertise },
  ]

  return (
    <SectionWrapper id="skills">
      <SectionTitle title="Skills Matrix" subtitle="Professional expertise dashboard" />

      <div className="space-y-6">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="glass rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category Header */}
            <motion.button
              onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? -1 : categoryIndex)}
              className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              whileHover={{ paddingLeft: '24px' }}
            >
              <h3 className="text-xl font-bold text-qa-green">{category.name}</h3>
              <motion.span
                animate={{ rotate: expandedCategory === categoryIndex ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </motion.button>

            {/* Category Skills */}
            <AnimatePresence>
              {expandedCategory === categoryIndex && (
                <motion.div
                  className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 font-semibold">
                            <span>{skill.icon}</span>
                            {skill.name}
                          </span>
                          <span className="text-qa-green font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-black/30 rounded overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-qa-green to-qa-blue"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Skill Tags Cloud */}
      <motion.div
        className="mt-16 p-8 glass rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h4 className="text-xl font-bold mb-6">
          <GradientText>All Technologies</GradientText>
        </h4>
        <div className="flex flex-wrap gap-3">
          {[
            'Playwright',
            'Cypress',
            'JavaScript',
            'REST APIs',
            'SQL',
            'GitHub Actions',
            'Jenkins',
            'AWS',
            'Claude',
            'ChatGPT',
            'Healthcare',
            'EHR',
            'Analytics',
            'RBAC',
            'Device Management',
          ].map((tech, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 border border-qa-green/30 rounded-full text-sm text-qa-green hover:bg-qa-green/10 transition-colors"
              whileHover={{ scale: 1.05, borderColor: '#00ff88' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default SkillsMatrix
