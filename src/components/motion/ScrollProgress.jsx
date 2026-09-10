import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'framer-motion'

/**
 * Thin gradient bar pinned to the top of the viewport, tracking page scroll.
 *
 * The bar also reacts to scroll *velocity* — it thickens and lights up while
 * the page is moving fast, then settles back to a hairline when scrolling
 * stops. Velocity is fed through a spring so a flick doesn't strobe it.
 */
export default function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  const velocity = useVelocity(scrollYProgress)
  const smoothVelocity = useSpring(velocity, { stiffness: 220, damping: 40 })
  const speed = useTransform(smoothVelocity, (v) => Math.min(Math.abs(v), 1.6))

  const height = useTransform(speed, [0, 1.6], [2, 5])
  const glow = useTransform(speed, [0, 1.6], [0, 0.85])
  const boxShadow = useTransform(glow, (g) => `0 0 18px rgba(155,114,242,${g})`)

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] origin-left bg-g-main"
      style={
        reduce ? { scaleX, height: 2 } : { scaleX, height, boxShadow, willChange: 'transform' }
      }
    />
  )
}
