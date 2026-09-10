/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import Parallax from '../motion/Parallax'
import Carousel from '../motion/Carousel'
import { useIsMobile } from '../motion/useMediaQuery'
import TextReveal from '../motion/TextReveal'
import GlassCard from '../motion/GlassCard'
import { Stagger, StaggerItem } from '../motion/Stagger'

const PROJECTS = [
  {
    num: '01',
    title: 'Warehouse Management Automation',
    label: 'NOISE · SDE1',
    description:
      'Agentic AI system that ingests Purchase Orders from Amazon, Flipkart, and LFR (Large Format Retail: Croma, Reliance, Tresor & more) — via automated email pickup or manual upload. Every SKU is validated live against the OMS through multi-stage checks, then auto-punched into the system. Eliminated manual intervention for 4–5 people, reduced processing time from hours to minutes, and saved ~90% of total effort.',
    flow: ['Email / Upload', '→', 'AI Parser', '→', 'OMS Validation', '→', 'Auto-Punch'],
    techGroups: [
      {
        label: 'AI Layer',
        color: '#9B72F2',
        items: ['Agentic AI', 'N8N', 'LLM', 'OCR Pipeline'],
      },
      {
        label: 'Backend',
        color: '#F0578E',
        items: ['Node.js', 'Python', 'FastAPI', 'Kafka', 'Redis'],
      },
      {
        label: 'Integrations',
        color: '#4E8CFF',
        items: ['OMS API', 'Email Webhook', 'Amazon', 'Flipkart', 'LFR'],
      },
      { label: 'Frontend', color: '#4FD8E8', items: ['Next.js', 'TypeScript'] },
    ],
    links: {},
    accent: '#9B72F2',
    featured: true,
    stat: '90% ops saved',
  },
  {
    num: '02',
    title: 'AI HR Management System',
    label: 'NOISE · SDE1',
    description:
      'AI-powered recruitment pipeline that scans hundreds of resumes in minutes against an auto-generated JD and ranks candidates by fit. Sources candidates directly from LinkedIn and other job portals via intelligent scraping — matching profiles to the JD before a human ever reviews them.',
    flow: ['JD Generator', '→', 'Resume Parser', '→', 'NLP Ranking', '→', 'Shortlist'],
    techGroups: [
      {
        label: 'AI Layer',
        color: '#9B72F2',
        items: ['NLP / NER', 'LLM', 'N8N'],
      },
      { label: 'Backend', color: '#F0578E', items: ['Python', 'FastAPI'] },
      {
        label: 'Data',
        color: '#4E8CFF',
        items: ['Web Scraping', 'LinkedIn API', 'Vector Embeddings'],
      },
      { label: 'Frontend', color: '#4FD8E8', items: ['Next.js'] },
    ],
    links: {},
    accent: '#F0578E',
    featured: false,
    stat: 'Weeks → Hours',
  },
  {
    num: '03',
    title: 'Social Listener & Brand Monitor',
    label: 'NOISE · SDE1',
    description:
      'Real-time brand intelligence platform tracking mentions of Noise, Noise Junior, and Bose India across Reddit, Instagram, Facebook, YouTube, and blogs. Runs sentiment analysis on every mention, surfaces trends, and helps shape brand perception with data-driven responses.',
    flow: ['Social APIs', '→', 'NLP Pipeline', '→', 'Sentiment Score', '→', 'Dashboard'],
    techGroups: [
      {
        label: 'AI Layer',
        color: '#9B72F2',
        items: ['Sentiment Analysis', 'NLP', 'N8N'],
      },
      {
        label: 'Backend',
        color: '#F0578E',
        items: ['Python', 'Node.js', 'Kafka', 'Redis', 'WebSockets'],
      },
      {
        label: 'Integrations',
        color: '#4E8CFF',
        items: ['Instagram API', 'Reddit API', 'YouTube API'],
      },
      { label: 'Frontend', color: '#4FD8E8', items: ['Next.js', 'TypeScript'] },
    ],
    links: {},
    accent: '#4E8CFF',
    featured: false,
    stat: '5 platforms',
  },
  {
    num: '04',
    title: 'Instagram & DM Automation Agent',
    label: 'NOISE · SDE1',
    description:
      "AI agent that auto-replies to every comment and DM on Noise reels, posts, and videos — in the user's language, matching tone, preserving brand identity. Fully integrated with the Shopify store to answer product queries, check availability, and drive conversions without human involvement.",
    flow: ['DM / Comment', '→', 'LLM Agent', '→', 'Shopify Lookup', '→', 'Auto-Reply'],
    techGroups: [
      {
        label: 'AI Layer',
        color: '#9B72F2',
        items: ['LLM Agent', 'Prompt Engineering', 'Embeddings', 'Semantic Search', 'NLP', 'N8N'],
      },
      {
        label: 'Backend',
        color: '#F0578E',
        items: ['Node.js', 'Redis', 'Webhook Handler', 'REST APIs'],
      },
      {
        label: 'Integrations',
        color: '#4E8CFF',
        items: ['Instagram Graph API', 'Shopify API'],
      },
      {
        label: 'Outcome',
        color: '#4FD8E8',
        items: ['24/7 Auto-Response', '0 Human Agents'],
      },
    ],
    links: {},
    accent: '#9B72F2',
    featured: false,
    stat: '24/7 zero-human',
  },
  {
    num: '05',
    title: 'WhatsApp + Voice AI Agent Platform',
    label: 'Freelance · Real Estate',
    description:
      'Full-stack AI communication platform built for a real estate company. Centralizes WhatsApp conversations across all leads in one dashboard — with an AI agent that reads context, analyzes the scenario, and responds intelligently. Integrated a real-time voice calling layer where an AI agent picks up calls, converses naturally with customers using STT/TTS, and retrieves context via a RAG pipeline. Timeline-based nudge engine auto-follows up cold leads. Broadcast messaging, configurable AI persona and response rules per business unit.',
    flow: ['Call / WhatsApp', '→', 'STT / Webhook', '→', 'RAG + AI Agent', '→', 'TTS / Reply'],
    techGroups: [
      {
        label: 'AI Layer',
        color: '#9B72F2',
        items: [
          'OpenAI GPT',
          'Prompt Engineering',
          'RAG Pipeline',
          'Vector DB',
          'Embeddings',
          'ReAct Agent',
          'AI Evaluation',
        ],
      },
      {
        label: 'Voice AI',
        color: '#FFB86B',
        items: ['Speech-to-Text', 'Text-to-Speech', 'ElevenLabs', 'Cartesia'],
      },
      {
        label: 'Frontend',
        color: '#F0578E',
        items: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        label: 'Backend / DB',
        color: '#4E8CFF',
        items: ['Supabase', 'Realtime DB', 'Edge Functions'],
      },
      {
        label: 'Integrations',
        color: '#4FD8E8',
        items: ['Meta Business API', 'WhatsApp Cloud API'],
      },
    ],
    links: {},
    accent: '#4FD8E8',
    featured: false,
    stat: 'Voice + Chat AI',
  },
  {
    num: '06',
    title: 'Autonomous Bulk Calling Infrastructure',
    label: 'Freelance · Deployed × 2',
    description:
      'Production-grade AI calling platform handling both outbound campaigns and inbound calls at scale. Dynamically spins up voice AI agents based on real-time call traffic — each agent converses naturally with a real human, understands their requirement, and takes action. Multi-tenant with configurable personas per business vertical (real estate, dental). Fallback model switching ensures 100% uptime. Self-hosted on VPS with a remote control dashboard. Already live at two companies.',
    flow: [
      'Call Traffic',
      '→',
      'Traffic Manager',
      '→',
      'Agent Pool (Auto-scale)',
      '→',
      'STT → LLM → TTS',
      '→',
      'Customer',
    ],
    techGroups: [
      {
        label: 'AI Layer',
        color: '#9B72F2',
        items: [
          'LLM Agent',
          'Prompt Engineering',
          'RAG Pipeline',
          'Vector DB',
          'Embeddings',
          'Semantic Search',
          'ReAct Loops',
          'Fallback Models',
        ],
      },
      {
        label: 'Voice AI',
        color: '#FFB86B',
        items: ['Speech-to-Text', 'Text-to-Speech', 'ElevenLabs', 'Cartesia', 'OpenAI Whisper'],
      },
      {
        label: 'Infrastructure',
        color: '#F0578E',
        items: ['VPS Deployment', 'Auto-scaling', 'Load Balancing', 'Traffic Management'],
      },
      {
        label: 'Backend',
        color: '#4E8CFF',
        items: ['Python', 'Node.js', 'WebSockets', 'Real-time Audio'],
      },
      {
        label: 'Multi-tenant',
        color: '#4FD8E8',
        items: ['Real Estate', 'Dental', 'Configurable Personas'],
      },
    ],
    links: {},
    accent: '#FFB86B',
    featured: false,
    stat: '2 companies · 24/7 live',
  },
  {
    num: '07',
    title: 'Unisel Realty Platform',
    label: 'Freelance',
    description:
      'High-performance dynamic property marketplace built with Next.js and Sanity CMS. SEO-optimized with JSON-LD structured data for 100% indexability by search engines and AI crawlers/LLMs. Scalable lead generation pipeline backed by MongoDB.',
    flow: ['Sanity CMS', '→', 'Next.js SSR', '→', 'JSON-LD SEO', '→', 'Lead Capture'],
    techGroups: [
      {
        label: 'Frontend',
        color: '#4FD8E8',
        items: ['Next.js', 'TypeScript', 'Tailwind'],
      },
      { label: 'CMS / DB', color: '#4E8CFF', items: ['Sanity CMS', 'MongoDB'] },
      {
        label: 'SEO',
        color: '#9B72F2',
        items: ['JSON-LD', 'Structured Data', 'OG Tags'],
      },
    ],
    links: { live: 'https://www.uniselrealty.com' },
    accent: '#4FD8E8',
    featured: false,
    stat: '100% SEO indexable',
  },
  {
    num: '08',
    title: 'Multilingual Language Recognition',
    label: 'ML / NLP Research',
    description:
      '98% accuracy language classifier (XLM-RoBERTa) trained to identify 10 languages across 2,175 samples. Average precision, recall & F1-score of 0.98 across all classes. Published-grade ML pipeline.',
    flow: ['Text Input', '→', 'XLM-RoBERTa', '→', 'Softmax', '→', 'Language Label'],
    techGroups: [
      {
        label: 'Model',
        color: '#9B72F2',
        items: ['XLM-RoBERTa', 'Transformers', 'Fine-tuning'],
      },
      {
        label: 'Framework',
        color: '#F0578E',
        items: ['PyTorch', 'HuggingFace'],
      },
      { label: 'Language', color: '#4E8CFF', items: ['Python'] },
      {
        label: 'Metrics',
        color: '#4FD8E8',
        items: ['98% Accuracy', '0.98 F1-Score'],
      },
    ],
    links: { code: 'https://github.com/shubhamsharma2003' },
    accent: '#FFB86B',
    featured: false,
    stat: '98% accuracy',
  },
  {
    num: '09',
    title: 'Motora — Grounded Car-Buying Assistant',
    label: 'Personal · Open Source',
    description:
      'Conversational assistant that helps a buyer search, compare, and choose across a CarDekho-sourced catalogue. Deliberately built without a vector database: car facts live as structured records in Supabase and are retrieved with deterministic filters and fuzzy matching, while GPT-4.1 mini is confined to reading conversational intent and explaining the results it is handed. That split is what keeps answers grounded — the model never invents a spec. Ships a deterministic fallback path so the whole app still answers correctly with no OpenAI key present, and a one-time scraper that customer requests can never trigger.',
    flow: [
      'CarDekho Scrape',
      '→',
      'Supabase Postgres',
      '→',
      'Deterministic Filters',
      '→',
      'GPT-4.1 Mini',
      '→',
      'Grounded Answer',
    ],
    techGroups: [
      {
        label: 'AI Layer',
        color: '#9B72F2',
        items: [
          'GPT-4.1 Mini',
          'Intent Extraction',
          'Grounded Generation',
          'Prompt Engineering',
          'Deterministic Fallback',
        ],
      },
      {
        label: 'Backend',
        color: '#F0578E',
        items: ['Python', 'FastAPI', 'Pydantic', 'Uvicorn'],
      },
      {
        label: 'Data',
        color: '#4E8CFF',
        items: ['Supabase', 'PostgreSQL', 'BeautifulSoup', 'httpx', 'RapidFuzz', 'Tenacity'],
      },
      { label: 'Frontend', color: '#4FD8E8', items: ['React', 'TypeScript', 'Vite'] },
    ],
    links: { code: 'https://github.com/ShubhamSharma2003/chatbot-car' },
    accent: '#4E8CFF',
    featured: false,
    stat: 'Grounded — no vector DB',
  },
  {
    num: '10',
    title: 'Multi-Tenant Customer Communication Platform',
    label: 'SuperProfile · Take-home',
    description:
      'Intercom-class support platform built to a written, adversarially reviewed design spec: auth with workspaces, invitations and Admin/Agent RBAC; an embeddable live-chat widget that installs with one script tag; a real email channel doing inbound MIME parsing and RFC-correct threading; a unified inbox across chat and email with assign, snooze and resolve; a knowledge base with public search and widget autosuggest; incremental LLM conversation summarization; and customer-connected custom domains with real SSL. The interesting decisions are the ones it refuses: no Redis and no queue library — real-time fanout rides Postgres LISTEN/NOTIFY, and the job runner is a hand-rolled transactional outbox. Tenant isolation is enforced in the database itself under FORCE RLS, not in application code.',
    flow: [
      'Widget / Email',
      '→',
      'Next.js API',
      '→',
      'Postgres (FORCE RLS)',
      '→',
      'LISTEN/NOTIFY',
      '→',
      'WS Gateway',
      '→',
      'Agent Inbox',
    ],
    techGroups: [
      {
        label: 'Architecture',
        color: '#9B72F2',
        items: [
          'Multi-Tenancy',
          'FORCE RLS',
          'Transactional Outbox',
          'LISTEN/NOTIFY Fanout',
          'pnpm Monorepo',
          'No Redis',
        ],
      },
      {
        label: 'Backend',
        color: '#F0578E',
        items: [
          'TypeScript',
          'Node 22',
          'Drizzle ORM',
          'PostgreSQL',
          'ws',
          'Zod',
          'jose',
          'argon2',
        ],
      },
      {
        label: 'AI Layer',
        color: '#FFB86B',
        items: ['Anthropic SDK', 'Claude Opus 5', 'Incremental Summarization'],
      },
      {
        label: 'Frontend',
        color: '#4FD8E8',
        items: ['Next.js 15', 'React', 'Tailwind', 'shadcn/ui', 'Tiptap'],
      },
      {
        label: 'Email & Infra',
        color: '#4E8CFF',
        items: ['Postmark', 'Inbound MIME', 'DKIM', 'Vercel', 'Railway', 'Supabase', 'Vitest'],
      },
    ],
    links: { code: 'https://github.com/ShubhamSharma2003/superprofile' },
    accent: '#FFB86B',
    featured: false,
    stat: 'No Redis · Postgres fanout',
  },
]

/** Architecture flow rendered as connected nodes that light up in sequence. */
function FlowDiagram({ steps, accent, compact = false }) {
  // The source data interleaves '→' separators; drop them and draw our own.
  const nodes = steps.filter((s) => s !== '→')

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {nodes.map((step, i) => (
        <motion.span
          key={`${step}-${i}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            delay: i * 0.09,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-1.5"
        >
          <span
            className={`rounded-lg border font-mono uppercase tracking-wider ${
              compact ? 'px-1.5 py-0.5 text-[10.5px]' : 'px-2.5 py-1 text-[10.5px]'
            }`}
            style={{
              color: `${accent}`,
              borderColor: `${accent}30`,
              background: `${accent}12`,
            }}
          >
            {step}
          </span>
          {i < nodes.length - 1 && (
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" aria-hidden="true">
              <motion.path
                d="M0 3h11m0 0-2.5-2.5M11 3l-2.5 2.5"
                stroke={accent}
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 + 0.15, duration: 0.35 }}
              />
            </svg>
          )}
        </motion.span>
      ))}
    </div>
  )
}

function TechGroups({ groups, compact = false }) {
  return (
    <div className="flex flex-col gap-2">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-wrap items-start gap-1.5">
          <span
            className="mt-[1px] shrink-0 rounded-md px-1.5 py-0.5 font-mono text-[10.5px] uppercase tracking-wider"
            style={{
              color: g.color,
              background: `${g.color}18`,
              border: `1px solid ${g.color}30`,
            }}
          >
            {g.label}
          </span>
          <div className="flex flex-wrap gap-1">
            {g.items.map((item) => (
              <span
                key={item}
                className={`text-white/72 rounded-md border border-white/[0.07] bg-white/[0.02] font-mono tracking-wide ${
                  compact ? 'px-1.5 py-0.5 text-[10.5px]' : 'px-2 py-0.5 text-[10.5px]'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ProjectLinks({ links, compact = false }) {
  const reduce = useReducedMotion()
  const size = compact ? '!py-1.5 !px-3.5 !text-[11px]' : '!py-2 !px-4 !text-xs'

  if (!links.live && !links.code) {
    return (
      <span className="text-white/58 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest">
        <span className="h-1 w-1 rounded-full bg-white/20" />
        Private · NOISE Internal
      </span>
    )
  }

  return (
    <div className="flex gap-2">
      {links.live && (
        <motion.a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className={`btn-primary ${size}`}
        >
          Live ↗
        </motion.a>
      )}
      {links.code && (
        <motion.a
          href={links.code}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className={`btn-glass ${size}`}
        >
          Code ↗
        </motion.a>
      )}
    </div>
  )
}

/* Bento spans: index into `rest` → column span at lg.
   Projects 05 and 06 carry the most substance, so they get the wide slots. */
// One entry per non-featured project, on a 6-column grid. Keep the widths in
// each row summing to 6 so the last row never leaves an orphan card.
const SPANS = [
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-3',
]

/** One non-featured project. Shared by the desktop bento grid and the mobile carousel. */
function ProjectCard({ proj }) {
  return (
    <GlassCard className="h-full rounded-[1.5rem]" glow={`${proj.accent}22`} strength={5}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div
          className="flex items-start justify-between gap-3 border-b border-white/[0.06] p-4 sm:p-5"
          style={{
            background: `linear-gradient(120deg, ${proj.accent}16 0%, transparent 70%)`,
          }}
        >
          <span
            className="text-3xl font-bold leading-none tracking-tight"
            style={{ color: `${proj.accent}B3` }}
          >
            {proj.num}
          </span>
          <div className="flex flex-col items-end gap-1.5">
            <span className="chip whitespace-nowrap !py-0.5 !text-[10.5px]">{proj.label}</span>
            <span
              className="whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider"
              style={{
                color: proj.accent,
                background: `${proj.accent}16`,
                border: `1px solid ${proj.accent}2E`,
              }}
            >
              {proj.stat}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="mb-3 text-[16px] font-semibold leading-snug tracking-tight text-white sm:text-base">
            {proj.title}
          </h3>

          <div className="mb-3.5">
            <FlowDiagram steps={proj.flow} accent={proj.accent} compact />
          </div>

          {/* Clamped on phones only: carousel slides all stretch to the tallest
              card, so one long description was giving every slide 1212px of
              height. Desktop has the grid room to show these in full. */}
          <p className="text-white/72 mb-4 line-clamp-[7] flex-1 text-[12.5px] leading-relaxed md:line-clamp-none">
            {proj.description}
          </p>

          <div className="mb-4">
            <TechGroups groups={proj.techGroups} compact />
          </div>

          <div className="mt-auto pt-1">
            <ProjectLinks links={proj.links} compact />
          </div>
        </div>
      </div>
    </GlassCard>
  )
}

export default function Projects() {
  const isMobile = useIsMobile()
  const featured = PROJECTS[0]
  const rest = PROJECTS.slice(1)
  const reduce = useReducedMotion()

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 md:mb-16">
          <span className="section-label">004 — Projects</span>
        </Reveal>

        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <Parallax speed={-26}>
            <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              <TextReveal text="Selected" className="block text-white" />
              <TextReveal
                text="Work"
                className="block"
                wordClassName="gradient-text"
                delay={0.12}
              />
            </h2>
          </Parallax>
          <Reveal direction="left" delay={0.2}>
            <p className="text-white/58 font-mono text-[11px] uppercase leading-relaxed tracking-[0.15em] lg:text-right">
              Production systems built at NOISE.
              <br />
              Real scale. Real automation.
            </p>
          </Reveal>
        </div>

        {/* ---------- Featured ---------- */}
        <Reveal className="mb-4" amount={0.1}>
          <GlassCard
            className="gradient-border rounded-[1.75rem]"
            tilt={false}
            glow={`${featured.accent}1F`}
          >
            <div
              className="border-b border-white/[0.07] p-5 sm:p-7"
              style={{
                background: `linear-gradient(120deg, ${featured.accent}1A 0%, transparent 60%)`,
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <span
                    className="text-4xl font-bold leading-none tracking-tight sm:text-5xl"
                    style={{ color: `${featured.accent}B3` }}
                  >
                    {featured.num}
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip !py-1 !text-[11px]">{featured.label}</span>
                    <span className="rounded-full border border-g-cyan/30 bg-g-cyan/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-g-cyan">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-g-cyan opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-g-cyan" />
                  </span>
                  <span className="text-white/72 font-mono text-[11px] uppercase tracking-wider">
                    {featured.stat}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[1.35fr_1fr]">
              <div>
                <h3 className="mb-4 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-[1.75rem]">
                  {featured.title}
                </h3>
                <p className="text-white/72 mb-6 max-w-2xl text-sm leading-relaxed">
                  {featured.description}
                </p>
                <p className="text-white/58 mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.15em]">
                  Architecture Flow
                </p>
                <FlowDiagram steps={featured.flow} accent={featured.accent} />
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
                <p className="text-white/58 mb-3.5 font-mono text-[10.5px] uppercase tracking-[0.15em]">
                  Tech Stack
                </p>
                <TechGroups groups={featured.techGroups} compact />
              </div>
            </div>

            <div className="border-t border-white/[0.06] px-5 py-4 sm:px-7">
              <p className="text-white/58 font-mono text-[11px] uppercase tracking-wider">
                B2B · Amazon · Flipkart · LFR (Croma · Reliance · Tresor) · Blinkit · Myntra
              </p>
            </div>
          </GlassCard>
        </Reveal>

        {/* ---------- Bento grid (desktop) / carousel (mobile) ---------- */}
        {isMobile ? (
          <Carousel label="Selected work" slideBasis="88%">
            {rest.map((proj) => (
              <ProjectCard key={proj.num} proj={proj} />
            ))}
          </Carousel>
        ) : (
          <Stagger
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
            stagger={0.08}
            amount={0.05}
          >
            {rest.map((proj, i) => (
              <StaggerItem
                key={proj.num}
                className={`h-full ${SPANS[i] ?? 'lg:col-span-2'}`}
                distance={26}
              >
                <ProjectCard proj={proj} />
              </StaggerItem>
            ))}
          </Stagger>
        )}

        {/* GitHub CTA */}
        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <motion.a
            href="https://github.com/shubhamsharma2003"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="btn-glass !px-7"
          >
            More on GitHub ↗
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
