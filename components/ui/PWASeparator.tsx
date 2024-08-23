'use client'
import { useSearchParams } from 'next/navigation'
import { Separator } from './separator'

export function PWASeparator() {
    const searchParams = useSearchParams()
    return searchParams.get('source') === 'pwa' ? <Separator /> : null
}
