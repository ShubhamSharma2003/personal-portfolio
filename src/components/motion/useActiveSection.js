import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently dominating the viewport.
 * Picks the entry with the largest intersection ratio so that a short section
 * scrolling past a tall one does not steal the highlight.
 */
export default function useActiveSection(ids, { rootMargin = '-20% 0px -35% 0px' } = {}) {
  const [active, setActive] = useState(ids[0])

  // Joined so the effect depends on the ids' values, not the array identity.
  const key = ids.join(',')

  useEffect(() => {
    const elements = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let best = null
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        })

        if (best) setActive(best)
      },
      { rootMargin, threshold: [0, 0.15, 0.3, 0.5, 0.75, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key, rootMargin])

  return active
}
