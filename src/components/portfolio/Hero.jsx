import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import profilePic from '../../assets/images/shubham-new.jpg'
import Counter from '../motion/Counter'
import MagneticButton from '../motion/MagneticButton'
import { Stagger, StaggerItem } from '../motion/Stagger'

const TICKER_ITEMS = [
  'Agentic AI',
  'LLM Integration',
  'N8N Automation',
  'RAG Pipelines',
  'Document AI',
  'Next.js',
  'TypeScript',
  'Python',
  'FastAPI',
  'Prompt Engineering',
  'Docker',
  'Kubernetes',
  'React Native',
  'Sentiment Analysis',
  'Webhook Automation',
]

const STATS = [
  { num: '5+', label: 'AI Systems Shipped' },
  { num: '90%', label: 'Ops Automated' },
  { num: '500+', label: 'Tests Written' },
  { num: '98%', label: 'ML Accuracy' },
]

const ROLES = ['AI Engineer', 'Forward Deployed', 'Full-Stack', 'Startup Builder']

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Content drifts up and fades as the hero scrolls away; the photo moves
  // slower than the text, which is what reads as depth.
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const smoothPhotoY = useSpring(photoY, { stiffness: 60, damping: 26 })

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 sm:pt-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <motion.div
          style={reduce ? undefined : { y: textY, opacity: fade }}
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8"
        >
          {/* ---------- LEFT ---------- */}
          <div className="relative z-10">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-g-cyan opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-g-cyan" />
              </span>
              {/* Tighter tracking than the other mono labels: this string is 31
                  characters and 0.18em pushed the pill past a 390px viewport. */}
              <span className="text-white/78 font-mono text-[11px] uppercase tracking-[0.13em]">
                Using AI as an unfair advantage
              </span>
            </motion.div>

            {/* Name — the one big gradient moment on the page */}
            <h1 className="section-heading mb-6 text-[clamp(2.75rem,9vw,6.75rem)]">
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(14px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.25, ease: EASE }}
                className="block text-white"
              >
                Shubham
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(14px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.38, ease: EASE }}
                className="gradient-text-animated block"
              >
                Sharma
              </motion.span>
            </h1>

            {/* Role chips */}
            <Stagger className="mb-7 flex flex-wrap gap-2" stagger={0.06} delayChildren={0.55}>
              {ROLES.map((role) => (
                <StaggerItem key={role} distance={14}>
                  <motion.span
                    whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="chip cursor-default"
                  >
                    {role}
                  </motion.span>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="text-white/78 mb-9 max-w-[540px] text-[16px] leading-[1.75]"
            >
              At <strong className="text-white/92 font-semibold">NOISE</strong>, I joined as an
              intern and converted to SDE1 by shipping AI systems that{' '}
              <strong className="text-white/92 font-semibold">
                replaced entire manual workflows
              </strong>{' '}
              — B2B warehouse PO automation across Amazon, Flipkart &amp; LFR (Croma, Reliance,
              Tresor), an AI HR pipeline, brand intelligence monitor, and a 24/7 Instagram AI agent.
              I own the problem end-to-end: architecture, backend, frontend, deployment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72, ease: EASE }}
              className="mb-11 flex flex-wrap gap-3"
            >
              <MagneticButton href="#projects" className="btn-primary">
                See What I&apos;ve Built
                <motion.span
                  animate={reduce ? undefined : { y: [0, 3, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  ↓
                </motion.span>
              </MagneticButton>
              <MagneticButton href="#contact" className="btn-glass">
                Let&apos;s Talk →
              </MagneticButton>
              <MagneticButton
                href="https://github.com/shubhamsharma2003"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub ↗
              </MagneticButton>
            </motion.div>

            {/* Stats — count up on view */}
            <Stagger
              className="grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
              stagger={0.09}
              delayChildren={0.85}
            >
              {STATS.map((s) => (
                <StaggerItem key={s.label}>
                  <motion.div
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="glass h-full rounded-2xl px-4 py-4"
                  >
                    <div className="gradient-text text-2xl font-bold tracking-tight sm:text-[1.7rem]">
                      <Counter value={s.num} />
                    </div>
                    <div className="text-white/66 mt-1 font-mono text-[10.5px] uppercase leading-snug tracking-wider">
                      {s.label}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* ---------- RIGHT — portrait ---------- */}
          <motion.div
            style={reduce ? undefined : { y: smoothPhotoY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind the frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-10 animate-pulse-glow rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(155,114,242,0.35) 0%, transparent 65%)',
                  filter: 'blur(46px)',
                }}
              />

              <div className="gradient-border relative w-56 rounded-[2rem] p-[1px] sm:w-72 lg:w-[21rem]">
                <div className="glass-strong group relative overflow-hidden rounded-[2rem]">
                  <img
                    src={profilePic}
                    alt="Shubham Sharma"
                    className="aspect-[4/5] w-full object-cover object-top"
                    style={{
                      transition: 'transform .8s cubic-bezier(.22,1,.36,1)',
                    }}
                  />
                </div>
              </div>

              {/* Floating status cards */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
                className="glass-nav absolute -right-3 top-8 rounded-2xl px-3.5 py-2.5 sm:-right-6"
              >
                <p className="text-white/66 font-mono text-[10.5px] uppercase tracking-widest">
                  Role
                </p>
                <p className="gradient-text-cool text-xs font-semibold">SDE1 · AI</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 1.08, ease: EASE }}
                className="glass-nav absolute -left-3 bottom-10 rounded-2xl px-3.5 py-2.5 sm:-left-8"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-g-cyan" />
                  <p className="text-[11px] font-medium text-white/85">Open to Opportunities</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Ticker ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative border-y border-white/[0.06] bg-white/[0.015] py-4 backdrop-blur-sm"
      >
        <div className="mask-fade-x flex select-none whitespace-nowrap">
          <div className="flex animate-marquee">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-8 px-8">
                <span className="text-white/66 font-mono text-[11px] uppercase tracking-[0.15em]">
                  {item}
                </span>
                <span className="h-1 w-1 shrink-0 rounded-full bg-g-violet/50" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: [0, 8, 8, 16] }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          delay: 1.6,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <span className="text-white/58 font-mono text-[11px] uppercase tracking-[0.18em]">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
