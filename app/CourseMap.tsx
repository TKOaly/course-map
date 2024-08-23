'use client'

import { CourseInfo } from '@/components/course/CourseInfo'
import { CourseViewport } from '@/components/flow/CourseViewport'
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { useBreakpoint } from '@/lib/tailwind'

export const CourseMap = () => {
    const isMobile = !useBreakpoint('md')

    return (
        <ResizablePanelGroup
            direction={isMobile ? 'vertical' : 'horizontal'}
            className="flex-grow"
        >
            <ResizablePanel defaultSize={isMobile ? 40 : 70} minSize={10}>
                <CourseViewport />
            </ResizablePanel>
            <CourseInfo />
        </ResizablePanelGroup>
    )
}
