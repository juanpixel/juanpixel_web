import { ButtonLink } from './ui/Button'

type ProjectCardProps = {
  title: string
  description: string
  preview: string
  github: string
  behance?: string
  image: string
  previewLabel: string
}

export function ProjectCard({ title, description, preview, github, behance, image, previewLabel }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img src={image} alt={title} />
      <div className="project-card__info">
        <div className="project-card__header">
          <h3>{title}</h3>
        </div>
        <p>{description}</p>

        {/* En el PDF los botones no sirven: se muestran las URLs como texto */}
        {preview !== '#' ? (
          <p className="print-only project-card__url">
            <a href={preview}>{preview.replace(/^https?:\/\//, '')}</a>
          </p>
        ) : null}

        <div className="actions actions--project" data-print="hide">
          <ButtonLink className="btn--secondary" href={preview} target="_blank" rel="noreferrer" variant="secondary">
            {previewLabel}
          </ButtonLink>

          <div className="icon-actions">
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <span>GH</span>
            </a>
            {behance ? (
              <a href={behance} target="_blank" rel="noreferrer" aria-label="Behance">
                <span>BE</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
