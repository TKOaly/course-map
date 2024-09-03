'use client'
import { useSearchParams } from 'next/navigation'
import { Separator } from '../ui/separator'

/**
 * Separator that is only visible when the source is PWA.
 * Used in the navigation bar to separate the title bar from the navigation.
 */
export function PWASeparator() {
    const searchParams = useSearchParams()
    return searchParams.get('source') === 'pwa' ? <Separator /> : null
}
