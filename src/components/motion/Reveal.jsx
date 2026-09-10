/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion'

const OFFSETS = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Fades + slides its children in the first time they scroll into view.
 * Collapses to a plain opacity fade when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  amount = 0.25,
  className = '',
  as = 'div',
}) {
  const reduce = useReducedMotion()
  const offset = reduce ? OFFSETS.none : OFFSETS[direction] ?? OFFSETS.up
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
