const PROJECTS = [
  {
    num: '01',
    title: 'Warehouse Management Automation',
    label: 'NOISE · SDE1',
    description:
      'Agentic AI system that ingests Purchase Orders from Amazon, Flipkart, and LFR (Large Format Retail: Croma, Reliance, Tresor & more) — via automated email pickup or manual upload. Every SKU is validated live against the OMS through multi-stage checks, then auto-punched into the system. Eliminated manual intervention for 4–5 people, reduced processing time from hours to minutes, and saved ~90% of total effort.',
    flow: ['Email / Upload', '→', 'AI Parser', '→', 'OMS Validation', '→', 'Auto-Punch'],
    techGroups: [
      { label: 'AI Layer', color: 'bg-yellow', items: ['Agentic AI', 'N8N', 'LLM', 'OCR Pipeline'] },
      { label: 'Backend', color: 'bg-pink', items: ['Node.js', 'Python', 'FastAPI'] },
      { label: 'Integrations', color: 'bg-blue', items: ['OMS API', 'Email Webhook', 'Amazon', 'Flipkart', 'LFR'] },
      { label: 'Frontend', color: 'bg-green', items: ['Next.js', 'TypeScript'] },
    ],
    links: {},
    accent: 'bg-yellow',
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
      { label: 'AI Layer', color: 'bg-yellow', items: ['NLP / NER', 'LLM', 'N8N'] },
      { label: 'Backend', color: 'bg-pink', items: ['Python', 'FastAPI'] },
      { label: 'Data', color: 'bg-blue', items: ['Web Scraping', 'LinkedIn API', 'Vector Embeddings'] },
      { label: 'Frontend', color: 'bg-green', items: ['Next.js'] },
    ],
    links: {},
    accent: 'bg-pink',
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
      { label: 'AI Layer', color: 'bg-yellow', items: ['Sentiment Analysis', 'NLP', 'N8N'] },
      { label: 'Backend', color: 'bg-pink', items: ['Python', 'Node.js'] },
      { label: 'Integrations', color: 'bg-blue', items: ['Instagram API', 'Reddit API', 'YouTube API'] },
      { label: 'Frontend', color: 'bg-green', items: ['Next.js', 'TypeScript'] },
    ],
    links: {},
    accent: 'bg-blue',
    featured: false,
    stat: '5 platforms',
  },
  {
    num: '04',
    title: 'Instagram & DM Automation Agent',
    label: 'NOISE · SDE1',
    description:
      'AI agent that auto-replies to every comment and DM on Noise reels, posts, and videos — in the user\'s language, matching tone, preserving brand identity. Fully integrated with the Shopify store to answer product queries, check availability, and drive conversions without human involvement.',
    flow: ['DM / Comment', '→', 'LLM Agent', '→', 'Shopify Lookup', '→', 'Auto-Reply'],
    techGroups: [
      { label: 'AI Layer', color: 'bg-yellow', items: ['LLM Agent', 'Prompt Engineering', 'NLP', 'N8N'] },
      { label: 'Backend', color: 'bg-pink', items: ['Node.js', 'Webhook Handler'] },
      { label: 'Integrations', color: 'bg-blue', items: ['Instagram Graph API', 'Shopify API'] },
      { label: 'Outcome', color: 'bg-green', items: ['24/7 Auto-Response', '0 Human Agents'] },
    ],
    links: {},
    accent: 'bg-purple',
    featured: false,
    stat: '24/7 zero-human',
  },
  {
    num: '05',
    title: 'WhatsApp AI Agent Dashboard',
    label: 'Freelance · Real Estate',
    description:
      'Full-stack conversational AI CRM built for a real estate company. Centralizes all WhatsApp conversations across clients in one dashboard, with an AI agent that reads each lead\'s context, analyzes the scenario, and responds intelligently. Timeline-based nudge engine auto-follows up cold leads at the right moment. Broadcast messaging to segment audiences with one click. Fully configurable AI persona and response rules per business unit.',
    flow: ['WhatsApp Msg', '→', 'Meta Webhook', '→', 'AI Agent (OpenAI)', '→', 'Reply / Dashboard'],
    techGroups: [
      { label: 'AI Layer', color: 'bg-yellow', items: ['OpenAI GPT', 'Scenario Analysis', 'Context Engine'] },
      { label: 'Frontend', color: 'bg-pink', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
      { label: 'Backend / DB', color: 'bg-blue', items: ['Supabase', 'Realtime DB', 'Edge Functions'] },
      { label: 'Integrations', color: 'bg-green', items: ['Meta Business API', 'WhatsApp Cloud API'] },
    ],
    links: {},
    accent: 'bg-green',
    featured: false,
    stat: 'AI-powered CRM',
  },
  {
    num: '06',
    title: 'Unisel Realty Platform',
    label: 'Freelance',
    description:
      'High-performance dynamic property marketplace built with Next.js and Sanity CMS. SEO-optimized with JSON-LD structured data for 100% indexability by search engines and AI crawlers/LLMs. Scalable lead generation pipeline backed by MongoDB.',
    flow: ['Sanity CMS', '→', 'Next.js SSR', '→', 'JSON-LD SEO', '→', 'Lead Capture'],
    techGroups: [
      { label: 'Frontend', color: 'bg-green', items: ['Next.js', 'TypeScript', 'Tailwind'] },
      { label: 'CMS / DB', color: 'bg-blue', items: ['Sanity CMS', 'MongoDB'] },
      { label: 'SEO', color: 'bg-yellow', items: ['JSON-LD', 'Structured Data', 'OG Tags'] },
    ],
    links: { code: 'https://github.com/shubhamsharma2003' },
    accent: 'bg-green',
    featured: false,
    stat: '100% SEO indexable',
  },
  {
    num: '07',
    title: 'Multilingual Language Recognition',
    label: 'ML / NLP Research',
    description:
      '98% accuracy language classifier (XLM-RoBERTa) trained to identify 10 languages across 2,175 samples. Average precision, recall & F1-score of 0.98 across all classes. Published-grade ML pipeline.',
    flow: ['Text Input', '→', 'XLM-RoBERTa', '→', 'Softmax', '→', 'Language Label'],
    techGroups: [
      { label: 'Model', color: 'bg-yellow', items: ['XLM-RoBERTa', 'Transformers', 'Fine-tuning'] },
      { label: 'Framework', color: 'bg-pink', items: ['PyTorch', 'HuggingFace'] },
      { label: 'Language', color: 'bg-blue', items: ['Python'] },
      { label: 'Metrics', color: 'bg-green', items: ['98% Accuracy', '0.98 F1-Score'] },
    ],
    links: { code: 'https://github.com/shubhamsharma2003' },
    accent: 'bg-orange',
    featured: false,
    stat: '98% accuracy',
  },
]

function TechGroups({ groups }) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      {groups.map((g) => (
        <div key={g.label} className="flex items-start gap-2 flex-wrap">
          <span className={`${g.color} font-mono text-[9px] border border-ink/30 text-ink px-1.5 py-0.5 uppercase tracking-wider shrink-0 mt-0.5`}>
            {g.label}
          </span>
          <div className="flex flex-wrap gap-1">
            {g.items.map((item) => (
              <span key={item} className="font-mono text-[10px] border border-ink/20 px-2 py-0.5 uppercase tracking-wide text-ink/70">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function FlowDiagram({ steps }) {
  return (
    <div className="flex flex-wrap items-center gap-1 mb-4">
      {steps.map((step, i) => (
        step === '→' ? (
          <span key={i} className="font-mono text-xs text-ink/30">→</span>
        ) : (
          <span key={i} className="font-mono text-[10px] bg-ink text-cream px-2 py-0.5 uppercase tracking-wider">
            {step}
          </span>
        )
      ))}
    </div>
  )
}

export default function Projects() {
  const featured = PROJECTS[0]
  const rest = PROJECTS.slice(1)

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
          <div className="border-2 border-ink shadow-brutal-xl card-hover flex flex-col overflow-hidden group">
            {/* Top accent bar */}
            <div className="bg-yellow border-b-2 border-ink p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="font-syne font-black text-4xl text-ink/20">01</span>
                <div>
                  <span className="font-mono text-[10px] border-2 border-ink bg-ink text-cream px-2 py-0.5 uppercase tracking-wider">
                    NOISE · SDE1
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
                <span className="font-mono text-[10px] border border-ink/40 text-ink px-2 py-0.5 uppercase tracking-wider">
                  {featured.stat}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8 bg-cream">
              <h3 className="font-syne font-black text-xl sm:text-2xl md:text-3xl uppercase leading-tight mb-3">
                {featured.title}
              </h3>

              {/* Architecture flow */}
              <div className="mb-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-ink/30 mb-2">Architecture Flow</p>
                <FlowDiagram steps={featured.flow} />
              </div>

              <p className="font-grotesk text-sm text-ink/70 leading-relaxed mb-5 max-w-3xl">
                {featured.description}
              </p>

              {/* Tech groups */}
              <div className="mb-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-ink/30 mb-3">Tech Stack</p>
                <TechGroups groups={featured.techGroups} />
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-mono text-ink/40 uppercase tracking-widest border-t border-ink/10 pt-4">
                <span>B2B · Amazon · Flipkart · LFR (Croma · Reliance · Tresor) · Blinkit · Myntra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining projects — grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((proj) => (
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

                {/* Mini flow */}
                <div className="mb-3">
                  <FlowDiagram steps={proj.flow} />
                </div>

                <p className="font-grotesk text-xs text-ink/65 leading-relaxed mb-4 flex-1">
                  {proj.description}
                </p>

                {/* Tech groups */}
                <div className="mb-4">
                  <TechGroups groups={proj.techGroups} />
                </div>

                <div className="flex gap-2 mt-auto">
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
