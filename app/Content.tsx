'use client'

import { CourseFlow } from '@/components/flow/CourseFlow'
import { CourseInfo } from '@/components/info/CourseInfo'
import { FullscreenButton } from '@/components/navigation/FullscreenButton'
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { fullscreenElementAtom, isFullscreenAtom } from '@/lib/state/fullscreen'
import { useBreakpoint } from '@/lib/tailwind'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useRef } from 'react'

export const Content = () => {
    const isMobile = !useBreakpoint('md')
    const isFullscreen = useAtomValue(isFullscreenAtom)

    const setFullScreenElement = useSetAtom(fullscreenElementAtom)

    const ref = useRef<HTMLDivElement>(null)

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
            <ResizablePanelGroup
                direction={isMobile ? 'vertical' : 'horizontal'}
                className="flex-grow"
            >
                <ResizablePanel
                    id="1"
                    defaultSize={isMobile ? 50 : 70}
                    minSize={10}
                >
                    <CourseFlow />
                </ResizablePanel>
                <CourseInfo />
            </ResizablePanelGroup>
        </div>
    )
}