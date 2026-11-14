import { useLocale } from '../i18n/locale-context'
import portrait from '../assets/juanpixel.png'

export function Hero() {
  const { hero, ui } = useLocale().content

  return (
    <header id="home" className="hero">
      <aside className="hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.name}</h1>
        <h3>{hero.role}</h3>
        <div className="actions">
          <a className="btn btn--primary" href="#about">{hero.cta}</a>
        </div>
      </aside>

      <figure className="hero__figure">
        <div className="avatar">
          <div className="avatar__card" aria-hidden="true" />
          <img className="avatar__photo" src={portrait} alt={ui.portraitLabel} width={324} height={412} />
        </div>
      </figure>
    </header>
  )
}
