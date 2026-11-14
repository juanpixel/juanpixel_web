import { useLocale } from '../i18n/locale-context'

export function Tools() {
  const { tools, ui } = useLocale().content

  return (
    <section id="tools" className="section">
      <h2>{ui.toolsTitle}</h2>
      <div className="tools-grid">
        {tools.map((tool) => (
          <figure key={tool} className="tool-card">
            <span className="tool-card__symbol">{tool.slice(0, 2).toUpperCase()}</span>
            <p>{tool}</p>
          </figure>
        ))}
      </div>
    </section>
  )
}
