import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import StartupSequence from './components/StartupSequence'
import Hero from './sections/Hero'
import About from './sections/About'
import Metrics from './sections/Metrics'
import SkillsMatrix from './sections/SkillsMatrix'
import CareerTimeline from './sections/CareerTimeline'
import Projects from './sections/Projects'
import TestExecution from './sections/TestExecution'
import PlaywrightReport from './sections/PlaywrightReport'
import BugAnalytics from './sections/BugAnalytics'
import Artifacts from './sections/Artifacts'
import BugReports from './sections/BugReports'
import FrameworkArchitecture from './sections/FrameworkArchitecture'
import CIPipeline from './sections/CIPipeline'
import HealthcareDomain from './sections/HealthcareDomain'
import AILab from './sections/AILab'
import TestingLifecycle from './sections/TestingLifecycle'
import Achievements from './sections/Achievements'
import ResumeCenter from './sections/ResumeCenter'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [showStartup, setShowStartup] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => setShowStartup(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (showStartup) {
    return <StartupSequence />
  }

  return (
    <div className="min-h-screen bg-qa-dark text-qa-text overflow-hidden">
      <ParticleBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <motion.main className="relative z-10">
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Metrics />
        <SkillsMatrix />
        <CareerTimeline />
        <Projects />
        <TestExecution />
        <PlaywrightReport />
        <BugAnalytics />
        <Artifacts />
        <BugReports />
        <FrameworkArchitecture />
        <CIPipeline />
        <HealthcareDomain />
        <AILab />
        <TestingLifecycle />
        <Achievements />
        <ResumeCenter />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  )
}

export default App
