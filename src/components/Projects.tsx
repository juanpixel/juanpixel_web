import { projects } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="proyectos" className="section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
