import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Fixed field of blurred gradient orbs behind all content.
 *
 * Blur radii are capped near 48px deliberately. These orbs carry a scroll-linked
 * `y`, and a blur wider than ~50px stops being reused as a cached layer — Chrome
 * re-runs the Gaussian every frame. Measured under a 4x CPU throttle: 110px cost
 * 38ms/frame, 70px 25ms, 48px 16.6ms (a clean 60fps) with no visible difference,
 * because the gradients already fade to transparent at 68%.
 * Sits on its own compositor layer and only ever moves via transform, so it
 * never triggers layout. Orbs are hidden below `md` where blur is expensive
 * and a static gradient reads just as well.
 */
export default function AuroraBackground() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const drift = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 30,
    restDelta: 0.001,
  })
  const y1 = useTransform(drift, [0, 1], ['0%', '38%'])
  const y2 = useTransform(drift, [0, 1], ['0%', '-30%'])
  const y3 = useTransform(drift, [0, 1], ['0%', '22%'])
  const hueShift = useTransform(drift, [0, 0.5, 1], [0, 24, -14])
  const rotate = useTransform(hueShift, (v) => v)

  return (
    <div
      aria-hidden="true"
      className="noise-overlay pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void"
    >
      {/* Static base wash — the only background layer on small screens. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 15% 0%, rgba(78,140,255,0.20) 0%, transparent 55%), radial-gradient(110% 70% at 85% 20%, rgba(155,114,242,0.18) 0%, transparent 55%), radial-gradient(120% 90% at 50% 100%, rgba(240,87,142,0.14) 0%, transparent 60%)',
        }}
      />

      {/* Drifting orbs — desktop only. */}
      <div className="hidden md:block">
        <motion.div
          className="absolute -left-40 top-[-10%] h-[42rem] w-[42rem] animate-drift-slow rounded-full"
          style={{
            y: reduce ? 0 : y1,
            rotate: reduce ? 0 : rotate,
            background: 'radial-gradient(circle, rgba(78,140,255,0.42) 0%, transparent 68%)',
            filter: 'blur(48px)',
            willChange: 'transform',
          }}
        />
        <motion.div
          className="absolute -right-52 top-[18%] h-[46rem] w-[46rem] animate-drift-slower rounded-full"
          style={{
            y: reduce ? 0 : y2,
            background: 'radial-gradient(circle, rgba(155,114,242,0.40) 0%, transparent 68%)',
            filter: 'blur(48px)',
            willChange: 'transform',
          }}
        />
        <motion.div
          className="absolute left-[22%] top-[52%] h-[38rem] w-[38rem] animate-drift-slow rounded-full"
          style={{
            y: reduce ? 0 : y3,
            background: 'radial-gradient(circle, rgba(240,87,142,0.34) 0%, transparent 68%)',
            filter: 'blur(46px)',
            willChange: 'transform',
          }}
        />
        <motion.div
          className="absolute bottom-[-12%] right-[8%] h-[34rem] w-[34rem] animate-drift-slower rounded-full"
          style={{
            y: reduce ? 0 : y1,
            background: 'radial-gradient(circle, rgba(79,216,232,0.26) 0%, transparent 68%)',
            filter: 'blur(44px)',
            willChange: 'transform',
          }}
        />
        <motion.div
          className="absolute bottom-[8%] left-[-8%] h-[28rem] w-[28rem] animate-drift-slow rounded-full"
          style={{
            y: reduce ? 0 : y2,
            background: 'radial-gradient(circle, rgba(255,184,107,0.20) 0%, transparent 68%)',
            filter: 'blur(42px)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Faint structural grid to give the dark field some scale. */}
      <div className="grid-lines absolute inset-0 opacity-60" />

      {/* Vignette keeps the edges from glowing too hot. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 50%, transparent 40%, rgba(8,8,12,0.75) 100%)',
        }}
      />
    </div>
  )
}
