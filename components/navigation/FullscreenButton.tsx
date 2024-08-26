'use client'

import { Button } from '@/components/ui/button'
import { fullscreenElementAtom, isFullscreenAtom } from '@/lib/state'
import { cn } from '@/lib/utils'
import { useAtom, useAtomValue } from 'jotai'
import { Expand, Shrink } from 'lucide-react'
import { useEffect, useState } from 'react'

type OwnProps = {
    className?: string
}

export function FullscreenButton({ className }: OwnProps) {
    const fullscreenElement = useAtomValue(fullscreenElementAtom)?.current
    const [fullscreenAllowed, setFullscreenAllowed] = useState(false)
    const [isFullscreen, setIsFullscreen] = useAtom(isFullscreenAtom)

    useEffect(() => {
        setFullscreenAllowed(document?.fullscreenEnabled)
    }, [])

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document.fullscreenElement ? true : false)
        }

        // Listen for fullscreen changes
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        document.addEventListener(
            'webkitfullscreenchange',
            handleFullscreenChange
        )
        document.addEventListener('mozfullscreenchange', handleFullscreenChange)
        document.addEventListener('MSFullscreenChange', handleFullscreenChange)

        return () => {
            // Clean up listeners
            document.removeEventListener(
                'fullscreenchange',
                handleFullscreenChange
            )
            document.removeEventListener(
                'webkitfullscreenchange',
                handleFullscreenChange
            )
            document.removeEventListener(
                'mozfullscreenchange',
                handleFullscreenChange
            )
            document.removeEventListener(
                'MSFullscreenChange',
                handleFullscreenChange
            )
        }
    }, [setIsFullscreen])

    const toggleFullScreen = async () => {
        if (!document.fullscreenElement && fullscreenElement) {
            await fullscreenElement.requestFullscreen()
        } else if (document.exitFullscreen) {
            await document.exitFullscreen()
        }
    }

    return fullscreenAllowed ? (
        <Button
            variant="outline"
            size="icon"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            className={cn(
                'flex w-fit items-center justify-between gap-2 border-border px-3',
                className
            )}
            onClick={toggleFullScreen}
        >
            {isFullscreen ? (
                <Shrink className="h-[1.2rem] w-[1.2rem] rotate-180 scale-100" />
            ) : (
                <Expand className="h-[1.2rem] w-[1.2rem] rotate-180 scale-100" />
            )}
        </Button>
    ) : null
}
