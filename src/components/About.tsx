import { useLocale } from '../i18n/locale-context'

export function About() {
  const { about } = useLocale().content

  return (
    <section id="about" className="section about">
      <h2>{about.title}</h2>
      <h3>{about.subtitle}</h3>
      <p>{about.description}</p>
    </section>
  )
}
