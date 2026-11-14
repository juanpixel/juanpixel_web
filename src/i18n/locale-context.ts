import { createContext, useContext } from 'react'
import { defaultLocale, portfolioTranslations, type Locale } from '../data/portfolio'

export type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  content: (typeof portfolioTranslations)[Locale]
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
  toggleLocale: () => {},
  content: portfolioTranslations[defaultLocale],
})

export function useLocale() {
  return useContext(LocaleContext)
}
