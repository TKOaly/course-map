'use client'

import { type Url } from 'next/dist/shared/lib/router/router'
import { default as NextLink } from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { type ComponentProps, forwardRef } from 'react'
import { locales } from './settings'

/**
 * Helper component for creating localized links.
 */
export const Link: React.FC<
    ComponentProps<typeof NextLink> & {
        lang?: string
    }
> = forwardRef(function Link(props, ref) {
    const pathname = usePathname()
    const params = useParams<{ lang: string }>()

    let href: string | Url = props.href ?? ''

    if (params.lang && pathname) {
        href = '/' + pathname.split('/').slice(2).join('/')
    } else if (pathname) {
        href = pathname
    } else {
        href = '/'
    }

    let baseURI = pathname ?? '/'

    if (typeof document !== undefined) {
        baseURI = document.baseURI
    }

    const resolvedHref = new URL(href.toString(), baseURI)
    const isSameOrigin = new URL(baseURI).origin === resolvedHref.origin

    if (isSameOrigin) {
        if (
            !locales.some((lang) =>
                resolvedHref.pathname.startsWith(`/${lang}`)
            )
        ) {
            resolvedHref.pathname = `/${params.lang}${resolvedHref.pathname}`
        }
    }

    return <NextLink {...props} href={resolvedHref} ref={ref} />
})
