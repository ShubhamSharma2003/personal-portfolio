import { useEffect, useState } from 'react'

/**
 * Subscribes to a media query. Starts `false` on the server and on the very
 * first paint, then corrects after mount — callers must render something
 * sensible for the false case rather than assuming a match.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

/** Tailwind's `md` breakpoint is 768px, so "mobile" is everything below it. */
export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)')
}
