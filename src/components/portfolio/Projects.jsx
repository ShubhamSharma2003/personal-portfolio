import algoImg from '../../assets/images/AlgoVisual.png'
import intelliImg from '../../assets/images/intellisummar.png'
import trafficImg from '../../assets/images/traffic.png'
import todoImg from '../../assets/images/todo.png'

const PROJECTS = [
  {
    num: '01',
    title: 'Unisel Realty Platform',
    label: 'Freelance',
    description:
      'High-performance dynamic property marketplace. SEO-optimized with JSON-LD structured data for 100% indexability by search engines and AI crawlers/LLMs.',
    tech: ['Next.js', 'Sanity CMS', 'MongoDB', 'TypeScript'],
    links: { code: 'https://github.com/shubhamsharma2003' },
    accent: 'bg-yellow',
    image: null,
    wide: true,
  },
  {
    num: '02',
    title: 'Multilingual Language Recognition',
    label: 'ML / NLP',
    description:
      '98% accuracy language classifier (XLM-RoBERTa) trained on 10 languages across 2,175 samples. Avg precision, recall & F1-score: 0.98.',
    tech: ['Python', 'XLM-RoBERTa', 'PyTorch', 'Transformers', 'Hugging Face'],
    links: { code: 'https://github.com/shubhamsharma2003' },
    accent: 'bg-pink',
    image: null,
    wide: false,
  },
  {
    num: '03',
    title: 'Land Cover Segmentation',
    label: 'Deep Learning',
    description:
      'Semantic segmentation via U-Net with transfer learning & CUDA. Dataset augmented to 24,000 images via patchification with custom loss functions.',
    tech: ['Python', 'U-NET', 'PyTorch', 'CUDA', 'OpenCV'],
    links: { code: 'https://github.com/shubhamsharma2003' },
    accent: 'bg-blue',
    image: trafficImg,
    wide: false,
  },
  {
    num: '04',
    title: 'Algorithm Visualizer',
    label: 'Web App',
    description:
      'Real-time interactive visualization of sorting (Bubble, Merge, Quick, Heap) and searching algorithms with live complexity analysis.',
    tech: ['React.js', 'JavaScript', 'CSS Animations', 'Vite'],
    links: {
      code: 'https://github.com/shubhamsharma2003/Algorithm-Visualizer',
    },
    accent: 'bg-green',
    image: algoImg,
    wide: false,
  },
  {
    num: '05',
    title: 'IntelliSummar',
    label: 'AI Tool',
    description:
      'AI-powered article summarizer using GPT-4 API. Paste any URL, get a clean structured summary with key points extracted.',
    tech: ['React.js', 'Redux Toolkit', 'OpenAI API', 'Tailwind CSS'],
    links: {
      code: 'https://github.com/shubhamsharma2003/Ai-Article-Summarizer',
    },
    accent: 'bg-orange',
    image: intelliImg,
    wide: false,
  },
  {
    num: '06',
    title: 'Full-Stack To-Do App',
    label: 'Full Stack',
    description:
      'CRUD application with authentication, real-time updates, and persistent storage. Demonstrates full-stack proficiency end-to-end.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: { code: 'https://github.com/shubhamsharma2003' },
    accent: 'bg-purple',
    image: todoImg,
    wide: false,
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
              From AI/ML research to freelance production work.
              <br />
              Real systems. Real scale.
            </p>
          </div>
        </div>

        {/* First project — wide featured card */}
        <div className="mb-4">
          <div className="border-2 border-ink shadow-brutal-xl card-hover flex flex-col sm:flex-row overflow-hidden group">
            <div className={`${PROJECTS[0].accent} border-b-2 sm:border-b-0 sm:border-r-2 border-ink p-4 sm:p-8 sm:w-16 flex sm:flex-col items-center justify-between sm:justify-start gap-4`}>
              <span className="font-syne font-black text-4xl text-ink/20">
                {PROJECTS[0].num}
              </span>
              <span className="font-mono text-[10px] border-2 border-ink bg-ink text-cream px-2 py-0.5 uppercase tracking-wider whitespace-nowrap">
                {PROJECTS[0].label}
              </span>
            </div>
            <div className="flex-1 p-5 sm:p-8">
              <h3 className="font-syne font-black text-xl sm:text-2xl md:text-3xl uppercase mb-3 md:mb-4 leading-tight">
                {PROJECTS[0].title}
              </h3>
              <p className="font-grotesk text-sm text-ink/70 leading-relaxed mb-4 md:mb-6 max-w-2xl">
                {PROJECTS[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {PROJECTS[0].tech.map((t) => (
                  <span key={t} className="skill-tag !text-[11px]">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={PROJECTS[0].links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal !text-xs !py-2"
                >
                  View Code ↗
                </a>
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
              <div className={`${proj.accent} border-b-2 border-ink p-4 flex items-center justify-between`}>
                <span className="font-syne font-black text-4xl text-ink/15">{proj.num}</span>
                <span className="font-mono text-[10px] border-2 border-ink bg-ink text-cream px-2 py-0.5 uppercase tracking-wider">
                  {proj.label}
                </span>
              </div>

              {/* Image */}
              {proj.image && (
                <div className="border-b-2 border-ink overflow-hidden h-32">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 bg-cream">
                <h3 className="font-syne font-black text-lg uppercase mb-3 leading-tight">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
