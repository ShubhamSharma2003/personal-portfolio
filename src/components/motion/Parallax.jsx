/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Moves its children against the scroll direction to fake depth.
 *
 * `speed` is the total travel in pixels across the element's full pass through
 * the viewport — negative rises faster than the page (feels closer), positive
 * lags behind it (feels further away). Values beyond ~120 start to read as a
 * glitch rather than depth.
 *
 * The offset is spring-smoothed so a trackpad fling doesn't snap the layer.
 */
export default function Parallax({
  children,
  speed = -60,
  scaleTo = null,
  fade = false,
  className = '',
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 26,
    restDelta: 0.001,
  })
  const y = useTransform(smooth, [0, 1], [-speed, speed])
  const scale = useTransform(smooth, [0, 0.5, 1], [1, scaleTo ?? 1, 1])
  // Ease in over the first third, hold, then drop away on exit.
  const opacity = useTransform(smooth, [0, 0.22, 0.78, 1], [0.45, 1, 1, 0.45])

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        ...(scaleTo ? { scale } : {}),
        ...(fade ? { opacity } : {}),
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  )
}
