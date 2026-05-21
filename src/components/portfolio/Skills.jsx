const SKILL_GROUPS = [
  {
    category: 'Languages',
    color: 'text-yellow',
    items: ['C++', 'C', 'Java', 'Python', 'JavaScript', 'TypeScript', 'R', 'HTML/CSS', 'SQL'],
    hoverBg: 'hover:bg-yellow hover:border-yellow hover:text-ink',
  },
  {
    category: 'Frameworks',
    color: 'text-green',
    items: ['Next.js', 'React.js', 'Node.js', 'Redux', 'Express.js', 'FastAPI', 'PyTorch', 'TensorFlow', 'React Native'],
    hoverBg: 'hover:bg-green hover:border-green hover:text-ink',
  },
  {
    category: 'Tools & Platforms',
    color: 'text-pink',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Git/GitHub', 'Postman', 'GraphQL', 'Shopify', 'PowerBI', 'Tableau', 'N8N'],
    hoverBg: 'hover:bg-pink hover:border-pink hover:text-cream',
  },
  {
    category: 'Knowledge',
    color: 'text-blue',
    items: ['Full Stack Dev', 'AI/ML', 'Agentic Workflows', 'DevOps', 'Data Analysis', 'EDA', 'OOP', 'Testing', 'CI/CD', 'Linux', 'Data Visualization', 'Pandas / NumPy'],
    hoverBg: 'hover:bg-blue hover:border-blue hover:text-cream',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-ink text-cream border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] border-2 border-cream bg-cream text-ink px-3 py-1 inline-block">
            002 — Skills
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start mb-16">
          <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl text-cream">
            TECH
            <br />
            <span className="text-yellow">ARSENAL</span>
          </h2>
          <div className="hidden lg:block text-right">
            <p className="font-mono text-xs text-cream/30 uppercase tracking-widest leading-relaxed">
              Hover to highlight
              <br />
              each technology
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-4 mb-5">
                <span className={`font-mono text-xs uppercase tracking-[0.25em] ${group.color} font-bold`}>
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-cream/10" />
                <span className="font-mono text-xs text-cream/20">{group.items.length}</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono text-xs border-2 border-cream/20 text-cream/70 px-4 py-2 uppercase tracking-wider cursor-default transition-all duration-150 ${group.hoverBg} hover:border-transparent hover:shadow-brutal-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative row */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-cream/30 uppercase tracking-widest">
            Always learning · Always building
          </p>
          <div className="flex gap-2">
            {['yellow', 'green', 'pink', 'blue'].map((c) => (
              <div key={c} className={`w-4 h-4 border border-cream/20 bg-${c}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
