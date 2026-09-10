/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { motion, useScroll, useSpring, useInView, useReducedMotion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import Parallax from '../motion/Parallax'
import Carousel from '../motion/Carousel'
import { useIsMobile } from '../motion/useMediaQuery'
import TextReveal from '../motion/TextReveal'
import GlassCard from '../motion/GlassCard'
import { Stagger, StaggerItem } from '../motion/Stagger'

const TAG_COLORS = {
  'AI SYSTEM': '#9B72F2',
  'AI AGENT': '#F0578E',
  'FULL-STACK': '#4E8CFF',
  BACKEND: '#4E8CFF',
  LAUNCH: '#4FD8E8',
  MOBILE: '#4E8CFF',
  QA: '#FFB86B',
  OPTIMIZATION: '#9B72F2',
}

const EXPERIENCES = [
  {
    company: 'NOISE',
    companyFull: 'NOISE · Gurugram',
    role: 'Software Developer Engineer 1',
    period: 'Aug 2025 — Present',
    location: 'Gurugram, Haryana',
    badge: 'CURRENT',
    current: true,
    tagline:
      'Owned and shipped 5+ AI-driven production systems from scratch — no hand-holding, no prototypes, real scale.',
    highlights: [
      {
        tag: 'AI SYSTEM',
        title: 'Warehouse Management Automation',
        desc: 'Architected end-to-end agentic AI pipeline ingesting B2B purchase orders from Amazon, Flipkart, and LFR (Large Format Retail: Croma, Reliance, Tresor & more). Multi-stage OMS validation, auto-SKU punch-in. Replaced 4–5 manual roles. Processing time: hours → minutes. 90% effort saved.',
      },
      {
        tag: 'AI SYSTEM',
        title: 'AI HR Recruitment Pipeline',
        desc: 'Designed and delivered intelligent resume screening system. Auto-generates JDs, parses hundreds of CVs with NLP/ML, ranks by fit score, and sources directly from LinkedIn — all before a human reviews anything.',
      },
      {
        tag: 'AI SYSTEM',
        title: 'Social Listener & Brand Monitor',
        desc: 'Built real-time brand intelligence platform tracking Noise & Bose India across Reddit, Instagram, Facebook, YouTube, and blogs. Runs sentiment analysis per mention, surfaces trends, powers data-driven response strategy.',
      },
      {
        tag: 'AI AGENT',
        title: 'Instagram & DM Automation Agent',
        desc: "Shipped AI agent that auto-replies to every DM and comment on Noise's Instagram — in the user's language, matching tone, preserving brand voice. Full Shopify integration for product queries and conversions. 24/7 zero-human operation.",
      },
      {
        tag: 'AI AGENT',
        title: 'GoNoise AI Chatbot',
        desc: 'Product recommendation AI that interprets product specs, user preferences, and purchase history to guide customer decisions. Embedded in the main e-commerce flow, driving conversion without live support.',
      },
      {
        tag: 'FULL-STACK',
        title: 'Noise Junior E-Commerce Platform',
        desc: 'Leading frontend and backend architecture for Noise Junior — engaging UI/UX, scalable Node.js backend, full payment and checkout flow. Owned from design handoff to production deployment.',
      },
      {
        tag: 'BACKEND',
        title: 'Event-Driven Backend Infrastructure',
        desc: 'Designed and implemented event-driven microservice architecture across NOISE internal systems — Kafka for high-throughput event streaming between services, Redis for caching and pub/sub queues, Node.js REST APIs powering the AI pipelines and e-commerce backends. Built for reliability and horizontal scale.',
      },
    ],
    tags: [
      'Next.js',
      'Node.js',
      'Python',
      'N8N',
      'Agentic AI',
      'LLM Integration',
      'RAG',
      'NLP',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Kafka',
      'Redis',
      'Microservices',
      'Shopify API',
      'Instagram API',
    ],
  },
  {
    company: 'NOISE',
    companyFull: 'NOISE · Gurugram',
    role: 'Full-Stack Intern → SDE1',
    period: 'Feb 2025 — Jul 2025',
    location: 'Gurugram, Haryana',
    badge: 'INTERNSHIP',
    current: false,
    tagline:
      'Joined as intern, converted to SDE1. Built production systems across e-commerce, mobile, and testing infrastructure.',
    highlights: [
      {
        tag: 'LAUNCH',
        title: 'Bose India E-Commerce',
        desc: "Designed and shipped Bose India's first-ever dynamic e-commerce site — enabling direct-to-consumer distribution. Owned the entire frontend build from scratch, 0 → production.",
      },
      {
        tag: 'LAUNCH',
        title: 'LunaZone Website — LUNA Ring Gen 2',
        desc: 'Redesigned the international LunaZone site for the LUNA Ring Gen 2 launch. Immersive scroll animations, modern aesthetics, high-performance rendering. Live for a global audience.',
      },
      {
        tag: 'MOBILE',
        title: 'GoNoise React Native App',
        desc: 'Built cross-platform mobile app with full e-commerce flow — product browsing, cart, checkout, payments, and wishlist. Shipped to both iOS and Android.',
      },
      {
        tag: 'QA',
        title: '500+ Tests — Jest · RTL · Playwright',
        desc: 'Established and scaled the testing infrastructure. Wrote 500+ unit, integration, and E2E tests across the codebase. Introduced Playwright for critical user flow coverage.',
      },
      {
        tag: 'OPTIMIZATION',
        title: 'Noise-Fit Watch-Face System',
        desc: 'Built watch-face management system serving 1500+ designs. Optimized the API with pagination: 40% reduction in load time, 50% faster UI updates. Directly impacted product catalog UX.',
      },
    ],
    tags: [
      'React',
      'React Native',
      'TypeScript',
      'Jest',
      'Playwright',
      'Redux',
      'MySQL',
      'Next.js',
    ],
  },
]

/** One role on the timeline. The node lights up once the card is in view. */
/** One shipped-system card. Shared by the desktop grid and the mobile carousel. */
function HighlightCard({ h, reduce }) {
  const color = TAG_COLORS[h.tag] ?? '#9B72F2'
  return (
    <motion.div
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              backgroundColor: 'rgba(255,255,255,0.045)',
            }
      }
      transition={{
        type: 'spring',
        stiffness: 340,
        damping: 26,
      }}
      className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
    >
      <span
        className="mb-2.5 inline-block rounded-md px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider"
        style={{
          color,
          background: `${color}18`,
          border: `1px solid ${color}33`,
        }}
      >
        {h.tag}
      </span>
      <p className="text-white/92 mb-1.5 text-[12.5px] font-semibold leading-snug">{h.title}</p>
      <p className="text-white/72 text-[11.5px] leading-relaxed">{h.desc}</p>
    </motion.div>
  )
}

function TimelineEntry({ exp }) {
  const isMobile = useIsMobile()
  const nodeRef = useRef(null)
  const lit = useInView(nodeRef, {
    once: true,
    amount: 0.6,
    margin: '-15% 0px -15% 0px',
  })
  const reduce = useReducedMotion()

  return (
    <div className="relative pl-12 sm:pl-16">
      {/* Node */}
      <div ref={nodeRef} className="absolute left-0 top-8 flex h-8 w-8 items-center justify-center">
        <motion.span
          animate={{
            scale: lit ? 1 : 0.45,
            opacity: lit ? 1 : 0.25,
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="absolute h-3.5 w-3.5 rounded-full bg-g-main"
          style={{
            boxShadow: lit ? '0 0 20px 4px rgba(155,114,242,0.55)' : 'none',
          }}
        />
        {exp.current && !reduce && (
          <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-g-violet opacity-50" />
        )}
        <span className="absolute h-8 w-8 rounded-full border border-white/[0.08]" />
      </div>

      <Reveal direction="up" amount={0.1}>
        <GlassCard className="rounded-[1.75rem]" tilt={false} glow="rgba(155,114,242,0.13)">
          {/* Header */}
          <div className="border-b border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:p-7">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2.5">
                  <h3 className="gradient-text text-2xl font-bold tracking-tight sm:text-3xl">
                    {exp.company}
                  </h3>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] uppercase tracking-widest ${
                      exp.current
                        ? 'border-g-cyan/40 bg-g-cyan/10 text-g-cyan'
                        : 'text-white/72 border-white/10 bg-white/[0.04]'
                    }`}
                  >
                    {exp.badge}
                  </span>
                </div>
                <p className="text-white/92 text-sm font-semibold">{exp.role}</p>
                <p className="text-white/66 mt-1 font-mono text-[11px]">{exp.companyFull}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-white/78 font-mono text-xs font-medium sm:text-[13px]">
                  {exp.period}
                </p>
                <p className="text-white/58 mt-1 font-mono text-[11px]">{exp.location}</p>
              </div>
            </div>
            <p className="text-white/72 max-w-2xl text-sm leading-relaxed">{exp.tagline}</p>
          </div>

          {/* Highlights */}
          <div className="p-5 sm:p-7">
            {isMobile ? (
              <Carousel label={`Systems shipped at ${exp.company}`} className="mb-6">
                {exp.highlights.map((h) => (
                  <HighlightCard key={h.title} h={h} reduce={reduce} />
                ))}
              </Carousel>
            ) : (
              <Stagger
                className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                stagger={0.055}
                amount={0.05}
              >
                {exp.highlights.map((h) => (
                  <StaggerItem key={h.title} distance={16} className="h-full">
                    <HighlightCard h={h} reduce={reduce} />
                  </StaggerItem>
                ))}
              </Stagger>
            )}

            {/* Stack */}
            <div className="flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-white/72 rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  )
}

export default function Experience() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 75%', 'end 60%'],
  })
  const fillHeight = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 md:mb-16">
          <span className="section-label">003 — Experience</span>
        </Reveal>

        <div className="mb-14 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <Parallax speed={-26}>
            <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              <TextReveal text="Where I've" className="block text-white" />
              <TextReveal
                text="Shipped"
                className="block"
                wordClassName="gradient-text"
                delay={0.12}
              />
            </h2>
          </Parallax>
          <Reveal direction="left" delay={0.2}>
            <p className="text-white/58 font-mono text-[11px] uppercase leading-relaxed tracking-[0.15em] lg:text-right">
              Real systems.
              <br />
              Real ownership.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div ref={trackRef} className="relative space-y-8">
          {/* Rail + scroll-linked fill */}
          <div className="absolute bottom-8 left-4 top-8 w-[2px] overflow-hidden rounded-full bg-white/[0.07] sm:left-4">
            <motion.div
              className="h-full w-full origin-top rounded-full bg-g-main"
              style={{ scaleY: fillHeight }}
            />
          </div>

          {EXPERIENCES.map((exp) => (
            <TimelineEntry key={`${exp.company}-${exp.period}`} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
