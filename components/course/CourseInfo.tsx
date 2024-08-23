'use client'
import { useAtom } from 'jotai'

import { selectedCourseAtom } from '@/lib/state/course'
import { useBreakpoint } from '@/lib/tailwind'
import { cn } from '@/lib/utils'
import { CalendarCheck, GraduationCap, X } from 'lucide-react'
import { type ReactNode } from 'react'
import { Button } from '../ui/button'
import { ResizableHandle, ResizablePanel } from '../ui/resizable'
import { Separator } from '../ui/separator'

export const CourseInfo = () => {
    const isMobile = !useBreakpoint('md')

    const [selectedCourse, selectCourse] = useAtom(selectedCourseAtom)

    if (!selectedCourse) return null

    return (
        <>
            <ResizableHandle className="z-10 -mb-14 -ml-12 flex min-h-14 min-w-1 bg-transparent md:-ml-1 md:mb-0" />

            <ResizablePanel
                defaultSize={isMobile ? 60 : 30}
                minSize={20}
                className="@container -mt-3 flex p-3 md:-ml-1 md:mt-0 md:pb-3 md:pl-1"
            >
                <div className="relative w-full rounded border-0 bg-[#9bc8b2] ring-2 ring-[#9bc8b2]">
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            'absolute right-1 top-1 z-20 flex h-fit w-fit items-center justify-between gap-2 rounded border-0 border-border bg-transparent p-1 text-zinc-800 hover:bg-zinc-800/15 hover:text-zinc-800'
                        )}
                        onClick={() => selectCourse(undefined)}
                    >
                        <X className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
                    </Button>
                    <div className="flex h-full flex-col gap-2 pt-2">
                        <div className="flex justify-between">
                            <div className="flex h-full flex-col px-2">
                                <label className="text-sm text-foreground/70 text-zinc-600">
                                    {selectedCourse.code}
                                </label>
                                <h2 className="font-semibold text-zinc-800">
                                    {selectedCourse.name}
                                </h2>
                            </div>
                        </div>
                        <div className="h-full min-h-0 overflow-y-auto rounded bg-background p-2">
                            <div className="flex flex-col gap-3 pb-28 pt-0.5">
                                <Row>
                                    <p className="text-muted-foreground">
                                        Opintopisteet
                                    </p>
                                    <p>
                                        {(selectedCourse.credits ?? '-') +
                                            ' op'}
                                    </p>
                                </Row>
                                {selectedCourse.nicknames &&
                                    selectedCourse.nicknames.length > 0 && (
                                        <>
                                            <Row>
                                                <p className="text-muted-foreground">
                                                    {selectedCourse.nicknames
                                                        .length > 1
                                                        ? 'Lyhenteet'
                                                        : 'Lyhenne'}
                                                </p>
                                                <p className="font-serif italic">
                                                    {'"'}
                                                    {selectedCourse.nicknames.join(
                                                        '", "'
                                                    )}
                                                    {'"'}
                                                </p>
                                            </Row>
                                        </>
                                    )}
                                {selectedCourse.description && (
                                    <>
                                        <Separator />
                                        <p className="px-1 text-muted-foreground">
                                            Kuvaus
                                        </p>
                                        <p className="whitespace-pre-line px-1 text-xs text-muted-foreground">
                                            {selectedCourse.description}
                                        </p>
                                    </>
                                )}
                                {selectedCourse.language && (
                                    <>
                                        <Separator />
                                        <Row>
                                            <p className="text-muted-foreground">
                                                Kieli
                                            </p>
                                            <p>{selectedCourse.language}</p>
                                        </Row>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="@xs:flex-row absolute bottom-0 flex w-full flex-col gap-2 p-3">
                        <Button
                            size="icon"
                            className={cn(
                                'dark:hover:bg- w-full gap-2 rounded p-2 hover:bg-neutral-600 dark:hover:bg-neutral-400'
                            )}
                            onClick={() => true}
                        >
                            <GraduationCap className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
                            <p>STUDIES</p>
                        </Button>
                        <Button
                            size="icon"
                            className={cn(
                                'w-full gap-2 rounded bg-sky-600 p-2 text-[#fafafa] hover:bg-sky-500'
                            )}
                            onClick={() => true}
                        >
                            <CalendarCheck className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
                            <p>SISU</p>
                        </Button>
                    </div>
                </div>
            </ResizablePanel>
        </>
    )
}

const Row = ({ children }: { children: ReactNode[] }) => {
    return (
        <div className="flex flex-row items-center justify-between px-1">
            {children}
        </div>
    )
}
