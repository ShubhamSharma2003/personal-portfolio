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
    <div className="min-h-screen bg-cream font-grotesk">
      <Navbar />
      <main>
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
  )
}
