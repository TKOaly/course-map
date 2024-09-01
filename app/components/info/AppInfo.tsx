import { Translation } from '@/app/i18n'
import { SheetContent, SheetDescription, SheetTitle } from '../ui/sheet'

export const AppInfo = () => (
    <SheetContent className="flex max-h-full min-h-full flex-col gap-2 overflow-y-auto">
        <SheetTitle className="text-xl font-bold">
            <Translation path="appInfo.title" />
        </SheetTitle>
        <SheetDescription>
            <Translation path="appInfo.description" />
        </SheetDescription>
        <SheetTitle className="text-base">
            <Translation path="appInfo.usage.title" />
        </SheetTitle>
        <SheetDescription>
            <Translation path="appInfo.usage.text" />
        </SheetDescription>
        <SheetDescription className="rounded border border-primary p-3">
            <span className="font-semibold text-foreground">
                <Translation path="appInfo.colors.title" />
            </span>
            <br />
            <Translation path="appInfo.colors.solidLine" />
            <div className="my-2 min-h-1 min-w-full border-t-2 border-primary"></div>
            <Translation path="appInfo.colors.dashedLine" />
            <div className="my-2 min-h-1 min-w-full border-t-2 border-dashed border-primary"></div>
            <Translation path="appInfo.colors.blueLine" />
            <div className="my-2 min-h-1 min-w-full border-t-2 border-sky-500"></div>
            <Translation path="appInfo.colors.courseColors.text" /> <br />
            <span className="leading-relaxed text-foreground dark:text-background">
                <span className="whitespace-nowrap rounded bg-course-basic p-0.5 px-1.5 text-xs">
                    <Translation path="appInfo.colors.courseColors.basic" />
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-intermediate p-0.5 px-1.5 text-xs">
                    <Translation path="appInfo.colors.courseColors.intermediate" />
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-alternative p-0.5 px-1.5 text-xs">
                    <Translation path="appInfo.colors.courseColors.alternative" />
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-minor p-0.5 px-1.5 text-xs">
                    <Translation path="appInfo.colors.courseColors.minor" />
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-language p-0.5 px-1.5 text-xs">
                    <Translation path="appInfo.colors.courseColors.language" />
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-other p-0.5 px-1.5 text-xs">
                    <Translation path="appInfo.colors.courseColors.other" />
                </span>{' '}
            </span>
        </SheetDescription>
        <SheetTitle className="text-base">
            <Translation path="appInfo.wrongData.title" />
        </SheetTitle>
        <SheetDescription>
            <Translation path="appInfo.wrongData.manualNotice" />
        </SheetDescription>
        <SheetDescription>
            <Translation path="appInfo.wrongData.githubStart" />{' '}
            <a
                className="font-medium text-foreground hover:underline active:font-normal"
                href="https://github.com/TKOaly/course-map"
                target="_blank"
                rel="external"
            >
                <Translation path="appInfo.wrongData.githubLink" /> ↗
            </a>{' '}
            <Translation path="appInfo.wrongData.contributing" />
        </SheetDescription>
    </SheetContent>
)
