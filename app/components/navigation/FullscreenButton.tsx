'use client'

import { Button } from '@/app/components/ui/button'
import { fullscreenElementAtom, isFullscreenAtom } from '@/lib/state'
import { cn } from '@/lib/utils'
import { useReactFlow } from '@xyflow/react'
import { useAtom, useAtomValue } from 'jotai'
import { Expand, Shrink } from 'lucide-react'
import { useEffect, useState } from 'react'

type OwnProps = {
    className?: string
}

/**
 * Button for toggling fullscreen mode.
 * Depends on browser permissions and fullscreen API.
 */
export function FullscreenButton({ className }: OwnProps) {
    const fullscreenElement = useAtomValue(fullscreenElementAtom)?.current
    const [fullscreenAllowed, setFullscreenAllowed] = useState(false)
    const [isFullscreen, setIsFullscreen] = useAtom(isFullscreenAtom)
    const { fitView } = useReactFlow()

    /**
     * Check if fullscreen is allowed in the browser on load.
     */
    useEffect(() => {
        setFullscreenAllowed(document?.fullscreenEnabled)
    }, [])

    /**
     * Add event listeners for fullscreen changes.
     */
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
        setTimeout(() => {
            void fitView({ duration: 750 })
        }, 100)
    }

    /**
     * Render fullscreen button if allowed.
     */
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
