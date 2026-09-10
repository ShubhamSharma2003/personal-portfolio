import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import Parallax from '../motion/Parallax'
import TextReveal from '../motion/TextReveal'
import GlassCard from '../motion/GlassCard'
import Counter from '../motion/Counter'
import { Stagger, StaggerItem } from '../motion/Stagger'

const STAT_CARDS = [
  {
    num: '5+',
    label: 'AI Systems Shipped',
    glow: 'rgba(78,140,255,0.20)',
    tint: 'from-g-blue/20',
  },
  {
    num: '90%',
    label: 'Ops Automated',
    glow: 'rgba(155,114,242,0.20)',
    tint: 'from-g-violet/20',
  },
  {
    num: '500+',
    label: 'Tests Written',
    glow: 'rgba(240,87,142,0.20)',
    tint: 'from-g-pink/20',
  },
  {
    num: '98%',
    label: 'ML Accuracy',
    glow: 'rgba(79,216,232,0.18)',
    tint: 'from-g-cyan/20',
  },
]

const WHAT_I_DO = [
  'Build AI agents & agentic automation pipelines',
  'Ship full-stack products from 0 to production',
  'Solve real business problems with real technology',
  'Own the outcome — not just the ticket',
]

const CERTS = [
  'Postman API Expert',
  'IBM Cloud Essentials V3',
  'Goldman Sachs SWE Simulation',
  'J.P. Morgan SWE Simulation',
]

const PARAGRAPHS = [
  <>
    I&apos;m an <strong className="text-white/92 font-semibold">AI-first software engineer</strong>{' '}
    at <strong className="text-white/92 font-semibold">NOISE</strong> (boAt Lifestyle) — where I
    joined as an intern and was converted to SDE1 after shipping production systems that replaced
    entire manual workflows. Since joining full-time, I&apos;ve designed and owned 5+ AI-driven
    platforms end-to-end: a B2B warehouse automation pipeline processing POs from Amazon, Flipkart,
    Croma, Reliance &amp; more; an AI recruitment system that cuts weeks of screening to hours; a
    real-time brand intelligence monitor across 5 social platforms; and an Instagram AI agent
    running 24/7 with zero human support.
  </>,
  <>
    My work spans <strong className="text-white/92 font-semibold">AI engineering</strong>,{' '}
    <strong className="text-white/92 font-semibold">full-stack development</strong>, and{' '}
    <strong className="text-white/92 font-semibold">systems design</strong>. I don&apos;t just
    integrate LLMs — I architect the entire pipeline: agentic N8N workflows, RAG systems, OCR
    parsers, sentiment engines, the Node/Python backend, the Next.js frontend, and the CI/CD that
    ships it all. I think in systems, not tickets.
  </>,
  <>
    I thrive when the problem is ambiguous and the pressure is high. Startup pace isn&apos;t a
    tradeoff for me — it&apos;s how I operate best. Whether it&apos;s inheriting a messy codebase at
    11pm or designing a new AI system from a napkin sketch, I move fast, learn faster, and
    don&apos;t stop until it&apos;s live and working.
  </>,
]

export default function About() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 md:mb-16">
          <span className="section-label">001 — About</span>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
          {/* ---------- LEFT: bio ---------- */}
          {/* min-w-0: a grid child defaults to min-width:auto, so any wide
              descendant would push the whole page sideways instead of scrolling. */}
          <div className="min-w-0">
            <Parallax speed={-26}>
              <h2 className="section-heading mb-9 text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                <TextReveal text="The" className="block text-white" />
                <TextReveal
                  text="Builder"
                  className="block"
                  wordClassName="gradient-text"
                  delay={0.12}
                />
              </h2>
            </Parallax>

            <div className="text-white/78 max-w-2xl space-y-5 text-[16px] leading-[1.75]">
              {PARAGRAPHS.map((p, i) => (
                <Reveal key={i} delay={i * 0.08} amount={0.15}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* How I operate */}
            <Reveal className="mt-10" delay={0.1}>
              <GlassCard className="rounded-3xl" tilt={false} glow="rgba(78,140,255,0.14)">
                <div className="border-b border-white/[0.07] px-5 py-3.5">
                  <p className="text-white/66 font-mono text-[11px] uppercase tracking-[0.16em]">
                    How I operate
                  </p>
                </div>
                <Stagger className="divide-y divide-white/[0.05]" stagger={0.08}>
                  {WHAT_I_DO.map((item, i) => (
                    <StaggerItem key={item} distance={12}>
                      <motion.div
                        whileHover={reduce ? undefined : { x: 6 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 28,
                        }}
                        className="flex items-center gap-4 px-5 py-4"
                      >
                        <span className="text-white/58 font-mono text-[11px]">0{i + 1}</span>
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-g-main" />
                        <span className="text-white/78 text-sm font-medium">{item}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </GlassCard>
            </Reveal>

            {/* Contact shortcuts */}
            <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.15}>
              <motion.a
                href="mailto:shubham8186@gmail.com"
                whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary !py-2.5 !text-[13px]"
              >
                shubham8186@gmail.com
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/shubhamsharma2003"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-glass !py-2.5 !text-[13px]"
              >
                LinkedIn ↗
              </motion.a>
            </Reveal>

            {/* Certifications */}
            <Reveal className="mt-10 border-t border-white/[0.07] pt-7" delay={0.15}>
              <p className="text-white/58 mb-4 font-mono text-[11px] uppercase tracking-[0.16em]">
                Certifications &amp; Recognition
              </p>
              <Stagger className="flex flex-wrap gap-2" stagger={0.06}>
                {CERTS.map((c) => (
                  <StaggerItem key={c} distance={10}>
                    <motion.span
                      whileHover={
                        reduce
                          ? undefined
                          : {
                              y: -3,
                              borderColor: 'rgba(155,114,242,0.45)',
                              backgroundColor: 'rgba(155,114,242,0.09)',
                            }
                      }
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 24,
                      }}
                      className="chip cursor-default !text-[11px] !normal-case !tracking-normal"
                    >
                      {c}
                    </motion.span>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>

          {/* ---------- RIGHT: bento grid ---------- */}
          <Stagger className="grid grid-cols-2 gap-4" stagger={0.09} amount={0.1}>
            {STAT_CARDS.map((s) => (
              <StaggerItem key={s.label}>
                <GlassCard className="h-full rounded-3xl" glow={s.glow} strength={6}>
                  <div
                    className={`h-full rounded-3xl bg-gradient-to-br ${s.tint} to-transparent p-5 sm:p-6`}
                  >
                    <div className="gradient-text text-[2.1rem] font-bold leading-none tracking-tight sm:text-[2.5rem]">
                      <Counter value={s.num} />
                    </div>
                    <div className="text-white/66 mt-2.5 font-mono text-[11px] uppercase leading-snug tracking-wider">
                      {s.label}
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}

            {/* Education */}
            <StaggerItem className="col-span-2">
              <GlassCard className="rounded-3xl" glow="rgba(78,140,255,0.16)" strength={4}>
                <div className="p-5 sm:p-6">
                  <p className="text-white/58 mb-5 font-mono text-[11px] uppercase tracking-[0.16em]">
                    Education
                  </p>
                  <div className="space-y-5">
                    <div className="relative pl-4">
                      <span className="absolute left-0 top-1.5 h-[calc(100%-6px)] w-[2px] rounded bg-g-cool" />
                      <p className="text-white/92 text-sm font-semibold">VIT Chennai</p>
                      <p className="text-white/72 mt-0.5 text-xs">
                        B.Tech Electronics &amp; Communication
                      </p>
                      <p className="text-white/58 mt-1 font-mono text-[11px]">
                        CGPA 8.63 / 10 · 2021–2025
                      </p>
                    </div>
                    <div className="relative pl-4">
                      <span className="absolute left-0 top-1.5 h-[calc(100%-6px)] w-[2px] rounded bg-white/10" />
                      <p className="text-sm font-semibold text-white/85">
                        Scottish High International School
                      </p>
                      <p className="text-white/58 mt-1 font-mono text-[11px]">
                        Class 12 ISC · 93.8% · Gurugram
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>

            {/* IEEE badge */}
            <StaggerItem className="col-span-2">
              <a href="#publications" className="block">
                <GlassCard
                  className="gradient-border rounded-3xl"
                  glow="rgba(240,87,142,0.18)"
                  strength={4}
                >
                  <div className="flex items-start gap-4 p-5">
                    <span className="gradient-text select-none text-4xl font-bold leading-none">
                      ¶
                    </span>
                    <div>
                      <p className="text-white/66 mb-1.5 font-mono text-[11px] uppercase tracking-[0.15em]">
                        IEEE Published · ICCoSD 2025
                      </p>
                      <p className="text-white/92 text-[13px] font-semibold leading-snug">
                        Multi-Class Traffic Flow Prediction with ML for Urban Planning
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  )
}
