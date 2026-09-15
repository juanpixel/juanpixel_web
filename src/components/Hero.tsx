import { locale, portfolioTranslations } from '../data/portfolio'

const { hero } = portfolioTranslations[locale]

export function Hero() {
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
        <div className="avatar-placeholder" aria-label="JuanPixel portrait" />
      </figure>
    </header>
  )
}
