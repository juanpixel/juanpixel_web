import { useEffect, useId, useRef, useState } from 'react'
import type { Locale } from '../data/portfolio'
import { useLocale } from '../i18n/locale-context'

const languages: { code: Locale; short: string; name: string }[] = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'es', short: 'ES', name: 'Español' },
]

function LanguageMenu() {
  const { locale, setLocale, content } = useLocale()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLLIElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const current = languages.find((lang) => lang.code === locale) ?? languages[0]

  useEffect(() => {
    if (!open) return

    const handlePointer = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const choose = (code: Locale) => {
    setLocale(code)
    setOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <li
      ref={wrapperRef}
      className={`topbar__lang${open ? ' is-open' : ''}`}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className="topbar__lang-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${content.ui.languageLabel}: ${current.name}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{current.short}</span>
        <svg className="topbar__lang-chevron" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul id={menuId} className="topbar__lang-menu" hidden={!open} aria-label={content.ui.languageLabel}>
        {languages.map((lang) => {
          const selected = lang.code === locale
          return (
            <li key={lang.code}>
              <button
                type="button"
                lang={lang.code}
                aria-current={selected ? 'true' : undefined}
                className={selected ? 'is-selected' : undefined}
                onClick={() => choose(lang.code)}
              >
                <span className="topbar__lang-name">{lang.name}</span>
                <span className="topbar__lang-code" aria-hidden="true">
                  {lang.short}
                </span>
                {selected ? (
                  <svg className="topbar__lang-check" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2.5 6.2 5 8.5l4.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="topbar__lang-check" aria-hidden="true" />
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export function Navbar() {
  const { content } = useLocale()
  const { navigation, ui } = content

  return (
    <nav className="topbar" aria-label={ui.navLabel}>
      <ul className="topbar__list">
        {navigation.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
        <LanguageMenu />
      </ul>
    </nav>
  )
}
