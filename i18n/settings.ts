export enum Locale {
    FI = 'fi',
    EN = 'en',
}

export const localeCookie = 'courses-lang'
export const locales = Object.values(Locale)
export const defaultLocale = Locale.FI

const runsOnServerSide = typeof window === 'undefined'
const preload = runsOnServerSide ? locales : []
