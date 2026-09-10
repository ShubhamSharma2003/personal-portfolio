import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../motion/Reveal'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

const CONNECT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/shubhamsharma2003' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shubhamsharma2003' },
  { label: 'Email', href: 'mailto:shubham8186@gmail.com' },
]

const DOTS = ['#4E8CFF', '#9B72F2', '#F0578E', '#FFB86B']

export default function Footer() {
  const year = new Date().getFullYear()
  const reduce = useReducedMotion()

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07]">
      {/* Glow bleeding up from the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72"
        style={{
          background:
            'radial-gradient(70% 100% at 50% 100%, rgba(155,114,242,0.22) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative">
        <div className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
              {/* Brand */}
              <Reveal className="col-span-2" direction="up">
                <div className="mb-5 flex items-center gap-3.5">
                  <motion.span
                    whileHover={reduce ? undefined : { rotate: 90, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-g-main text-lg font-extrabold tracking-tight text-white shadow-glow-violet"
                  >
                    SS
                  </motion.span>
                  <div>
                    <p className="text-[16px] font-semibold tracking-tight text-white">
                      Shubham Sharma
                    </p>
                    <p className="text-white/66 font-mono text-[11px] uppercase tracking-[0.15em]">
                      SDE1 @ NOISE · New Delhi
                    </p>
                  </div>
                </div>
                <p className="text-white/72 max-w-xs text-sm leading-relaxed">
                  Full-Stack Engineer &amp; AI/ML Developer building production systems that scale.
                  Always shipping.
                </p>
              </Reveal>

              {/* Navigate */}
              <Reveal delay={0.08}>
                <h4 className="text-white/58 mb-5 font-mono text-[11px] uppercase tracking-[0.16em]">
                  Navigate
                </h4>
                <div className="space-y-2.5">
                  {FOOTER_LINKS.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={reduce ? undefined : { x: 4 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 26,
                      }}
                      className="text-white/72 hover:text-white/92 block w-fit text-sm"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </Reveal>

              {/* Connect */}
              <Reveal delay={0.14}>
                <h4 className="text-white/58 mb-5 font-mono text-[11px] uppercase tracking-[0.16em]">
                  Connect
                </h4>
                <div className="space-y-2.5">
                  {CONNECT_LINKS.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      whileHover={reduce ? undefined : { x: 4 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 26,
                      }}
                      className="text-white/72 hover:text-white/92 block w-fit text-sm"
                    >
                      {link.label} ↗
                    </motion.a>
                  ))}
                  <a
                    href="tel:+918700087743"
                    className="text-white/66 hover:text-white/78 mt-4 block w-fit font-mono text-[11px]"
                  >
                    +91-8700087743
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-white/58 font-mono text-[11px] uppercase tracking-[0.15em]">
              © {year} Shubham Sharma
            </p>
            <div className="flex gap-1.5">
              {DOTS.map((c) => (
                <motion.span
                  key={c}
                  whileHover={{ scale: 1.5 }}
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: c, opacity: 0.65 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
