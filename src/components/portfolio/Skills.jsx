const SKILL_GROUPS = [
  {
    category: 'AI & Agents',
    color: 'text-yellow',
    note: 'What I build with',
    items: [
      'LLM Integration', 'Agentic AI', 'N8N Automation', 'Prompt Engineering',
      'RAG Pipelines', 'Document AI', 'OCR Pipelines', 'Sentiment Analysis',
      'NLP / NER', 'Vector Embeddings', 'Agent Orchestration', 'Webhook Automation',
      'Function / Tool Calling', 'ReAct Loops', 'Multi-Agent Systems', 'Fine-tuning',
      'Voice AI', 'Speech-to-Text', 'Text-to-Speech', 'Real-time AI',
    ],
    hoverBg: 'hover:bg-yellow hover:border-yellow hover:text-ink',
  },
  {
    category: 'Languages',
    color: 'text-green',
    note: 'What I write in',
    items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'SQL', 'R', 'HTML/CSS', 'C'],
    hoverBg: 'hover:bg-green hover:border-green hover:text-ink',
  },
  {
    category: 'Frameworks & Runtimes',
    color: 'text-pink',
    note: 'What I build on',
    items: [
      'Next.js', 'React.js', 'Node.js', 'FastAPI', 'Express.js',
      'Redux', 'PyTorch', 'TensorFlow', 'React Native', 'Playwright',
    ],
    hoverBg: 'hover:bg-pink hover:border-pink hover:text-cream',
  },
  {
    category: 'Tools & Platforms',
    color: 'text-blue',
    note: 'What I deploy with',
    items: [
      'Docker', 'Kubernetes', 'Jenkins', 'Git/GitHub', 'PostgreSQL',
      'GraphQL', 'Shopify API', 'Instagram Graph API', 'Gmail API',
      'Postman', 'PowerBI', 'Tableau', 'ElevenLabs', 'Cartesia', 'Supabase', 'Redis',
    ],
    hoverBg: 'hover:bg-blue hover:border-blue hover:text-cream',
  },
  {
    category: 'Domain Knowledge',
    color: 'text-orange',
    note: 'What I know deeply',
    items: [
      'Full-Stack Development', 'AI Systems Design', 'Forward Deployment',
      'DevOps & CI/CD', 'Data Analysis', 'OOP', 'System Architecture',
      'API Integration', 'Testing (Jest / RTL / Playwright)', 'Linux',
      'Real-time Systems', 'Conversational AI', 'AI Evaluation & Feedback Loops',
    ],
    hoverBg: 'hover:bg-orange hover:border-orange hover:text-cream',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-ink text-cream border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] border-2 border-cream bg-cream text-ink px-3 py-1 inline-block">
            002 — Skills
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-6 md:gap-12 items-end mb-10 md:mb-16">
          <div>
            <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream">
              TECH
              <br />
              <span className="text-yellow">ARSENAL</span>
            </h2>
          </div>
          <div className="hidden lg:block text-right pb-2">
            <p className="font-mono text-xs text-cream/30 uppercase tracking-widest leading-relaxed">
              AI-first stack.
              <br />
              Full-spectrum depth.
            </p>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={group.category}>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <span className={`font-mono text-xs uppercase tracking-[0.25em] ${group.color} font-bold`}>
                    {group.category}
                  </span>
                  <span className="font-mono text-[10px] text-cream/20 ml-3 uppercase tracking-wider hidden sm:inline">
                    — {group.note}
                  </span>
                </div>
                <div className="flex-1 h-px bg-cream/10" />
                <span className="font-mono text-xs text-cream/20">{group.items.length}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono text-xs border-2 ${
                      idx === 0 ? 'border-yellow/30 text-yellow/80' : 'border-cream/20 text-cream/70'
                    } px-3 sm:px-4 py-1.5 sm:py-2 uppercase tracking-wider cursor-default transition-all duration-150 ${group.hoverBg} hover:border-transparent`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-16 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-cream/30 uppercase tracking-widest">
            Always learning · Always shipping
          </p>
          <div className="flex gap-2">
            {['bg-yellow', 'bg-green', 'bg-pink', 'bg-blue'].map((c) => (
              <div key={c} className={`w-4 h-4 ${c} border border-cream/20`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
