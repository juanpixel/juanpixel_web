import { useLocale } from '../i18n/locale-context'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const { projects, ui } = useLocale().content

  return (
    <section id="proyectos" className="section">
      <h2>{ui.projectsTitle}</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} previewLabel={ui.previewLabel} />
        ))}
      </div>
    </section>
  )
}
