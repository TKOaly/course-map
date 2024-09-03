'use client'

import { Button } from '@/app/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowDownToLine } from 'lucide-react'
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

/**
 * PWA install button.
 * Shows a button to install the site as an app on supported browsers.
 */
export function InstallButton({ includeText = false, className }: OwnProps) {
    const [installPrompt, setInstallPrompt] =
        useState<BeforeInstallPromptEvent | null>(null)
    const [isDismissed, setDismissed] = useState(false)

    const onInstallReady = useCallback((e: Event) => {
        e.preventDefault()
        setInstallPrompt(e as BeforeInstallPromptEvent)
    }, [])

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', onInstallReady)
        return () =>
            window.removeEventListener('beforeinstallprompt', onInstallReady)
    }, [onInstallReady])

    const installApp = async () => {
        if (!installPrompt) return
        await installPrompt.prompt()
        const choice = await installPrompt.userChoice
        if (choice.outcome === 'dismissed') {
            setDismissed(true)
        }
    }

    return installPrompt ? (
        <Button
            variant="outline"
            size="icon"
            aria-label="Install site as an app"
            className={cn(
                'flex w-fit items-center justify-between gap-2 border-border px-3',
                className
            )}
            onClick={installApp}
        >
            <ArrowDownToLine className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            {includeText && !isDismissed && <p>Asenna</p>}
        </Button>
    ) : null
}
