/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Splits `text` on whitespace and reveals it word by word with a blur lift.
 * Words keep their own <span> so line-wrapping still behaves normally.
 *
 * Pass a `background-clip: text` gradient (e.g. `gradient-text`) through
 * `wordClassName`, not `className` — the word spans are inline-block, and a
 * parent's text-clipped background never reaches glyphs inside an atomic inline.
 */
export default function TextReveal({
  text,
  className = '',
  wordClassName = '',
  stagger = 0.045,
  delay = 0,
  as = 'span',
}) {
  const reduce = useReducedMotion()
  const words = String(text).split(' ')
  const MotionTag = motion[as] ?? motion.span

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={{
              hidden: {
                opacity: 0,
                y: reduce ? 0 : '0.6em',
                filter: reduce ? 'blur(0px)' : 'blur(8px)',
              },
              visible: {
                opacity: 1,
                y: '0em',
                filter: 'blur(0px)',
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  )
}
