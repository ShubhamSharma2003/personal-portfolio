import { useMemo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import Parallax from '../motion/Parallax'
import { useIsMobile } from '../motion/useMediaQuery'
import TextReveal from '../motion/TextReveal'

const SKILL_GROUPS = [
  {
    category: 'AI & Agents',
    note: 'What I build with',
    accent: '#9B72F2',
    items: [
      'LLM Integration',
      'Agentic AI',
      'N8N Automation',
      'Prompt Engineering',
      'RAG Pipelines',
      'Document AI',
      'OCR Pipelines',
      'Sentiment Analysis',
      'NLP / NER',
      'Vector Embeddings',
      'Vector Databases',
      'Semantic Search',
      'Agent Orchestration',
      'Webhook Automation',
      'Function / Tool Calling',
      'ReAct Loops',
      'Multi-Agent Systems',
      'Fine-tuning',
      'Voice AI',
      'Speech-to-Text',
      'Text-to-Speech',
      'Real-time AI',
      'AI Output Evaluation',
      'Structured Metrics',
      'Intent Extraction',
      'Grounded Generation',
      'LLM Summarization',
      'Anthropic SDK',
    ],
  },
  {
    category: 'Languages',
    note: 'What I write in',
    accent: '#4FD8E8',
    items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'SQL', 'R', 'HTML/CSS', 'C'],
  },
  {
    category: 'Frameworks & Runtimes',
    note: 'What I build on',
    accent: '#F0578E',
    items: [
      'Next.js',
      'React.js',
      'Node.js',
      'FastAPI',
      'Express.js',
      'Redux',
      'PyTorch',
      'TensorFlow',
      'React Native',
      'Playwright',
      'Vite',
      'Pydantic',
      'Drizzle ORM',
      'Zod',
      'Vitest',
      'Tailwind',
    ],
  },
  {
    category: 'Tools & Platforms',
    note: 'What I deploy with',
    accent: '#4E8CFF',
    items: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Git/GitHub',
      'PostgreSQL',
      'GraphQL',
      'Shopify API',
      'Instagram Graph API',
      'Gmail API',
      'Postman',
      'PowerBI',
      'Tableau',
      'ElevenLabs',
      'Cartesia',
      'Supabase',
      'Redis',
      'Kafka',
      'RabbitMQ',
      'WebSockets',
      'REST APIs',
      'Microservices',
      'Web Scraping',
      'BeautifulSoup',
      'Vercel',
      'Railway',
      'Postmark',
      'pnpm',
    ],
  },
  {
    category: 'Domain Knowledge',
    note: 'What I know deeply',
    accent: '#FFB86B',
    items: [
      'Full-Stack Development',
      'AI Systems Design',
      'Forward Deployment',
      'DevOps & CI/CD',
      'Data Analysis',
      'OOP',
      'System Architecture',
      'API Integration',
      'Testing (Jest / RTL / Playwright)',
      'Linux',
      'Real-time Systems',
      'Conversational AI',
      'AI Evaluation & Feedback Loops',
      'Multi-Tenant Architecture',
      'Row-Level Security (RLS)',
      'Transactional Outbox',
      'Email Engineering (MIME / DKIM)',
      'Auth & RBAC',
    ],
  },
]

const TOTAL = SKILL_GROUPS.reduce((n, g) => n + g.items.length, 0)

/** How many chips a phone shows before asking the reader to opt in to the rest. */
const MOBILE_CAP = 24

export default function Skills() {
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(false)
  const isMobile = useIsMobile()
  const reduce = useReducedMotion()

  // Flatten once, then filter — each tag carries its group's accent so the
  // colour travels with it when the layout reflows.
  const tags = useMemo(
    () =>
      SKILL_GROUPS.flatMap((g) =>
        g.items.map((item) => ({
          item,
          category: g.category,
          accent: g.accent,
        })),
      ),
    [],
  )

  const matching = filter === 'All' ? tags : tags.filter((t) => t.category === filter)

  // Progressive disclosure on phones: 98 chips is ~2600px of scroll, so show a
  // representative slice and let the reader ask for the rest. Desktop has the
  // width to lay them all out in a few rows, so it never truncates.
  const capped = isMobile && !expanded && matching.length > MOBILE_CAP
  const visible = capped ? matching.slice(0, MOBILE_CAP) : matching

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 md:mb-16">
          <span className="section-label">002 — Skills</span>
        </Reveal>

        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <Parallax speed={-26}>
            <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              <TextReveal text="Tech" className="block text-white" />
              <TextReveal
                text="Arsenal"
                className="block"
                wordClassName="gradient-text"
                delay={0.12}
              />
            </h2>
          </Parallax>
          <Reveal direction="left" delay={0.2}>
            <p className="text-white/58 font-mono text-[11px] uppercase leading-relaxed tracking-[0.15em] lg:text-right">
              AI-first stack.
              <br />
              Full-spectrum depth.
              <br />
              <span className="text-white/72">{TOTAL} technologies</span>
            </p>
          </Reveal>
        </div>

        {/* Category filter */}
        <Reveal className="mb-10" delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {['All', ...SKILL_GROUPS.map((g) => g.category)].map((cat) => {
              const isActive = filter === cat
              const group = SKILL_GROUPS.find((g) => g.category === cat)
              const count = group ? group.items.length : TOTAL

              return (
                <motion.button
                  key={cat}
                  onClick={() => {
                    setFilter(cat)
                    setExpanded(false)
                  }}
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                  aria-pressed={isActive}
                  className="relative flex items-center gap-2 rounded-full px-4 py-2.5 text-[12.5px] font-medium"
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-filter-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-white/[0.14] bg-white/[0.08]"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full border border-white/[0.07] bg-white/[0.02]" />
                  )}
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: group ? group.accent : 'linear-gradient(90deg,#4E8CFF,#F0578E)',
                      opacity: isActive ? 1 : 0.45,
                    }}
                  />
                  <span className={isActive ? 'text-white' : 'text-white/72'}>{cat}</span>
                  <span className="text-white/58 font-mono text-[11px]">{count}</span>
                </motion.button>
              )
            })}
          </div>
        </Reveal>

        {/* Tag cloud — animates to new positions when filtered */}
        <motion.div layout className="flex flex-wrap gap-2.5">
          <AnimatePresence mode="popLayout">
            {visible.map((tag) => (
              <motion.span
                key={`${tag.category}-${tag.item}`}
                layout
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.86 }}
                transition={{
                  layout: { type: 'spring', stiffness: 320, damping: 30 },
                  duration: 0.22,
                }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -3,
                        borderColor: tag.accent,
                        backgroundColor: `${tag.accent}1F`,
                        color: 'rgba(255,255,255,0.95)',
                      }
                }
                // No backdrop-blur here on purpose: a 4px blur is invisible behind an
                // 11px chip, and ~100 of these each cost a compositing layer. Dropping
                // it removed 98 layers for no visual change (it was not, as measured,
                // the cause of the scroll jank — that was the aurora orb blur).
                className="text-white/72 cursor-default rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 font-mono text-[11px] tracking-wide"
              >
                {tag.item}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile-only disclosure for the remaining chips. */}
        {isMobile && matching.length > MOBILE_CAP && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="glass mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl font-mono text-[11px] uppercase tracking-[0.15em] text-white/80"
          >
            {expanded ? 'Show fewer' : `Show all ${matching.length}`}
            <span aria-hidden="true">{expanded ? '↑' : '↓'}</span>
          </button>
        )}

        {/* Footer strip */}
        <Reveal className="mt-16 border-t border-white/[0.07] pt-8" delay={0.1}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-white/58 font-mono text-[11px] uppercase tracking-[0.16em]">
              Always learning · Always shipping
            </p>
            <div className="flex gap-1.5">
              {SKILL_GROUPS.map((g) => (
                <motion.span
                  key={g.category}
                  whileHover={{ scale: 1.4 }}
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: g.accent, opacity: 0.7 }}
                  title={g.category}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
