/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Parent/child pair for staggered list entrances.
 * Wrap a list in <Stagger> and each item in <StaggerItem>.
 */
export function Stagger({
  children,
  className = '',
  stagger = 0.07,
  delayChildren = 0,
  amount = 0.15,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', distance = 24 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : distance, filter: 'blur(4px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
