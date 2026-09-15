import { locale, portfolioTranslations } from '../data/portfolio'

const { navigation } = portfolioTranslations[locale]

export function Navbar() {
  return (
    <nav className="topbar" aria-label="Main navigation">
      <ul className="topbar__list">
        <li className="topbar__icon">
          <a href="#home" aria-label="Home">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 7.57 10.08 9.65l.96-.96L8 5.66 4.96 8.69l.96.96L8 7.57Zm0 7.63c-.99 0-1.92-.19-2.79-.56A8.56 8.56 0 0 1 2.91 13.09 8.7 8.7 0 0 1 1.36 10.79 8.91 8.91 0 0 1 .8 8c0-1 .19-1.93.56-2.8A8.7 8.7 0 0 1 2.91 2.91 8.7 8.7 0 0 1 5.21 1.36 9 9 0 0 1 8 .8c1 0 1.93.19 2.8.56A8.7 8.7 0 0 1 13.09 2.91 8.7 8.7 0 0 1 14.64 5.2a9 9 0 0 1 .56 2.8c0 1-.19 1.93-.56 2.8a8.7 8.7 0 0 1-1.55 2.29 8.7 8.7 0 0 1-2.29 1.55c-.87.36-1.81.55-2.8.55Z" />
            </svg>
          </a>
        </li>
        {navigation.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
