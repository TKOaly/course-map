import { defaultLocale, localeCookie, locales } from '@/i18n/settings'
import acceptLanguage from 'accept-language'
import { type NextRequest, NextResponse } from 'next/server'

acceptLanguage.languages(locales.map((locale) => locale))

export const middleware = (req: NextRequest) => {
    const cookie = req.cookies.get(localeCookie)
    const header = req.headers.get('Accept-Language')

    const lang =
        // Get language from cookie
        (cookie && acceptLanguage.get(cookie.value)) ??
        // Otherwise from header
        acceptLanguage.get(header ?? `${defaultLocale}`) ??
        defaultLocale

    // Redirect if lng in path is not supported
    if (
        !locales.some(
            (locale) =>
                req.nextUrl.pathname.startsWith(`/${locale}/`) ||
                req.nextUrl.pathname === `/${locale}`
        )
    ) {
        return NextResponse.redirect(
            new URL(`/${lang}${req.nextUrl.pathname}`, req.url)
        )
    }

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
