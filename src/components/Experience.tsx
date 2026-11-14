import { useLocale } from '../i18n/locale-context'

export function Experience() {
  const { experiences, ui } = useLocale().content

  return (
    <section id="experiencia" className="section">
      <h2>{ui.experienceTitle}</h2>
      <div className="experience-list">
        {experiences.map((item) => (
          <article key={item.company} className="experience-item">
            <div className="experience-item__detail" aria-hidden="true">
              <span className="circle" />
              <span className="line" />
            </div>

            <div className="experience-item__titles">
              <p>{item.role}</p>
              <p className="tiny">{item.company}</p>
              <p className="tiny">{item.period}</p>
            </div>

            <div className="experience-item__description">
              <p>{item.description}</p>

              {'clients' in item && item.clients && (
                <div className="experience-item__clients">
                  <span className="clients-label">{ui.clientsLabel}</span>
                  <p>{item.clients.join(' • ')}</p>
                </div>
              )}

              <div className="badges">
                {item.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
