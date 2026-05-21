const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

const CONNECT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/shubhamsharma2003' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shubhamsharma2003' },
  { label: 'Email', href: 'mailto:shubham8186@gmail.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream border-t-2 border-ink">
      {/* Top strip */}
      <div className="border-b border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-yellow border-2 border-cream flex items-center justify-center shadow-brutal-yellow">
                  <span className="font-syne font-black text-ink text-xl">SS</span>
                </div>
                <div>
                  <p className="font-syne font-black text-base uppercase tracking-tight">
                    Shubham Sharma
                  </p>
                  <p className="font-mono text-[10px] text-cream/40 uppercase tracking-widest">
                    SDE1 @ NOISE · New Delhi
                  </p>
                </div>
              </div>
              <p className="font-grotesk text-sm text-cream/50 leading-relaxed max-w-xs">
                Full-Stack Engineer & AI/ML Developer building production
                systems that scale. Always shipping.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-cream/30 mb-5">
                Navigate
              </h4>
              <div className="space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block font-grotesk text-sm text-cream/60 hover:text-yellow transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-cream/30 mb-5">
                Connect
              </h4>
              <div className="space-y-2.5">
                {CONNECT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block font-grotesk text-sm text-cream/60 hover:text-yellow transition-colors duration-150"
                  >
                    {link.label} ↗
                  </a>
                ))}
                <a
                  href="tel:+918700087743"
                  className="block font-mono text-xs text-cream/40 hover:text-yellow transition-colors duration-150 mt-4"
                >
                  +91-8700087743
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-cream/30 uppercase tracking-widest">
            © {year} Shubham Sharma · Built with React + Vite
          </p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-cream/20 uppercase tracking-widest">
              Neo Brutalism Design
            </span>
            <div className="flex gap-1">
              {['bg-yellow', 'bg-pink', 'bg-blue', 'bg-green'].map((c) => (
                <div key={c} className={`w-3 h-3 ${c} border border-cream/20`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
