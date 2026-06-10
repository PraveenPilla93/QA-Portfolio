import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, GlassCard, GradientText } from '../components/UI'
import { portfolioData } from '../data/portfolio'

const About = () => {
  const { about } = portfolioData

  const sections = [
    { title: 'Career Summary', content: about.careerSummary },
    { title: 'Engineering Mindset', content: about.engineeringMindset },
    { title: 'Automation Philosophy', content: about.automationPhilosophy },
    { title: 'Healthcare Domain', content: about.healthcareDomain },
    { title: 'AI-Assisted Quality', content: about.aiQuality },
  ]

  return (
    <SectionWrapper id="about">
      <SectionTitle title="About Me" subtitle="Professional Introduction" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold mb-4">
                <GradientText>{section.title}</GradientText>
              </h3>
              <p className="text-qa-muted leading-relaxed">{section.content}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Core Statistics */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Years Experience', value: '5+' },
          { label: 'Healthcare Systems', value: '15+' },
          { label: 'Test Frameworks', value: '3' },
          { label: 'Team Size Led', value: '50+' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-4 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
            <div className="text-sm text-qa-muted">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default About
