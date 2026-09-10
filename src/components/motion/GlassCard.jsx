/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

const SPRING = { stiffness: 220, damping: 22, mass: 0.6 }

/**
 * Frosted glass surface with two optional pointer effects, both driven by
 * motion values so moving the cursor never re-renders React:
 *   tilt      — subtle 3D rotation toward the cursor
 *   spotlight — radial highlight that follows the cursor
 *
 * `surface` picks the glass recipe from index.css: 'glass' (default), 'strong'
 * for cards sitting directly over an aurora orb, or false for a bare box. It
 * lives here rather than at each call site because a caller that forgets it
 * gets a fully transparent card, which is invisible against the dark field.
 * Both `.glass` variants are @layer components, so a call site passing its own
 * `bg-*`/`border-*` utility still wins.
 */
export default function GlassCard({
  children,
  className = '',
  surface = 'glass',
  tilt = true,
  spotlight = true,
  strength = 8,
  glow = 'rgba(155,114,242,0.16)',
  as = 'div',
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const enabled = tilt && !reduce

  // -0.5 .. 0.5, relative to the card's own box
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [strength, -strength]), SPRING)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-strength, strength]), SPRING)

  // Spotlight position in percent
  const spotX = useMotionValue('50%')
  const spotY = useMotionValue('50%')
  const spotOpacity = useSpring(0, { stiffness: 180, damping: 26 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width
    const ny = (e.clientY - rect.top) / rect.height
    px.set(nx - 0.5)
    py.set(ny - 0.5)
    spotX.set(`${nx * 100}%`)
    spotY.set(`${ny * 100}%`)
  }

  const spotBackground = useTransform(
    [spotX, spotY],
    ([x, y]) => `radial-gradient(420px circle at ${x} ${y}, ${glow}, transparent 65%)`,
  )

  const handleEnter = () => spotOpacity.set(1)

  const handleLeave = () => {
    px.set(0)
    py.set(0)
    spotOpacity.set(0)
  }

  const MotionTag = motion[as] ?? motion.div
  const surfaceClass = surface === 'strong' ? 'glass-strong' : surface ? 'glass' : ''

  return (
    <MotionTag
      ref={ref}
      className={`group relative overflow-hidden ${surfaceClass} ${className}`}
      onPointerMove={enabled || spotlight ? handleMove : undefined}
      onPointerEnter={spotlight ? handleEnter : undefined}
      onPointerLeave={enabled || spotlight ? handleLeave : undefined}
      style={
        enabled
          ? {
              rotateX,
              rotateY,
              transformPerspective: 1000,
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      {spotlight && !reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{ opacity: spotOpacity, background: spotBackground }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </MotionTag>
  )
}
