'use client'
import { useAtom, useAtomValue } from 'jotai'

import { useTranslate, useTranslateObj } from '@/app/i18n'
import { Locale } from '@/app/i18n/settings'
import { CourseGroup, Language } from '@/data/enums'
import { courseDataAtom, selectedCourseAtom } from '@/lib/state'
import { useBreakpoint } from '@/lib/tailwind'
import { cn } from '@/lib/utils'
import { CalendarCheck, GraduationCap, X } from 'lucide-react'
import { useParams } from 'next/navigation'
import { type ReactNode } from 'react'
import { Button } from '../ui/button'
import { ResizableHandle, ResizablePanel } from '../ui/resizable'
import { Separator } from '../ui/separator'

const languages: {
    [key in Language]: {
        [key in Locale]: string
    }
} = {
    [Language.FI]: {
        [Locale.FI]: 'Suomi',
        [Locale.EN]: 'Finnish',
    },
    [Language.EN]: {
        [Locale.FI]: 'Englanti',
        [Locale.EN]: 'English',
    },
    [Language.SV]: {
        [Locale.FI]: 'Ruotsi',
        [Locale.EN]: 'Swedish',
    },
    [Language.ES]: {
        [Locale.FI]: 'Espanja',
        [Locale.EN]: 'Spanish',
    },
    [Language.FR]: {
        [Locale.FI]: 'Ranska',
        [Locale.EN]: 'French',
    },
    [Language.NO]: {
        [Locale.FI]: 'Norja',
        [Locale.EN]: 'Norwegian',
    },
    [Language.SK]: {
        [Locale.FI]: 'Slovakki',
        [Locale.EN]: 'Slovak',
    },
}

const studiesPaths: { [key in Locale]: string } = {
    [Locale.FI]: 'https://studies.helsinki.fi/kurssit/opintojakso/',
    [Locale.EN]: 'https://studies.helsinki.fi/courses/course-unit/',
}

/**
 * The course popup info panel that displays information about a selected course.
 */
export const CourseInfo = () => {
    const isMobile = !useBreakpoint('md')

    const t = useTranslate()
    const tObj = useTranslateObj()

    const [course, selectCourse] = useAtom(selectedCourseAtom)
    const courseData = useAtomValue(courseDataAtom)

    const { locale } = useParams<{ locale: Locale }>()

    if (!course) return null

    return (
        <>
            <ResizableHandle className="z-10 -mb-14 -ml-12 flex min-h-14 min-w-1 bg-transparent md:-ml-1 md:mb-0" />

            <ResizablePanel
                id="2"
                defaultSize={isMobile ? 50 : 30}
                minSize={20}
                className="-mt-3 flex p-3 @container md:-ml-1 md:mt-0 md:pb-3 md:pl-1"
            >
                <div
                    className={`relative w-full rounded border-0 bg-course-${course.group ?? CourseGroup.PLACEHOLDER} ring-2 ring-course-${course.group ?? CourseGroup.PLACEHOLDER}`}
                >
                    {isMobile && (
                        <div className="absolute left-1/2 top-2 h-1 w-32 -translate-x-1/2 rounded bg-zinc-800/15"></div>
                    )}
                    <Button
                        variant="outline"
                        aria-label="Close course info"
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
                                    {course.code}
                                </label>
                                <h2 className="font-semibold text-zinc-800">
                                    {course.id /* course name */}
                                </h2>
                            </div>
                        </div>
                        <div className="h-full min-h-0 overflow-y-auto rounded bg-background p-2">
                            <div className="flex flex-col gap-3 pb-28 pt-0.5">
                                <Row>
                                    <p className="text-muted-foreground">
                                        {t.courseInfo.credits}
                                    </p>
                                    <p>
                                        {(course.credits ?? '-') +
                                            ' ' +
                                            t.courseInfo.cr}
                                    </p>
                                </Row>
                                {course.nicknames &&
                                    course.nicknames.length > 0 && (
                                        <Row>
                                            <p className="text-muted-foreground">
                                                {course.nicknames.length > 1
                                                    ? t.courseInfo.abbreviations
                                                    : t.courseInfo.abbreviation}
                                            </p>
                                            <p className="font-serif italic">
                                                {'"'}
                                                {course.nicknames.join('", "')}
                                                {'"'}
                                            </p>
                                        </Row>
                                    )}
                                {((course.prerequisites &&
                                    course.prerequisites.length > 0) ||
                                    (course.equivalents &&
                                        course.equivalents.length > 0)) && (
                                    <Separator />
                                )}
                                {course.prerequisites &&
                                    course.prerequisites.length > 0 && (
                                        <>
                                            <p className="px-1 text-muted-foreground">
                                                {t.courseInfo.prerequisites}
                                            </p>
                                            <div className="flex flex-col gap-4 p-1 pt-0">
                                                {course.prerequisites.map(
                                                    (prerequisite) => {
                                                        const prerequisiteData =
                                                            courseData.find(
                                                                (c) =>
                                                                    c.id ===
                                                                    prerequisite.id
                                                            )

                                                        return !prerequisiteData ? null : (
                                                            <button
                                                                key={
                                                                    prerequisiteData.id
                                                                }
                                                                aria-label={`Open info for the prerequisite course ${prerequisiteData.code}`}
                                                                onClick={() =>
                                                                    selectCourse(
                                                                        courseData.find(
                                                                            (
                                                                                c
                                                                            ) =>
                                                                                c.id ===
                                                                                prerequisiteData.id
                                                                        )
                                                                    )
                                                                }
                                                            >
                                                                <div
                                                                    className={`bg-course-${prerequisiteData.group ?? CourseGroup.PLACEHOLDER} ring-course-${prerequisiteData.group ?? CourseGroup.PLACEHOLDER} rounded border-0 ring-2 hover:ring-4`}
                                                                >
                                                                    <div className="flex items-center justify-start">
                                                                        <div
                                                                            className={`flex h-full flex-col items-center justify-center px-3 text-primary dark:text-primary-foreground`}
                                                                        >
                                                                            <p className="-mb-2 font-semibold">
                                                                                {prerequisiteData.credits ??
                                                                                    '-'}
                                                                            </p>
                                                                            <p className="text-sm">
                                                                                {
                                                                                    t
                                                                                        .courseInfo
                                                                                        .cr
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                        <div className="flex w-full flex-col rounded bg-background p-2 pr-3 text-start">
                                                                            <label
                                                                                className={`text-xs text-foreground/70`}
                                                                            >
                                                                                {
                                                                                    prerequisiteData.code
                                                                                }
                                                                            </label>
                                                                            <h2
                                                                                className={`w-full break-words text-sm text-foreground dark:text-foreground`}
                                                                            >
                                                                                {
                                                                                    prerequisiteData.id /* course name */
                                                                                }
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </>
                                    )}
                                {course.equivalents &&
                                    course.equivalents.length > 0 && (
                                        <>
                                            <p className="px-1 text-muted-foreground">
                                                {t.courseInfo.equivalents}
                                            </p>
                                            <div className="flex flex-col gap-4 p-1 pt-0">
                                                {course.equivalents.map(
                                                    (equivalent) => (
                                                        <button
                                                            key={equivalent.id}
                                                            aria-label={`Open info for the equivalent course ${equivalent.code}`}
                                                            onClick={() =>
                                                                selectCourse(
                                                                    courseData.find(
                                                                        (c) =>
                                                                            c.id ===
                                                                            equivalent.id
                                                                    )
                                                                )
                                                            }
                                                        >
                                                            <div
                                                                className={`bg-course-${equivalent.group ?? CourseGroup.PLACEHOLDER} ring-course-${equivalent.group ?? CourseGroup.PLACEHOLDER} rounded border-0 ring-2 hover:ring-4`}
                                                            >
                                                                <div className="flex items-center justify-start">
                                                                    <div
                                                                        className={`flex h-full flex-col items-center justify-center px-3 text-primary dark:text-primary-foreground`}
                                                                    >
                                                                        <p className="-mb-2 font-semibold">
                                                                            {equivalent.credits ??
                                                                                '-'}
                                                                        </p>
                                                                        <p className="text-sm">
                                                                            {
                                                                                t
                                                                                    .courseInfo
                                                                                    .cr
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="flex w-full flex-col rounded bg-background p-2 pr-3 text-start">
                                                                        <label
                                                                            className={`text-xs text-foreground/70`}
                                                                        >
                                                                            {
                                                                                equivalent.code
                                                                            }
                                                                        </label>
                                                                        <h2
                                                                            className={`w-full break-words text-sm text-foreground dark:text-foreground`}
                                                                        >
                                                                            {
                                                                                equivalent.id /* course name */
                                                                            }
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </>
                                    )}

                                {
                                    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                                    (course.mandatory ||
                                        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                                        course.module ||
                                        course.languages) && <Separator />
                                }

                                {course.mandatory && (
                                    <Row>
                                        <p className="text-muted-foreground">
                                            {t.courseInfo.mandatory}
                                        </p>
                                        <p>{t.courseInfo.yes}</p>
                                    </Row>
                                )}
                                {course.module && (
                                    <Row>
                                        <p className="text-muted-foreground">
                                            {t.courseInfo.studyModule}
                                        </p>
                                        <p className="text-end">
                                            {course.module}
                                        </p>
                                    </Row>
                                )}
                                {course.languages && (
                                    <>
                                        <Row>
                                            <p className="text-muted-foreground">
                                                {course.languages.length > 1
                                                    ? t.courseInfo.languages
                                                    : t.courseInfo.language}
                                            </p>
                                            <p className="text-end">
                                                {course.languages
                                                    .map((language) =>
                                                        tObj(
                                                            languages[language]
                                                        )
                                                    )
                                                    .join(', ')}
                                            </p>
                                        </Row>
                                    </>
                                )}
                                {course.description && (
                                    <>
                                        <Separator />
                                        <p className="px-1 text-muted-foreground">
                                            {t.courseInfo.description}
                                        </p>
                                        <p className="whitespace-pre-line px-1 text-xs text-muted-foreground">
                                            {course.description}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 flex w-full flex-col gap-2 p-3 @xs:flex-row">
                        {course.linkId && (
                            <Button
                                aria-label="Open course info page in studies.helsinki.fi"
                                size="icon"
                                asChild
                                className={cn(
                                    'dark:hover:bg- w-full gap-2 rounded p-2 hover:bg-neutral-600 dark:hover:bg-neutral-400'
                                )}
                                onClick={() => true}
                            >
                                <a
                                    href={`${studiesPaths[locale] ?? studiesPaths[Locale.FI]}${course.linkId}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GraduationCap className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
                                    <p>STUDIES</p>
                                </a>
                            </Button>
                        )}
                        {course.sisuLink && (
                            <Button
                                aria-label="Open course info page in Sisu"
                                size="icon"
                                asChild
                                className={cn(
                                    'w-full gap-2 rounded bg-sky-600 p-2 text-[#fafafa] hover:bg-sky-500'
                                )}
                                onClick={() => true}
                            >
                                <a
                                    href={course.sisuLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <CalendarCheck className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
                                    <p>SISU</p>
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </ResizablePanel>
        </>
    )
}

const Row = ({
    children,
    className,
}: {
    children: ReactNode[]
    className?: string
}) => {
    return (
        <div
            className={cn(
                'flex flex-row items-center justify-between px-1',
                className
            )}
        >
            {children}
        </div>
    )
}
