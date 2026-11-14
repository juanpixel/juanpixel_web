import { useLocale } from '../i18n/locale-context'

export function Education() {
  const { education, languages, ui } = useLocale().content

  return (
    <section id="formacion" className="section">
      <h2>{ui.educationTitle}</h2>

      <ul className="education-list">
        {education.map((item) => (
          <li key={item.title} className="education-card">
            <p className="education-card__title">{item.title}</p>
            <p className="tiny">{[item.institution, item.year].filter(Boolean).join(' · ')}</p>
            {item.detail ? <p className="education-card__detail">{item.detail}</p> : null}
          </li>
        ))}
      </ul>

      <div className="languages">
        <span className="clients-label">{ui.languagesLabel}</span>
        <ul className="badges">
          {languages.map((lang) => (
            <li key={lang.name} className="badge">
              {lang.name} · {lang.level}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
