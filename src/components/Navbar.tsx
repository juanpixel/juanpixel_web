import { useLayoutEffect, useRef } from 'react'
import type { Locale } from '../data/portfolio'
import { useLocale } from '../i18n/locale-context'
import { useScrolledPast } from '../hooks/useScrolledPast'
import { Dropdown } from './ui/Dropdown'

const languages: { code: Locale; short: string; name: string }[] = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'es', short: 'ES', name: 'Español' },
]

function LanguageMenu() {
  const { locale, setLocale, content } = useLocale()
  const current = languages.find((lang) => lang.code === locale) ?? languages[0]

  return (
    <li className="topbar__lang">
      <Dropdown
        align="right"
        trigger={<span aria-hidden="true">{current.short}</span>}
        triggerLabel={`${content.ui.languageLabel}: ${current.name}`}
        menuLabel={content.ui.languageLabel}
        items={languages.map((lang) => ({
          id: lang.code,
          label: lang.name,
          badge: lang.short,
          lang: lang.code,
          selected: lang.code === locale,
          onSelect: () => setLocale(lang.code),
        }))}
      />
    </li>
  )
}

// Padding horizontal de la píldora (estado A) a cada lado de la lista de enlaces.
const PILL_PADDING = 12

export function Navbar() {
  const { content } = useLocale()
  const { navigation, ui, hero } = content
  const docked = useScrolledPast('#home', 0.3)
  const barRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  // El ancho "auto" no se puede animar, así que medimos la lista de enlaces y
  // lo guardamos en --pill-w. La animación va de ese ancho al 100%.
  useLayoutEffect(() => {
    const bar = barRef.current
    const list = listRef.current
    if (!bar || !list) return

    const update = () => {
      bar.style.setProperty('--pill-w', `${list.offsetWidth + PILL_PADDING * 2}px`)
    }
    update()

    const observer = new ResizeObserver(update)
    observer.observe(list)
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`topbar${docked ? ' topbar--docked' : ''}`} aria-label={ui.navLabel} data-print="hide">
      <div ref={barRef} className="topbar__bar">
        <a
          className="topbar__logo"
          href="#home"
          tabIndex={docked ? undefined : -1}
          aria-hidden={docked ? undefined : true}
        >
          {hero.name}
        </a>
        <ul ref={listRef} className="topbar__list">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <LanguageMenu />
        </ul>
      </div>
    </nav>
  )
}
