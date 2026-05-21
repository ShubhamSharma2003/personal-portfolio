import profilePic from '../../assets/images/Profilepic.jpeg'

const TICKER_ITEMS = [
  'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Python',
  'FastAPI', 'Docker', 'Kubernetes', 'PyTorch', 'TensorFlow',
  'N8N', 'GraphQL', 'React Native', 'Redux', 'PostgreSQL',
]

const STATS = [
  { num: '1.5+', label: 'Yrs Exp' },
  { num: '500+', label: 'Tests Written' },
  { num: '40%', label: 'Load Reduced' },
  { num: '98%', label: 'ML Accuracy' },
]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-16 bg-cream relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      {/* Decorative floating blocks */}
      <div className="absolute top-24 right-6 w-16 h-16 bg-yellow border-2 border-ink shadow-brutal animate-float hidden xl:block" />
      <div className="absolute top-44 right-28 w-8 h-8 bg-pink border-2 border-ink hidden xl:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-6 w-12 h-12 bg-blue border-2 border-ink shadow-brutal hidden xl:block" />
      <div className="absolute bottom-60 left-24 w-6 h-6 bg-green border-2 border-ink hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

          {/* LEFT — Text content */}
          <div className="relative z-10 order-1">
            {/* Status badge */}
            <div className="mb-5 sm:mb-7 flex items-center gap-3 flex-wrap">
              <span className="section-label flex items-center gap-2">
                <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
                SDE @ NOISE · Gurugram
              </span>
            </div>

            {/* Name */}
            <h1 className="section-heading text-[clamp(3rem,9vw,6.5rem)] mb-1 leading-[0.92]">
              SHUBHAM
            </h1>
            <div className="relative inline-block mb-4">
              <h1 className="section-heading text-[clamp(3rem,9vw,6.5rem)] relative z-10 px-2 leading-[0.92]">
                SHARMA
              </h1>
              <div className="absolute inset-y-0 left-0 right-0 bg-yellow border-b-4 border-ink -z-0 -skew-x-1 top-1" />
            </div>

            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ink/50 mb-6 sm:mb-8">
              Full-Stack ✦ AI/ML ✦ Agentic Systems
            </p>

            {/* Bio */}
            <p className="font-grotesk text-sm sm:text-base text-ink/75 max-w-[480px] mb-8 sm:mb-10 leading-relaxed">
              Building production-grade systems at{' '}
              <strong className="text-ink">NOISE</strong> — agentic AI workflows,
              real-time auction platforms, and e-commerce serving millions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
              <a href="#projects" className="btn-brutal !px-4 sm:!px-6 !text-xs">
                View Work ↓
              </a>
              <a href="#contact" className="btn-brutal-outline !px-4 sm:!px-6 !text-xs">
                Contact Me →
              </a>
              <a
                href="https://github.com/shubhamsharma2003"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal-dark !px-4 sm:!px-6 !text-xs"
              >
                GitHub ↗
              </a>
            </div>

            {/* Stats row — 2×2 on mobile, 1×4 on sm+ */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-2 border-ink shadow-brutal w-full sm:w-fit max-w-xs sm:max-w-none">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-3 sm:px-5 py-3 text-center ${
                    i % 2 === 0 ? 'border-r-2 border-ink' : ''
                  } ${i < 2 ? 'border-b-2 sm:border-b-0 border-ink' : ''}`}
                >
                  <div className="font-syne font-black text-lg sm:text-xl text-ink">{s.num}</div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-ink/50 uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Profile photo */}
          <div className="relative flex justify-center lg:justify-end order-2 mt-10 sm:mt-12 lg:mt-0">
            {/* Extra padding to contain offset layers + floating labels */}
            <div className="relative pt-6 pb-8 px-6 sm:pt-6 sm:pb-8 sm:px-8">
              <div className="relative w-48 h-56 sm:w-64 sm:h-72 lg:w-80 lg:h-[420px]">
                {/* Layered offset frames */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 bg-pink border-2 border-ink" />
                <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 bg-yellow border-2 border-ink" />
                {/* Photo container */}
                <div className="absolute inset-0 border-2 border-ink overflow-hidden bg-ink z-10 group">
                  <img
                    src={profilePic}
                    alt="Shubham Sharma"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-yellow/10 group-hover:bg-transparent transition-all duration-700" />
                </div>

                {/* Floating label — bottom left */}
                <div className="absolute -bottom-5 -left-5 sm:-bottom-4 sm:-left-4 z-20 bg-ink text-cream border-2 border-ink px-2 sm:px-3 py-1.5 sm:py-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest shadow-brutal-yellow whitespace-nowrap">
                  Open to Opportunities
                </div>

                {/* Role tag — top right */}
                <div className="absolute -top-4 -right-4 z-20 bg-green border-2 border-ink px-2 sm:px-3 py-1.5 sm:py-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest shadow-brutal">
                  SDE1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="border-y-2 border-ink bg-ink overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3 select-none">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-mono text-[11px] uppercase text-cream tracking-[0.2em] px-8 border-r border-cream/20 inline-block"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
