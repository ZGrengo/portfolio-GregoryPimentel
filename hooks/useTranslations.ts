import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/data/translations"

export function useTranslations() {
  const { language } = useLanguage()
  const t = translations[language]

  const translate = (key: string, params?: Record<string, string>) => {
    const keys = key.split(".")
    let value: any = t

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    if (typeof value === "string" && params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] || match
      })
    }

    return value
  }

  return { t, translate, language }
}

