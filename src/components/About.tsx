import { locale, portfolioTranslations } from '../data/portfolio'

const { about } = portfolioTranslations[locale]

export function About() {
  return (
    <section id="about" className="section about">
      <h2>{about.title}</h2>
      <h3>{about.subtitle}</h3>
      <p>{about.description}</p>
    </section>
  )
}
