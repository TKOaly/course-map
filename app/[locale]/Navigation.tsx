import { CourseSearch } from '@/app/components/navigation/CourseSearch'
import { DegreeSelect } from '@/app/components/navigation/DegreeSelect'
import { DegreeStructureSelect } from '@/app/components/navigation/DegreeStructureSelect'
import { FullscreenButton } from '@/app/components/navigation/FullscreenButton'
import { InfoButton } from '@/app/components/navigation/Infobutton'
import { InstallButton } from '@/app/components/navigation/InstallButton'
import { LanguageToggle } from '@/app/components/navigation/LanguageToggle'
import { Logo } from '@/app/components/navigation/Logo'
import { ModeToggle } from '@/app/components/navigation/ModeToggle'
import { PWASeparator } from '@/app/components/navigation/PWASeparator'
import { Separator } from '@/app/components/ui/separator'
import { Suspense } from 'react'

export const Navigation = () => {
    return (
        <div className="flex w-full flex-col">
            {/* Shown only on PWA to separate title bar from the nav*/}
            <Suspense fallback={null}>
                <PWASeparator />
            </Suspense>

            <div className="flex w-full shrink flex-col justify-between md:flex-row md:items-center">
                <div className="flex w-full flex-col md:h-full md:flex-row md:items-center">
                    <div className="flex justify-between md:w-fit md:min-w-fit">
                        <Logo />

                        {/* Hidden on desktop */}
                        <InstallButton
                            includeText
                            className="border-y-0 border-r-0 md:hidden"
                        />
                        <LanguageToggle className="inline-flex border-y-0 border-r-0 border-border px-5 focus:z-10 md:hidden" />
                        <ModeToggle className="inline-flex border-y-0 border-r-0 border-border px-5 focus:z-10 md:hidden" />
                    </div>

                    <DegreeSelect />
                    <DegreeStructureSelect />

                    <div className="flex w-full flex-row">
                        <CourseSearch />

                        <InstallButton className="hidden border-y-0 border-r-0 md:flex" />
                        <FullscreenButton className="border-y-0 border-r-0" />
                        <InfoButton className="flex border-y-0 border-r-0 focus:z-10" />
                    </div>
                </div>

                {/* Hidden on mobile */}
                <LanguageToggle className="hidden border-y-0 border-r-0 border-border px-5 focus:z-10 md:inline-flex" />
                <ModeToggle className="hidden border-y-0 border-r-0 border-border px-5 focus:z-10 md:inline-flex" />
            </div>

            <Separator />
        </div>
    )
}
