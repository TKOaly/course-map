import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { type NextRequest, NextResponse } from 'next/server'

const locales = ['fi', 'en', 'sv']

function getLocale(request: NextRequest) {
    const languages = new Negotiator({
        headers: {
            'accept-language':
                request.headers.get('accept-language') ?? undefined,
        },
    }).languages(locales)
    const defaultLocale = 'fi'

    return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next), manifest and images
        '/((?!_next|manifest.json|images).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}
