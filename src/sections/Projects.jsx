import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionTitle, GradientText } from '../components/UI'
import { portfolioData } from '../data/portfolio'
import { ChevronDown } from 'lucide-react'

const Projects = () => {
  const { projects } = portfolioData
  const [expandedProject, setExpandedProject] = useState(null)

  // Group projects by category
  const categories = [...new Set(projects.map(p => p.category))]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Project Command Center" subtitle="Major initiatives and achievements" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {categories.map((category, categoryIndex) => {
          const categoryProjects = projects.filter(p => p.category === category)

          return (
            <motion.div key={category} variants={item}>
              {/* Category header */}
              <h3 className="text-2xl font-bold mb-4">
                <GradientText>{category}</GradientText>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="glass rounded-lg overflow-hidden cursor-pointer group"
                    whileHover={{ y: -5 }}
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      )
                    }
                  >
                    {/* Project card */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold flex-1">{project.title}</h4>
                        <motion.div
                          animate={{
                            rotate: expandedProject === project.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} className="text-qa-green" />
                        </motion.div>
                      </div>

                      <p className="text-qa-muted text-sm mb-4">{project.overview}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 2).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-qa-green/10 border border-qa-green/30 rounded text-xs text-qa-green"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="px-2 py-1 text-xs text-qa-muted">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Key metrics */}
                      <div className="flex gap-2 text-sm">
                        {project.achievements.slice(0, 2).map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-qa-blue/10 border border-qa-blue/30 rounded text-xs text-qa-blue"
                          >
                            ✓ {achievement.split(' ')[0]}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded details */}
                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          className="border-t border-qa-green/20 p-6 bg-black/20"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Full responsibilities */}
                          <div className="mb-4">
                            <h5 className="font-bold text-qa-green mb-2">Responsibilities</h5>
                            <ul className="space-y-1 text-sm text-qa-muted">
                              {project.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span>→</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* All technologies */}
                          <div className="mb-4">
                            <h5 className="font-bold text-qa-green mb-2">
                              Technologies
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-qa-green/10 border border-qa-green/30 rounded text-xs text-qa-green"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* All achievements */}
                          <div className="mb-4">
                            <h5 className="font-bold text-qa-green mb-2">
                              Achievements
                            </h5>
                            <ul className="space-y-1 text-sm text-qa-muted">
                              {project.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-qa-green">✓</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Impact */}
                          <div>
                            <h5 className="font-bold text-qa-blue mb-2">Impact</h5>
                            <p className="text-sm text-qa-muted">{project.impact}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}

export default Projects
