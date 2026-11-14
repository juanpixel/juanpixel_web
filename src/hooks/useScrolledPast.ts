import { useEffect, useState } from 'react'

/**
 * Devuelve true cuando del elemento `selector` queda visible menos de
 * `visibleRatio` (contando solo el área debajo de la barra, `topOffset`).
 *
 * Busca el elemento en cada revisión en lugar de guardarlo una sola vez: si el
 * elemento se reemplaza (recarga en caliente, re-montaje del componente) el
 * cálculo sigue siendo correcto. Las revisiones se agrupan a una por frame.
 */
export function useScrolledPast(selector: string, visibleRatio = 0.3, topOffset = 80) {
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    let frame = 0

    const check = () => {
      frame = 0
      const target = document.querySelector(selector)
      if (!target) {
        setScrolledPast(false)
        return
      }
      const rect = target.getBoundingClientRect()
      if (rect.height === 0) {
        setScrolledPast(false)
        return
      }
      const visibleTop = Math.max(rect.top, topOffset)
      const visibleBottom = Math.min(rect.bottom, window.innerHeight)
      const visible = Math.max(0, visibleBottom - visibleTop)
      setScrolledPast(visible / rect.height < visibleRatio)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }

    check()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [selector, visibleRatio, topOffset])

  return scrolledPast
}
