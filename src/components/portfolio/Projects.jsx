const PROJECTS = [
  {
    num: '01',
    title: 'Warehouse Management Automation',
    label: 'NOISE · SDE1',
    description:
      'Agentic AI system that ingests Purchase Orders from Amazon, Flipkart, LFR, Reliance, Chroma, Blinkit & Myntra — via email pickup or manual upload. Every SKU is validated live against the OMS, through multi-stage checks and flows, then auto-punched into the system. Eliminated manual intervention for 4–5 people, reduced processing time from hours to minutes, and saved ~90% of total effort.',
    tech: ['Next.js', 'Node.js', 'Agentic AI', 'N8N', 'OMS API', 'Python'],
    links: {},
    accent: 'bg-yellow',
    image: null,
    featured: true,
    stat: '90% time saved',
  },
  {
    num: '02',
    title: 'AI HR Management System',
    label: 'NOISE · SDE1',
    description:
      'AI-powered recruitment pipeline that scans hundreds of resumes in minutes against an auto-generated JD and ranks candidates by fit. Also sources candidates directly from LinkedIn and other job portals via intelligent scraping — matching profiles to the JD before a human ever reviews them.',
    tech: ['Next.js', 'Python', 'NLP', 'Web Scraping', 'AI/ML', 'N8N'],
    links: {},
    accent: 'bg-pink',
    image: null,
    featured: false,
    stat: 'Weeks → Hours',
  },
  {
    num: '03',
    title: 'Social Listener & Brand Monitor',
    label: 'NOISE · SDE1',
    description:
      'Real-time brand intelligence platform that tracks mentions of Noise, Noise Junior, and Bose India across Reddit, Instagram, Facebook, YouTube, and public blogs. Runs sentiment analysis on every mention, surfaces trends, and helps the team craft data-driven responses to shape brand perception.',
    tech: ['Next.js', 'N8N', 'Sentiment Analysis', 'Python', 'Social APIs'],
    links: {},
    accent: 'bg-blue',
    image: null,
    featured: false,
    stat: '5 platforms monitored',
  },
  {
    num: '04',
    title: 'Instagram & DM Automation',
    label: 'NOISE · SDE1',
    description:
      'In-house AI agent that auto-replies to every comment and DM on Noise reels, posts, and videos — in the user\'s language, matching their tone, while preserving brand identity. Fully integrated with the Shopify store to answer product queries, check availability, and drive conversions without human involvement.',
    tech: ['Instagram API', 'Shopify', 'AI/NLP', 'N8N', 'Node.js'],
    links: {},
    accent: 'bg-purple',
    image: null,
    featured: false,
    stat: '24/7 auto-response',
  },
  {
    num: '05',
    title: 'Unisel Realty Platform',
    label: 'Freelance',
    description:
      'High-performance dynamic property marketplace built with Next.js and Sanity CMS. SEO-optimized with JSON-LD structured data for 100% indexability by search engines and AI crawlers/LLMs. Scalable lead generation pipeline backed by MongoDB.',
    tech: ['Next.js', 'Sanity CMS', 'MongoDB', 'TypeScript'],
    links: { code: 'https://github.com/shubhamsharma2003' },
    accent: 'bg-green',
    image: null,
    featured: false,
    stat: '100% SEO indexable',
  },
  {
    num: '06',
    title: 'Multilingual Language Recognition',
    label: 'ML / NLP',
    description:
      '98% accuracy language classifier (XLM-RoBERTa) trained to identify 10 languages across 2,175 samples. Average precision, recall & F1-score of 0.98 across all classes.',
    tech: ['Python', 'XLM-RoBERTa', 'PyTorch', 'Transformers'],
    links: { code: 'https://github.com/shubhamsharma2003' },
    accent: 'bg-orange',
    image: null,
    featured: false,
    stat: '98% accuracy',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-cream border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-14">
          <span className="section-label">004 — Projects</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-start mb-8 md:mb-12">
          <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            SELECTED
            <br />
            <span className="relative inline-block">
              WORK
              <span className="absolute left-0 right-0 bottom-0 h-4 bg-blue -z-10" />
            </span>
          </h2>
          <div className="hidden sm:flex items-end">
            <p className="font-mono text-xs text-ink/40 uppercase tracking-widest leading-relaxed">
              Production systems built at NOISE.
              <br />
              Real scale. Real automation.
            </p>
          </div>
        </div>

        {/* Featured project — WMS */}
        <div className="mb-4">
          <div className="border-2 border-ink shadow-brutal-xl card-hover flex flex-col sm:flex-row overflow-hidden group">
            <div className="bg-yellow border-b-2 sm:border-b-0 sm:border-r-2 border-ink p-4 sm:p-8 sm:w-20 flex sm:flex-col items-center justify-between sm:justify-start gap-4 shrink-0">
              <span className="font-syne font-black text-4xl text-ink/20">01</span>
              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-[10px] border-2 border-ink bg-ink text-cream px-2 py-0.5 uppercase tracking-wider whitespace-nowrap">
                  NOISE · SDE1
                </span>
                <span className="font-mono text-[10px] border-2 border-ink bg-yellow text-ink px-2 py-0.5 uppercase tracking-wider whitespace-nowrap">
                  90% time saved
                </span>
              </div>
            </div>
            <div className="flex-1 p-5 sm:p-8">
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="w-2 h-2 bg-green rounded-full mt-2 shrink-0 animate-pulse" />
                <h3 className="font-syne font-black text-xl sm:text-2xl md:text-3xl uppercase leading-tight">
                  Warehouse Management Automation
                </h3>
              </div>
              <p className="font-grotesk text-sm text-ink/70 leading-relaxed mb-4 md:mb-5 max-w-2xl">
                Agentic AI system ingesting Purchase Orders from{' '}
                <strong className="text-ink">Amazon, Flipkart, LFR, Reliance, Chroma, Blinkit & Myntra</strong>{' '}
                — via email pickup or manual upload. Every SKU validated live against the OMS through
                multi-stage flows, then auto-punched into the system. Replaced 4–5 manual roles,
                cut processing from hours to minutes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                {['Next.js', 'Node.js', 'Agentic AI', 'N8N', 'OMS API', 'Python'].map((t) => (
                  <span key={t} className="skill-tag !text-[11px]">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-mono text-ink/50 uppercase tracking-widest">
                <span>B2B · Amazon · Flipkart · LFR · Reliance · Chroma · Blinkit · Myntra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining projects — grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.slice(1).map((proj) => (
            <div
              key={proj.num}
              className="border-2 border-ink shadow-brutal-lg card-hover flex flex-col overflow-hidden group"
            >
              {/* Accent header */}
              <div className={`${proj.accent} border-b-2 border-ink p-4 flex items-start justify-between gap-2`}>
                <span className="font-syne font-black text-4xl text-ink/15 leading-none">{proj.num}</span>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="font-mono text-[10px] border-2 border-ink bg-ink text-cream px-2 py-0.5 uppercase tracking-wider whitespace-nowrap">
                    {proj.label}
                  </span>
                  <span className="font-mono text-[10px] border border-ink/40 text-ink px-2 py-0.5 uppercase tracking-wider whitespace-nowrap">
                    {proj.stat}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col flex-1 bg-cream">
                <h3 className="font-syne font-black text-base sm:text-lg uppercase mb-2.5 leading-tight">
                  {proj.title}
                </h3>
                <p className="font-grotesk text-xs text-ink/65 leading-relaxed mb-4 flex-1">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] border border-ink/30 px-2 py-0.5 uppercase tracking-wide hover:border-ink transition-colors duration-150"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {proj.links.live && (
                    <a
                      href={proj.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal !text-[10px] !py-1.5 !px-3 flex-1"
                    >
                      Live ↗
                    </a>
                  )}
                  {proj.links.code && (
                    <a
                      href={proj.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${proj.links.live ? 'btn-brutal-outline' : 'btn-brutal'} !text-[10px] !py-1.5 !px-3 flex-1`}
                    >
                      Code ↗
                    </a>
                  )}
                  {!proj.links.live && !proj.links.code && (
                    <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest py-1.5">
                      Private · NOISE Internal
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
