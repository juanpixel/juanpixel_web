import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="proyectos" className="section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-card__info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="actions actions--project">
                <a
                  className="btn btn--secondary"
                  href={project.preview}
                  target="_blank"
                  rel="noreferrer"
                >
                  Preview
                </a>
                <div className="icon-actions">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <span>GH</span>
                  </a>
                  {project.behance ? (
                    <a href={project.behance} target="_blank" rel="noreferrer" aria-label="Behance">
                      <span>BE</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
