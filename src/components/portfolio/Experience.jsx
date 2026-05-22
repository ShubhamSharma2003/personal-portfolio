const EXPERIENCES = [
  {
    company: 'NOISE',
    companyFull: 'NOISE · Gurugram',
    role: 'Software Developer Engineer 1',
    period: 'Aug 2025 — Present',
    location: 'Gurugram, Haryana',
    badge: 'CURRENT',
    badgeBg: 'bg-green',
    headerBg: 'bg-yellow',
    tagline: 'Owned and shipped 5+ AI-driven production systems from scratch — no hand-holding, no prototypes, real scale.',
    highlights: [
      {
        tag: 'AI SYSTEM',
        tagColor: 'bg-yellow',
        title: 'Warehouse Management Automation',
        desc: 'Architected end-to-end agentic AI pipeline ingesting B2B purchase orders from Amazon, Flipkart, and LFR (Large Format Retail: Croma, Reliance, Tresor & more). Multi-stage OMS validation, auto-SKU punch-in. Replaced 4–5 manual roles. Processing time: hours → minutes. 90% effort saved.',
      },
      {
        tag: 'AI SYSTEM',
        tagColor: 'bg-yellow',
        title: 'AI HR Recruitment Pipeline',
        desc: 'Designed and delivered intelligent resume screening system. Auto-generates JDs, parses hundreds of CVs with NLP/ML, ranks by fit score, and sources directly from LinkedIn — all before a human reviews anything.',
      },
      {
        tag: 'AI SYSTEM',
        tagColor: 'bg-yellow',
        title: 'Social Listener & Brand Monitor',
        desc: 'Built real-time brand intelligence platform tracking Noise & Bose India across Reddit, Instagram, Facebook, YouTube, and blogs. Runs sentiment analysis per mention, surfaces trends, powers data-driven response strategy.',
      },
      {
        tag: 'AI AGENT',
        tagColor: 'bg-pink',
        title: 'Instagram & DM Automation Agent',
        desc: 'Shipped AI agent that auto-replies to every DM and comment on Noise\'s Instagram — in the user\'s language, matching tone, preserving brand voice. Full Shopify integration for product queries and conversions. 24/7 zero-human operation.',
      },
      {
        tag: 'AI AGENT',
        tagColor: 'bg-pink',
        title: 'GoNoise AI Chatbot',
        desc: 'Product recommendation AI that interprets product specs, user preferences, and purchase history to guide customer decisions. Embedded in the main e-commerce flow, driving conversion without live support.',
      },
      {
        tag: 'FULL-STACK',
        tagColor: 'bg-blue',
        title: 'Noise Junior E-Commerce Platform',
        desc: 'Leading frontend and backend architecture for Noise Junior — engaging UI/UX, scalable Node.js backend, full payment and checkout flow. Owned from design handoff to production deployment.',
      },
    ],
    tags: ['Next.js', 'Node.js', 'Python', 'N8N', 'Agentic AI', 'LLM Integration', 'RAG', 'NLP', 'Docker', 'Kubernetes', 'Jenkins', 'Shopify API', 'Instagram API'],
  },
  {
    company: 'NOISE',
    companyFull: 'NOISE · Gurugram',
    role: 'Full-Stack Intern → SDE1',
    period: 'Feb 2025 — Jul 2025',
    location: 'Gurugram, Haryana',
    badge: 'INTERNSHIP',
    badgeBg: 'bg-blue',
    headerBg: 'bg-green',
    tagline: 'Joined as intern, converted to SDE1. Built production systems across e-commerce, mobile, and testing infrastructure.',
    highlights: [
      {
        tag: 'LAUNCH',
        tagColor: 'bg-green',
        title: 'Bose India E-Commerce',
        desc: "Designed and shipped Bose India's first-ever dynamic e-commerce site — enabling direct-to-consumer distribution. Owned the entire frontend build from scratch, 0 → production.",
      },
      {
        tag: 'LAUNCH',
        tagColor: 'bg-green',
        title: 'LunaZone Website — LUNA Ring Gen 2',
        desc: 'Redesigned the international LunaZone site for the LUNA Ring Gen 2 launch. Immersive scroll animations, modern aesthetics, high-performance rendering. Live for a global audience.',
      },
      {
        tag: 'MOBILE',
        tagColor: 'bg-blue',
        title: 'GoNoise React Native App',
        desc: 'Built cross-platform mobile app with full e-commerce flow — product browsing, cart, checkout, payments, and wishlist. Shipped to both iOS and Android.',
      },
      {
        tag: 'QA',
        tagColor: 'bg-orange',
        title: '500+ Tests — Jest · RTL · Playwright',
        desc: 'Established and scaled the testing infrastructure. Wrote 500+ unit, integration, and E2E tests across the codebase. Introduced Playwright for critical user flow coverage.',
      },
      {
        tag: 'OPTIMIZATION',
        tagColor: 'bg-purple',
        title: 'Noise-Fit Watch-Face System',
        desc: 'Built watch-face management system serving 1500+ designs. Optimized the API with pagination: 40% reduction in load time, 50% faster UI updates. Directly impacted product catalog UX.',
      },
    ],
    tags: ['React', 'React Native', 'TypeScript', 'Jest', 'Playwright', 'Redux', 'MySQL', 'Next.js'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-cream border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-14">
          <span className="section-label">003 — Experience</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-4 items-end mb-10 md:mb-16">
          <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            WHERE I'VE
            <br />
            <span className="relative inline-block">
              SHIPPED
              <span className="absolute left-0 right-0 bottom-0 h-4 bg-pink -z-10" />
            </span>
          </h2>
          <div className="hidden lg:block text-right pb-2">
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest leading-relaxed">
              Real systems.
              <br />
              Real ownership.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="border-2 border-ink shadow-brutal-xl overflow-hidden card-hover"
            >
              {/* Card header */}
              <div className={`${exp.headerBg} border-b-2 border-ink p-4 md:p-6`}>
                <div className="flex flex-wrap items-start justify-between gap-2 md:gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 md:gap-3 mb-1.5 flex-wrap">
                      <h3 className="font-syne font-black text-xl sm:text-2xl md:text-3xl text-ink uppercase tracking-tight">
                        {exp.company}
                      </h3>
                      <span
                        className={`${exp.badgeBg} font-mono text-[10px] border-2 border-ink text-ink px-2 py-0.5 uppercase tracking-widest shrink-0`}
                      >
                        {exp.badge}
                      </span>
                    </div>
                    <p className="font-grotesk font-semibold text-ink/80 text-sm">{exp.role}</p>
                    <p className="font-mono text-[11px] text-ink/50 mt-0.5">{exp.companyFull}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs sm:text-sm font-bold text-ink">{exp.period}</p>
                    <p className="font-mono text-[11px] text-ink/60 mt-1">{exp.location}</p>
                  </div>
                </div>
                <p className="font-grotesk text-sm text-ink/70 leading-relaxed max-w-2xl">
                  {exp.tagline}
                </p>
              </div>

              {/* Card body */}
              <div className="bg-cream p-4 md:p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                  {exp.highlights.map((h, j) => (
                    <div key={j} className="border border-ink/20 p-3 hover:border-ink transition-colors duration-150 group">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`${h.tagColor} font-mono text-[9px] border border-ink/30 text-ink px-1.5 py-0.5 uppercase tracking-wider`}>
                          {h.tag}
                        </span>
                      </div>
                      <p className="font-grotesk font-bold text-xs text-ink uppercase tracking-wide mb-1.5">
                        {h.title}
                      </p>
                      <p className="font-grotesk text-xs text-ink/60 leading-relaxed">{h.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-3 md:pt-4 border-t border-ink/10 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="skill-tag !text-[10px] !py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
