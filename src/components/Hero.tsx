import { useRef, type PointerEvent } from 'react'
import { useLocale } from '../i18n/locale-context'
import portrait from '../assets/juanpixel.png'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Hero() {
  const { hero, ui } = useLocale().content
  const avatarRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)

  // Parallax sutil: se guardan en CSS vars (--px, --py entre -1 y 1) la posición
  // del puntero relativa al hero. Se escribe directo en el DOM (sin re-render)
  // y como máximo una vez por frame.
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || prefersReducedMotion()) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1

    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(() => {
      avatarRef.current?.style.setProperty('--px', x.toFixed(3))
      avatarRef.current?.style.setProperty('--py', y.toFixed(3))
    })
  }

  const handlePointerLeave = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    avatarRef.current?.style.setProperty('--px', '0')
    avatarRef.current?.style.setProperty('--py', '0')
  }

  return (
    <header id="home" className="hero" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <aside className="hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.name}</h1>
        <h3>{hero.role}</h3>
        <div className="actions">
          <a className="btn btn--primary" href="#about">{hero.cta}</a>
        </div>
      </aside>

      <figure className="hero__figure">
        <div ref={avatarRef} className="avatar">
          <div className="radar" aria-hidden="true">
            <span className="radar__sweep" />
            <span className="radar__ring" />
            <span className="radar__ring" />
            <span className="radar__ring" />
          </div>
          <div className="avatar__card" aria-hidden="true" />
          <img className="avatar__photo" src={portrait} alt={ui.portraitLabel} width={324} height={412} />
        </div>
      </figure>
    </header>
  )
}
