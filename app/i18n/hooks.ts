'use client'

import { useParams } from 'next/navigation'
import { defaultLocale, type Locale, locales } from './settings'
import { translations } from './translations'

/**
 * Hook for getting the translation object for the current locale.
 * @returns The translation object for the current locale or the default locale if the current locale is not supported.
 */
export const useTranslate = () => {
    const { locale } = useParams<{ locale: Locale }>()

    return translations[locales.includes(locale) ? locale : defaultLocale]
}

export const useTranslateObj = () => {
    const { locale } = useParams<{ locale: Locale }>()

    return (obj: Record<string, string>) => {
        return (
            obj[
                locales.includes(locale)
                    ? locale
                    : (Object.keys(obj)[0] ?? defaultLocale)
            ] ?? null
        )
    }
}
