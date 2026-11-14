import { useEffect, useState } from 'react'

/**
 * Devuelve true cuando del elemento `selector` queda visible menos de
 * `visibleRatio` (por debajo de la barra de navegación). Usa IntersectionObserver,
 * así que no hace trabajo en cada evento de scroll.
 */
export function useScrolledPast(selector: string, visibleRatio = 0.3, topOffset = 80) {
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const target = document.querySelector(selector)
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolledPast(entry.intersectionRatio < visibleRatio),
      {
        rootMargin: `-${topOffset}px 0px 0px 0px`,
        threshold: [0, visibleRatio, 1],
      },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [selector, visibleRatio, topOffset])

  return scrolledPast
}
