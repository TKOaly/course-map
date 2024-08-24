'use client'
import { useSearchParams } from 'next/navigation'
import { Separator } from '../ui/separator'

export function PWASeparator() {
    const searchParams = useSearchParams()
    return searchParams.get('source') === 'pwa' ? <Separator /> : null
}
