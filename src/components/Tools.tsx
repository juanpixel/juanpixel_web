import { locale, portfolioTranslations } from '../data/portfolio'

const { tools } = portfolioTranslations[locale]

export function Tools() {
  return (
    <section id="tools" className="section">
      <h2>Tools</h2>
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
