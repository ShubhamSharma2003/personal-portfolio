const EXPERIENCES = [
  {
    company: 'NOISE',
    companyFull: 'boAt Lifestyle / NOISE',
    role: 'Software Developer Engineer 1',
    period: 'Aug 2025 — Present',
    location: 'Gurugram, Haryana',
    badge: 'CURRENT',
    badgeBg: 'bg-green',
    headerBg: 'bg-yellow',
    highlights: [
      {
        title: 'CI/CD Automation',
        desc: 'Streamlined pipeline using N8N and agentic AI workflows — faster deployments, minimal manual intervention.',
      },
      {
        title: 'AI HR Management System',
        desc: 'Screens thousands of resumes in minutes using job description generation and keyword/requirement ranking.',
      },
      {
        title: 'Real-Time Auction System',
        desc: 'Live bidding with integrated insurance product selling for seamless transactional workflows.',
      },
      {
        title: 'Warehouse Management System',
        desc: 'Integrates Amazon, Flipkart & B2B partners — automated PO fetching, pricing validation, OMS. Replaced 4-5 manual roles.',
      },
      {
        title: 'AI WhatsApp & Instagram Agents',
        desc: 'Customer query automation via DMs and comments — significantly improved response time and reduced support workload.',
      },
      {
        title: 'GoNoise AI Chatbot',
        desc: 'Product recommendation chatbot interpreting product data to guide customers based on preferences.',
      },
      {
        title: 'Noise Junior E-Commerce',
        desc: 'Leading development with engaging UI/UX and scalable backend architecture.',
      },
    ],
    tags: ['React 18', 'Next.js', 'Node.js', 'N8N', 'AI/ML', 'Docker', 'Kubernetes', 'Jenkins'],
  },
  {
    company: 'NOISE',
    companyFull: 'boAt Lifestyle / NOISE',
    role: 'Full-Stack Intern',
    period: 'Feb 2025 — Jul 2025',
    location: 'Gurugram, Haryana',
    badge: 'INTERNSHIP',
    badgeBg: 'bg-blue',
    headerBg: 'bg-green',
    highlights: [
      {
        title: 'Bose India E-Commerce',
        desc: "First-ever dynamic e-commerce site for Bose India, enabling direct-to-consumer product distribution.",
      },
      {
        title: 'LunaZone Website Redesign',
        desc: 'Redesigned international website for LUNA Ring Gen 2 launch with immersive animations and modern aesthetics.',
      },
      {
        title: 'GoNoise React Native App',
        desc: 'Cross-platform mobile app with full e-commerce functionality — payment, checkout, wishlist.',
      },
      {
        title: '500+ Tests Written',
        desc: 'Integrated Jest, React Testing Library & Playwright testing infrastructure across the codebase.',
      },
      {
        title: 'Noise-Fit Watch-Face System',
        desc: 'Watch-face component managing 1500+ designs. Optimized API with pagination → 40% reduced load time, 50% faster updates.',
      },
    ],
    tags: ['React', 'React Native', 'Jest', 'Playwright', 'MySQL', 'Redux', 'TypeScript'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-cream border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="section-label">003 — Experience</span>
        </div>

        <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-16">
          WHERE I'VE
          <br />
          <span className="relative inline-block">
            WORKED
            <span className="absolute left-0 right-0 bottom-0 h-4 bg-pink -z-10" />
          </span>
        </h2>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="border-2 border-ink shadow-brutal-xl overflow-hidden card-hover"
            >
              {/* Card header */}
              <div className={`${exp.headerBg} border-b-2 border-ink p-6 flex flex-wrap items-start justify-between gap-4`}>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-syne font-black text-2xl md:text-3xl text-ink uppercase tracking-tight">
                      {exp.company}
                    </h3>
                    <span
                      className={`${exp.badgeBg} font-mono text-[10px] border-2 border-ink text-ink px-2 py-0.5 uppercase tracking-widest`}
                    >
                      {exp.badge}
                    </span>
                  </div>
                  <p className="font-grotesk font-semibold text-ink/80 text-sm">{exp.role}</p>
                  <p className="font-mono text-[11px] text-ink/50 mt-0.5">{exp.companyFull}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm font-bold text-ink">{exp.period}</p>
                  <p className="font-mono text-xs text-ink/60 mt-1">{exp.location}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="bg-cream p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {exp.highlights.map((h, j) => (
                    <div key={j} className="border border-ink/20 p-3 hover:border-ink transition-colors duration-150">
                      <p className="font-grotesk font-bold text-xs text-ink uppercase tracking-wide mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-ink rounded-full shrink-0" />
                        {h.title}
                      </p>
                      <p className="font-grotesk text-xs text-ink/60 leading-relaxed">{h.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-ink/10 flex flex-wrap gap-2">
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
