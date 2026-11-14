import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { defaultLocale, portfolioTranslations, type Locale } from '../data/portfolio'
import { LocaleContext } from './locale-context'

const STORAGE_KEY = 'juanpixel-locale'

const isLocale = (value: string | null): value is Locale => value === 'en' || value === 'es'

function getInitialLocale(): Locale {
  // ?lang=es en la URL tiene prioridad (enlaces directos y generación del PDF)
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(fromUrl)) return fromUrl

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // localStorage no disponible: seguimos con el idioma del navegador
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) {
    return 'es'
  }
  return defaultLocale
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignorar si no se puede guardar
    }
  }, [locale])

  const toggleLocale = useCallback(() => {
    setLocale((current) => (current === 'en' ? 'es' : 'en'))
  }, [])

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, content: portfolioTranslations[locale] }),
    [locale, toggleLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
