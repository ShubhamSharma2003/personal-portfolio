import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b-2 border-ink bg-cream/95 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-yellow border-2 border-ink flex items-center justify-center shadow-brutal group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all duration-150">
              <span className="font-syne font-black text-ink text-base leading-none">SS</span>
            </div>
            <span className="font-mono text-xs text-ink/50 hidden sm:block tracking-wider">
              shubham@sharma:~$
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest px-4 py-2 border-2 border-transparent hover:border-ink hover:bg-ink hover:text-cream transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1YJio0i5RYM7U52EWH-A0JTqDIWjMVXbN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal ml-3 !py-2 !text-xs"
            >
              Résumé ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden border-2 border-ink w-10 h-10 flex flex-col items-center justify-center gap-[5px] hover:bg-yellow transition-colors duration-150"
          >
            <span
              className={`w-5 h-0.5 bg-ink transition-all duration-200 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-ink transition-all duration-200 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-ink transition-all duration-200 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t-2 border-ink bg-cream shadow-brutal-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="block font-mono text-sm uppercase tracking-widest px-6 py-4 border-b border-ink/10 hover:bg-yellow transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1YJio0i5RYM7U52EWH-A0JTqDIWjMVXbN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-mono text-sm uppercase tracking-widest px-6 py-4 bg-ink text-cream hover:bg-yellow hover:text-ink transition-colors duration-150"
          >
            Résumé ↗
          </a>
        </div>
      )}
    </nav>
  )
}
