import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import MagneticButton from '../motion/MagneticButton'
import useActiveSection from '../motion/useActiveSection'

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Work', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Research', id: 'publications' },
  { label: 'Contact', id: 'contact' },
]

// 'publications' used to be appended here because it had no nav link; it is a
// NAV_LINKS entry now, so the spread already covers every observed section.
const SECTION_IDS = ['hero', ...NAV_LINKS.map((l) => l.id)]
const RESUME_URL =
  'https://drive.google.com/file/d/1p3fw36r8ZEv3iPE2criiqj5niJOBTQ2e/view?usp=sharing'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 sm:px-4 ${
          scrolled ? 'glass-nav' : 'border border-transparent'
        }`}
        style={{
          transition: 'background-color .35s, border-color .35s, box-shadow .35s',
        }}
      >
        {/* Wordmark */}
        <a href="#hero" className="group flex shrink-0 items-center gap-2.5 pl-1">
          <motion.span
            whileHover={reduce ? undefined : { rotate: 90, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className="grid h-9 w-9 place-items-center rounded-xl bg-g-main text-[13px] font-extrabold tracking-tight text-white shadow-glow-violet"
          >
            SS
          </motion.span>
          <span className="text-white/66 hidden font-mono text-[11px] tracking-wide sm:block">
            Shubham Sharma
          </span>
        </a>

        {/* Desktop links with a sliding active pill.
            layoutRoot is required because the header is position:fixed —
            without it the shared-layout pill measures against the wrong origin. */}
        <motion.div layoutRoot className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative rounded-full px-4 py-2 text-[13px] font-medium"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.07]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={isActive ? 'text-white' : 'text-white/72 hover:text-white/85'}
                  style={{ transition: 'color .2s' }}
                >
                  {link.label}
                </span>
              </a>
            )
          })}
        </motion.div>

        <div className="flex items-center gap-2">
          <MagneticButton
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            pull={5}
            className="btn-primary hidden !px-5 !py-2 !text-[13px] sm:inline-flex"
          >
            Résumé ↗
          </MagneticButton>

          {/* Mobile trigger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
          >
            <span className="relative block h-3 w-4">
              <motion.span
                className="absolute left-0 h-[1.5px] w-4 rounded bg-white/80"
                animate={menuOpen ? { rotate: 45, top: 5.5 } : { rotate: 0, top: 1 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="absolute left-0 h-[1.5px] w-4 rounded bg-white/80"
                animate={menuOpen ? { rotate: -45, top: 5.5 } : { rotate: 0, top: 10 }}
                transition={{ duration: 0.25 }}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass-nav mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl p-2 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i + 0.05 }}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium ${
                  active === link.id ? 'bg-white/[0.07] text-white' : 'text-white/78'
                }`}
              >
                {link.label}
                <span className="text-white/58 font-mono text-[11px]">
                  0{NAV_LINKS.indexOf(link) + 1}
                </span>
              </motion.a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-1 w-full !rounded-2xl"
            >
              Résumé ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
