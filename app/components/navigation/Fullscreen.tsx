'use client'

import { fullscreenElementAtom, isFullscreenAtom } from '@/lib/state'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { FullscreenButton } from './FullscreenButton'

/**
 * Wrapper component for fullscreen elements.
 */
export const Fullscreen = ({ children }: { children: React.ReactNode }) => {
    const isFullscreen = useAtomValue(isFullscreenAtom)

    // Store Content as the fullscreen element
    const ref = useRef<HTMLDivElement>(null)
    const setFullScreenElement = useSetAtom(fullscreenElementAtom)
    useEffect(() => {
        setFullScreenElement(ref)
    }, [setFullScreenElement, ref])

    return (
        <div
            ref={ref}
            className="relative flex size-full min-h-0 flex-grow flex-col bg-background"
        >
            {/* Fullscreen close button */}
            {isFullscreen && (
                <FullscreenButton className="absolute z-20 border-l-0 border-t-0" />
            )}
            {children}
        </div>
    )
}
