const STAT_CARDS = [
  { num: '5+', label: 'AI Systems Shipped', color: 'bg-yellow', text: 'text-ink' },
  { num: '90%', label: 'Ops Automated', color: 'bg-pink', text: 'text-cream' },
  { num: '500+', label: 'Tests Written', color: 'bg-blue', text: 'text-cream' },
  { num: '98%', label: 'ML Accuracy', color: 'bg-green', text: 'text-ink' },
]

const WHAT_I_DO = [
  { symbol: '▸', label: 'Build AI agents & agentic automation pipelines' },
  { symbol: '▸', label: 'Ship full-stack products from 0 to production' },
  { symbol: '▸', label: 'Solve real business problems with real technology' },
  { symbol: '▸', label: 'Own the outcome — not just the ticket' },
]

const CERTS = [
  'Postman API Expert',
  'IBM Cloud Essentials V3',
  'Goldman Sachs SWE Simulation',
  'J.P. Morgan SWE Simulation',
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-14">
          <span className="section-label">001 — About</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-start">

          {/* Left: bio */}
          <div>
            <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-7 md:mb-10">
              THE
              <br />
              <span className="relative inline-block">
                BUILDER
                <span className="absolute left-0 right-0 bottom-0 h-4 bg-yellow -z-10" />
              </span>
            </h2>

            <div className="space-y-5 text-ink/75 font-grotesk text-[15px] leading-relaxed max-w-xl">
              <p>
                I'm an <strong className="text-ink">AI-first software engineer</strong> who takes ownership of hard problems and ships production systems that create real business impact. At <strong className="text-ink">NOISE</strong>, I've designed and delivered 5+ AI-driven platforms entirely from scratch — not prototypes, not demos, but live systems handling real operations at scale.
              </p>
              <p>
                My work sits at the intersection of <strong className="text-ink">AI engineering</strong>, <strong className="text-ink">full-stack development</strong>, and <strong className="text-ink">systems thinking</strong>. I design agentic workflows, integrate LLMs into business-critical processes, build the APIs, ship the UI, and measure the outcome. I think in pipelines, not features.
              </p>
              <p>
                I thrive in <strong className="text-ink">high-velocity startup environments</strong> where requirements are ambiguous and the pressure is real. Whether it's inheriting a messy codebase at 11pm or architecting a new AI system from a napkin sketch — I move fast, learn faster, and never stop until it's in production.
              </p>
            </div>

            {/* What I do */}
            <div className="mt-8 border-2 border-ink shadow-brutal">
              <div className="bg-ink px-4 py-2.5 border-b-2 border-ink">
                <p className="font-mono text-[10px] uppercase tracking-widest text-cream/60">
                  How I operate
                </p>
              </div>
              <div className="divide-y-2 divide-ink">
                {WHAT_I_DO.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 px-4 py-3 hover:bg-yellow transition-colors duration-150 group"
                  >
                    <span className="font-syne font-black text-ink/20 group-hover:text-ink transition-colors duration-150 shrink-0 text-lg">
                      {item.symbol}
                    </span>
                    <span className="font-grotesk text-sm font-semibold text-ink/80 group-hover:text-ink transition-colors duration-150">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact links */}
            <div className="mt-7 md:mt-8 flex flex-wrap gap-3">
              <a href="mailto:shubham8186@gmail.com" className="btn-brutal !text-xs !py-2">
                shubham8186@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/shubhamsharma2003"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal-outline !text-xs !py-2"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Certs */}
            <div className="mt-7 md:mt-8 pt-6 border-t-2 border-ink">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-4">
                Certifications & Recognition
              </p>
              <div className="flex flex-wrap gap-2">
                {CERTS.map((c) => (
                  <span key={c} className="skill-tag !text-[11px]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: stat cards + education */}
          <div className="grid grid-cols-2 gap-4">
            {STAT_CARDS.map((s) => (
              <div
                key={s.label}
                className={`${s.color} border-2 border-ink p-5 sm:p-6 shadow-brutal-lg card-hover`}
              >
                <div className={`font-syne font-black text-3xl sm:text-4xl mb-2 ${s.text}`}>
                  {s.num}
                </div>
                <div className={`font-mono text-[10px] uppercase tracking-wider opacity-70 ${s.text} leading-snug`}>
                  {s.label}
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="col-span-2 border-2 border-ink bg-ink text-cream p-5 shadow-brutal-lg card-hover">
              <p className="font-mono text-[10px] uppercase tracking-widest text-cream/40 mb-4">
                Education
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-syne font-black text-sm uppercase text-cream">VIT Chennai</p>
                  <p className="font-grotesk text-xs text-cream/60 mt-0.5">
                    B.Tech Electronics & Communication
                  </p>
                  <p className="font-mono text-[10px] text-cream/40 mt-0.5">
                    CGPA 8.63 / 10 · 2021–2025
                  </p>
                </div>
                <div className="border-t border-cream/10 pt-4">
                  <p className="font-syne font-black text-sm uppercase text-cream">
                    Scottish High International School
                  </p>
                  <p className="font-mono text-[10px] text-cream/40 mt-0.5">
                    Class 12 ISC · 93.8% · Gurugram
                  </p>
                </div>
              </div>
            </div>

            {/* IEEE Publication badge */}
            <div className="col-span-2 border-2 border-ink bg-yellow p-4 shadow-brutal card-hover">
              <div className="flex items-start gap-3">
                <span className="font-syne font-black text-3xl text-ink/20 leading-none">¶</span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1">
                    IEEE Published · ICCoSD 2025
                  </p>
                  <p className="font-grotesk font-bold text-xs text-ink leading-snug">
                    Multi-Class Traffic Flow Prediction with ML for Urban Planning
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
