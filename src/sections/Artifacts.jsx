import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionTitle, GlassCard } from '../components/UI'
import { portfolioData } from '../data/portfolio'
import { X } from 'lucide-react'

const Artifacts = () => {
  const { artifacts } = portfolioData
  const [selectedArtifact, setSelectedArtifact] = useState(null)

  return (
    <SectionWrapper id="artifacts">
      <SectionTitle title="Real QA Artifacts Showcase" subtitle="Professional deliverables" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedArtifact(artifact)}
            className="glass rounded-lg p-6 text-left h-full hover:bg-white/5 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-3">{artifact.icon}</div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-qa-green transition-colors">
              {artifact.title}
            </h3>
            <p className="text-sm text-qa-muted mb-4">{artifact.description}</p>
            <div className="text-xs text-qa-green font-semibold">
              View Details →
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArtifact && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtifact(null)}
          >
            <motion.div
              className="glass rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-qa-green/20 sticky top-0 bg-qa-dark/50 backdrop-blur">
                <div>
                  <div className="text-3xl mb-2">{selectedArtifact.icon}</div>
                  <h2 className="text-2xl font-bold">{selectedArtifact.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedArtifact(null)}
                  className="p-1 hover:bg-white/10 rounded"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 text-sm text-qa-muted whitespace-pre-wrap font-mono text-xs leading-relaxed">
                {selectedArtifact.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}

export default Artifacts
