/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts a numeric value up when it first scrolls into view.
 * Accepts display strings like "90%", "5+", "500+" and animates only the
 * numeric part, preserving whatever prefix/suffix was supplied.
 */
export default function Counter({ value, className = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()

  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = match ? parseFloat(match[2]) : null
  const suffix = match?.[3] ?? ''
  const decimals = match?.[2].includes('.') ? match[2].split('.')[1].length : 0

  const [display, setDisplay] = useState(target === null || reduce ? target : 0)

  useEffect(() => {
    if (target === null || reduce || !inView) return
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, target, duration, reduce])

  // Non-numeric values pass straight through.
  if (target === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    )
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(reduce ? target : display).toFixed(decimals)}
      {suffix}
    </span>
  )
}
