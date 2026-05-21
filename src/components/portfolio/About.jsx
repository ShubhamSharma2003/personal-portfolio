const STAT_CARDS = [
  { num: '1.5+', label: 'Years at NOISE', color: 'bg-yellow', text: 'text-ink' },
  { num: '500+', label: 'Tests Written', color: 'bg-pink', text: 'text-cream' },
  { num: '40%', label: 'Load Time Reduced', color: 'bg-blue', text: 'text-cream' },
  { num: '98%', label: 'ML Model Accuracy', color: 'bg-green', text: 'text-ink' },
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
              WHO
              <br />
              <span className="relative inline-block">
                AM I?
                <span className="absolute left-0 right-0 bottom-0 h-4 bg-yellow -z-10" />
              </span>
            </h2>

            <div className="space-y-5 text-ink/75 font-grotesk text-[15px] leading-relaxed max-w-xl">
              <p>
                Versatile software developer with experience in{' '}
                <strong className="text-ink">full-stack development</strong>,{' '}
                <strong className="text-ink">data analysis</strong>, and{' '}
                <strong className="text-ink">AI/ML</strong> — including building
                agentic workflows and intelligent automation systems.
              </p>
              <p>
                Currently working as <strong className="text-ink">SDE1 @ NOISE</strong>{' '}
                (Gurugram), building production systems that scale — from AI-powered HR
                tools processing thousands of resumes to real-time auction platforms and
                warehouse automation replacing 4-5 manual roles.
              </p>
              <p>
                B.Tech in Electronics & Communication from{' '}
                <strong className="text-ink">VIT Chennai</strong> (CGPA: 8.63/10).
                Published IEEE researcher in machine learning for urban planning.
              </p>
            </div>

            {/* Contact links */}
            <div className="mt-7 md:mt-10 flex flex-wrap gap-3">
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
            <div className="mt-7 md:mt-10 pt-6 md:pt-8 border-t-2 border-ink">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-4">
                Certifications & Recognition
              </p>
              <div className="flex flex-wrap gap-2">
                {CERTS.map((c) => (
                  <span key={c} className="skill-tag bg-cream text-xs">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {STAT_CARDS.map((s) => (
              <div
                key={s.label}
                className={`${s.color} border-2 border-ink p-6 shadow-brutal-lg card-hover`}
              >
                <div className={`font-syne font-black text-4xl mb-2 ${s.text}`}>
                  {s.num}
                </div>
                <div className={`font-mono text-[11px] uppercase tracking-wider opacity-70 ${s.text}`}>
                  {s.label}
                </div>
              </div>
            ))}

            {/* Education card spanning 2 cols */}
            <div className="col-span-2 border-2 border-ink bg-ink text-cream p-5 shadow-brutal-lg card-hover">
              <p className="font-mono text-[10px] uppercase tracking-widest text-cream/40 mb-3">
                Education
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-syne font-black text-sm uppercase">
                    VIT Chennai
                  </p>
                  <p className="font-mono text-[11px] text-cream/60 mt-0.5">
                    B.Tech ECE · CGPA 8.63 · 2021–2025
                  </p>
                </div>
                <div className="border-t border-cream/10 pt-3">
                  <p className="font-syne font-black text-sm uppercase">
                    Scottish High International School
                  </p>
                  <p className="font-mono text-[11px] text-cream/60 mt-0.5">
                    Class 12 ISC · 93.8% · Gurugram
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
