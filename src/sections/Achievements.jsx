import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, GradientText } from '../components/UI'
import { portfolioData } from '../data/portfolio'

const Achievements = () => {
  const { achievements } = portfolioData

  return (
    <SectionWrapper id="achievements">
      <SectionTitle title="Achievements Center" subtitle="Major milestones and impact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0, 255, 136, 0.15)' }}
          >
            {/* Metric */}
            <motion.div
              className="text-5xl font-black gradient-text mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
              viewport={{ once: true }}
            >
              {achievement.metric}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>

            {/* Description */}
            <p className="text-qa-muted text-sm mb-4">{achievement.description}</p>

            {/* Impact */}
            <div className="p-4 bg-qa-green/10 border border-qa-green/30 rounded">
              <p className="text-sm text-qa-green font-semibold">
                💡 {achievement.impact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Impact summary */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: 'Quality Impact',
            items: [
              'Zero critical production bugs',
              '100% healthcare compliance',
              '99.9% test reliability',
            ],
          },
          {
            title: 'Business Impact',
            items: [
              '120+ successful releases',
              '15+ healthcare integrations',
              'Improved time-to-market by 60%',
            ],
          },
          {
            title: 'Team Impact',
            items: [
              'Mentored 10+ QA engineers',
              'Standardized test practices',
              'Reduced onboarding time by 50%',
            ],
          },
        ].map((impact, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-qa-blue mb-4">{impact.title}</h4>
            <ul className="space-y-2">
              {impact.items.map((item, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-qa-muted">
                  <span className="text-qa-green">✓</span>
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

export default Achievements
