'use client'

import { useBreakpoint } from '@/lib/tailwind'
import { ResizablePanel, ResizablePanelGroup } from '../ui/resizable'
import { CourseInfo } from './CourseInfo'

/**
 * Container for the CourseInfo component
 */
export const CourseInfoContainer = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    const isMobile = !useBreakpoint('md')

    return (
        <ResizablePanelGroup
            direction={isMobile ? 'vertical' : 'horizontal'}
            className="flex-grow"
        >
            <ResizablePanel
                id="1"
                defaultSize={isMobile ? 50 : 70}
                minSize={10}
            >
                {children}
            </ResizablePanel>
            <CourseInfo />
        </ResizablePanelGroup>
    )
}
