import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black/50 border-t border-qa-green/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div whileHover={{ x: 5 }}>
            <h3 className="text-xl font-bold gradient-text mb-2">Praveen Pilla</h3>
            <p className="text-qa-muted text-sm">
              Ensuring Quality Through Automation
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ x: 5 }}>
            <h4 className="text-qa-green font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Resume', href: '#resume' },
                { label: 'Projects', href: '#projects' },
                { label: 'GitHub', href: 'https://github.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-qa-muted hover:text-qa-green transition-colors flex items-center gap-2 text-sm"
                  >
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div whileHover={{ x: 5 }}>
            <h4 className="text-qa-green font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-qa-muted hover:text-qa-green transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-qa-muted hover:text-qa-green transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:hello@praveenpilla.dev"
                className="text-qa-muted hover:text-qa-green transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-qa-green to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          className="text-center text-qa-muted text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="mb-2">Built with React, Playwright Mindset, and Engineering Excellence</p>
          <p>© {currentYear} Praveen Pilla. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
