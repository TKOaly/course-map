'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowDownToLine } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

type OwnProps = {
    includeText?: boolean
    className?: string
}

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[]
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed'
        platform: string
    }>
    prompt(): Promise<void>
}

export function InstallButton({ includeText = false, className }: OwnProps) {
    const searchParams = useSearchParams()
    const [installPrompt, setInstallPrompt] =
        useState<BeforeInstallPromptEvent | null>(null)

    const onInstallReady = useCallback((e: Event) => {
        e.preventDefault()
        setInstallPrompt(e as BeforeInstallPromptEvent)
    }, [])

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', onInstallReady)
        return () =>
            window.removeEventListener('beforeinstallprompt', onInstallReady)
    }, [onInstallReady])

    if (searchParams.get('source') === 'pwa') return null

    return installPrompt ? (
        <Button
            variant="outline"
            size="icon"
            className={cn(
                'flex w-fit items-center justify-between gap-2 border-border px-3',
                className
            )}
            onClick={async () => {
                await installPrompt.prompt()
            }}
        >
            <ArrowDownToLine className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            {includeText && <p>Asenna</p>}
        </Button>
    ) : null
}
