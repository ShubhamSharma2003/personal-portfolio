/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Horizontal snap carousel used to collapse tall mobile stacks.
 *
 * Built on native scroll-snap rather than a drag library so that touch
 * momentum, trackpads, keyboard scrolling and the scrollbar all keep working
 * for free. Swiping is therefore never the *only* way to move: WCAG 2.2
 * "Dragging Movements" requires a single-pointer alternative, so prev/next
 * buttons and tappable dots drive the same scroll.
 *
 * `label` names the set for screen readers, e.g. "Projects".
 */
export default function Carousel({ children, label, className = '', slideBasis = '86%' }) {
  const slides = Array.isArray(children) ? children.filter(Boolean) : [children]
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  // Derive the active slide from scroll position; rAF-throttled so a fast
  // swipe doesn't queue a setState per scroll event.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const first = track.firstElementChild
        if (!first) return
        const step =
          first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0)
        if (!step) return
        const i = Math.round(track.scrollLeft / step)
        setActive(Math.max(0, Math.min(slides.length - 1, i)))
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [slides.length])

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current
      const target = track?.children[i]
      if (!track || !target) return
      track.scrollTo({
        left: target.offsetLeft - track.offsetLeft,
        behavior: reduce ? 'auto' : 'smooth',
      })
    },
    [reduce],
  )

  const atStart = active === 0
  const atEnd = active === slides.length - 1

  return (
    <div className={className} role="group" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={trackRef}
        // overscroll-x-contain stops a horizontal swipe from turning into a
        // browser back-gesture or pull-to-refresh once the track hits its end.
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-0 shrink-0 snap-center"
            style={{ flexBasis: slideBasis }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Controls. Buttons are 44px so they clear the mobile touch-target
          minimum, and the dots sit in their own 44px-tall row. */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={atStart}
            aria-label="Previous slide"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-opacity disabled:opacity-30"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={atEnd}
            aria-label="Next slide"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-opacity disabled:opacity-30"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="flex h-11 items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className="flex h-11 w-4 items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all ${
                  i === active ? 'w-5 bg-g-main' : 'w-1.5 bg-white/25'
                }`}
              />
            </button>
          ))}
        </div>

        <p className="text-white/58 shrink-0 font-mono text-[11px] tabular-nums">
          {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </p>
      </div>

      {/* Position announced politely so a screen reader follows swipes too. */}
      <p className="sr-only" aria-live="polite">
        Slide {active + 1} of {slides.length}
      </p>
    </div>
  )
}
