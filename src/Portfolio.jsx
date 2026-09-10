import { MotionConfig } from 'framer-motion'
import AuroraBackground from './components/motion/AuroraBackground'
import ScrollProgress from './components/motion/ScrollProgress'
import Navbar from './components/portfolio/Navbar'
import Hero from './components/portfolio/Hero'
import About from './components/portfolio/About'
import Skills from './components/portfolio/Skills'
import Experience from './components/portfolio/Experience'
import Projects from './components/portfolio/Projects'
import Publications from './components/portfolio/Publications'
import Contact from './components/portfolio/Contact'
import Footer from './components/portfolio/Footer'

export default function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen font-sans antialiased">
        <AuroraBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
