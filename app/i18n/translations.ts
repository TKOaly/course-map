import { type NestedPaths } from '@/lib/typeUtils'
import { defaultLocale, locales, type Locale } from './settings'
import { en } from './translations/en'
import { fi } from './translations/fi'

export type TranslationsObject = typeof fi

export type TranslationPaths = NestedPaths<TranslationsObject>

export const translations: {
    [locale in Locale]: TranslationsObject
} = {
    fi,
    en,
}

export const translate = (locale: Locale) =>
    translations[locales.includes(locale) ? locale : defaultLocale]
