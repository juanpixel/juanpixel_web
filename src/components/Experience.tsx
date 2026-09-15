import { experiences } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((item) => (
          <article key={item.role} className="experience-item">
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
