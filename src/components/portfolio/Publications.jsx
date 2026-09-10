import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import Parallax from '../motion/Parallax'
import TextReveal from '../motion/TextReveal'
import GlassCard from '../motion/GlassCard'
import { Stagger, StaggerItem } from '../motion/Stagger'

const TAGS = ['Machine Learning', 'Traffic Prediction', 'Urban Planning', 'IEEE 2025']
const DOI = 'https://doi.org/10.1109/ICCoSD66074.2025.11348535'

export default function Publications() {
  const reduce = useReducedMotion()

  return (
    <section id="publications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 md:mb-16">
          <span className="section-label">005 — Publications</span>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left */}
          <div>
            <Parallax speed={-26}>
              <h2 className="section-heading mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                <TextReveal text="Research" className="block text-white" />
                <TextReveal
                  text="Published"
                  className="block"
                  wordClassName="gradient-text"
                  delay={0.12}
                />
              </h2>
            </Parallax>
            <Reveal delay={0.15}>
              <p className="text-white/66 mb-8 font-mono text-[12px] uppercase tracking-[0.16em]">
                IEEE International Conference 2025
              </p>
            </Reveal>
            <Stagger className="flex flex-wrap gap-2" stagger={0.07}>
              {TAGS.map((tag) => (
                <StaggerItem key={tag} distance={12}>
                  <motion.span
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            y: -3,
                            borderColor: 'rgba(240,87,142,0.45)',
                            backgroundColor: 'rgba(240,87,142,0.10)',
                          }
                    }
                    transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                    className="chip cursor-default"
                  >
                    {tag}
                  </motion.span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right — paper card */}
          <Reveal direction="left" amount={0.15}>
            <GlassCard
              className="gradient-border rounded-[1.75rem]"
              tilt={false}
              glow="rgba(240,87,142,0.16)"
            >
              {/* Oversized glyph watermark — drifts against the scroll for depth */}
              <Parallax
                speed={64}
                className="pointer-events-none absolute -right-2 -top-10 select-none"
              >
                <span
                  aria-hidden="true"
                  className="gradient-text block text-[11rem] font-bold leading-none opacity-[0.16]"
                >
                  ¶
                </span>
              </Parallax>

              <div className="relative p-6 sm:p-9">
                <p className="text-white/58 mb-4 font-mono text-[11px] uppercase tracking-[0.15em]">
                  DOI: 10.1109/ICCoSD66074.2025.11348535
                </p>

                <h3 className="mb-5 max-w-xl text-lg font-semibold leading-snug tracking-tight text-white md:text-[1.4rem]">
                  Multi-Class Traffic Flow Prediction with Machine Learning for Urban Planning
                  Applications
                </h3>

                <p className="text-white/72 text-sm leading-relaxed">
                  Yash Sarda, Shriya Sinha,{' '}
                  <strong className="text-white/92 relative font-semibold">
                    Shubham Sharma
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded bg-g-warm" />
                  </strong>
                  , Payal Saini, Shubham Garg, Ashis Tripathy.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-6">
                  <div>
                    <p className="text-white/58 font-mono text-[11px] uppercase tracking-[0.15em]">
                      Venue
                    </p>
                    <p className="text-white/92 mt-1 text-sm font-semibold">
                      ICCoSD 2025 · Ranchi, India
                    </p>
                  </div>
                  <motion.a
                    href={DOI}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary !py-2.5 !text-[13px]"
                  >
                    View Paper ↗
                  </motion.a>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
