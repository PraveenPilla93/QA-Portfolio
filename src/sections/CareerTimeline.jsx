import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, GradientText } from '../components/UI'
import { portfolioData } from '../data/portfolio'

const CareerTimeline = () => {
  const { experience } = portfolioData

  return (
    <SectionWrapper id="career">
      <SectionTitle title="Career Timeline" subtitle="Professional journey and growth" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-qa-green to-qa-blue" />

        {/* Timeline items */}
        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className="w-1/2 px-8">
                <motion.div
                  className="glass rounded-lg p-6"
                  whileHover={{ y: -5 }}
                >
                  {/* Year badge */}
                  <div className="inline-block px-3 py-1 bg-qa-green/20 border border-qa-green/50 rounded-full text-sm text-qa-green mb-3">
                    {job.years}
                  </div>

                  <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                  <p className="text-qa-green font-semibold mb-3">{job.company}</p>
                  <p className="text-qa-muted text-sm mb-4">{job.duration}</p>

                  <p className="text-sm mb-4">{job.description}</p>

                  {/* Achievements preview */}
                  <details className="cursor-pointer">
                    <summary className="text-qa-green font-semibold hover:text-qa-blue transition-colors">
                      View achievements →
                    </summary>
                    <ul className="mt-3 space-y-2 text-sm text-qa-muted">
                      {job.achievements.slice(0, 3).map((achievement, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-qa-green">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-qa-green/10 border border-qa-green/30 rounded text-xs text-qa-green"
                      >
                        {tech}
                      </span>
                    ))}
                    {job.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-qa-muted">
                        +{job.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <motion.div
                className="w-0 flex justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-6 h-6 bg-qa-green rounded-full border-2 border-qa-dark absolute"
                  animate={{ boxShadow: ['0 0 0 0 rgba(0, 255, 136, 0.7)', '0 0 0 10px rgba(0, 255, 136, 0)'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Empty space */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Total Experience', value: '5+ Years' },
          { label: 'Roles Held', value: '5' },
          { label: 'Companies', value: '4' },
          { label: 'Current Level', value: 'Senior' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-4 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-qa-green font-bold mb-1">{stat.value}</div>
            <div className="text-xs text-qa-muted">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default CareerTimeline
