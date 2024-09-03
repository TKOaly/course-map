import { defaultLocale, localeCookie, locales } from '@/app/i18n/settings'
import acceptLanguage from 'accept-language'
import { type NextRequest, NextResponse } from 'next/server'

acceptLanguage.languages(locales.map((locale) => locale))

export const middleware = (req: NextRequest) => {
    const cookie = req.cookies.get(localeCookie)
    const header = req.headers.get('Accept-Language')

    const lang =
        // Get preferred language from cookie
        (cookie && acceptLanguage.get(cookie.value)) ??
        // Otherwise from header
        acceptLanguage.get(header ?? `${defaultLocale}`) ??
        defaultLocale

    // Redirect if the path does not start with a supported locale
    const path = req.nextUrl.pathname
    if (
        !locales.some(
            (locale) => path.startsWith(`/${locale}/`) || path === `/${locale}`
        ) &&
        !path.startsWith('/api')
    ) {
        return NextResponse.redirect(new URL(`/${lang}${path}`, req.url))
    }

    // Set the language cookie based on the referer (sent during language switch)
    const referer = req.headers.get('referer')
    if (referer) {
        const refererUrl = new URL(referer)
        const localeInReferer = locales.find(
            (locale) =>
                refererUrl.pathname.startsWith(`/${locale}/`) ||
                refererUrl.pathname === `/${locale}`
        )
        const response = NextResponse.next()
        if (localeInReferer) response.cookies.set(localeCookie, localeInReferer)
        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api|_next|images).*)',
        // '/'
    ],
}
