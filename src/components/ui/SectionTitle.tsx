type SectionTitleProps = {
  title: string
  eyebrow?: string
}

export function SectionTitle({ title, eyebrow }: SectionTitleProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  )
}
