/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

const SPRING = { stiffness: 260, damping: 20, mass: 0.5 }

/**
 * Anchor/button that drifts toward the cursor while hovered, then springs back.
 * `pull` caps the maximum offset in pixels.
 */
export default function MagneticButton({ children, className = '', href, pull = 8, ...props }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, SPRING)
  const y = useSpring(my, SPRING)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    mx.set(Math.max(-1, Math.min(1, dx)) * pull)
    my.set(Math.max(-1, Math.min(1, dy)) * pull)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const Tag = href ? motion.a : motion.button

  return (
    <Tag
      ref={ref}
      href={href}
      className={className}
      style={reduce ? undefined : { x, y }}
      onPointerMove={reduce ? undefined : handleMove}
      onPointerLeave={reduce ? undefined : handleLeave}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </Tag>
  )
}
