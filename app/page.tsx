import { FullscreenButton } from '@/components/ui/FullscreenButton'
import { InfoButton } from '@/components/ui/Infobutton'
import { Input } from '@/components/ui/input'
import { InstallButton } from '@/components/ui/InstallButton'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { PWASeparator } from '@/components/ui/PWASeparator'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Compass, Search } from 'lucide-react'
import { Suspense } from 'react'
import { CourseMap } from './CourseMap'

export default function Home() {
    return (
        <main className="flex min-h-dvh w-screen flex-col items-center justify-between overflow-x-clip">
            <div className="z-10 flex size-full max-h-dvh min-h-dvh flex-col items-start">
                <div className="flex w-full flex-col">
                    <Suspense fallback={null}>
                        <PWASeparator />
                    </Suspense>
                    <div className="flex w-full shrink flex-col justify-between md:flex-row md:items-center">
                        <div className="flex w-full flex-col md:h-full md:flex-row md:items-center">
                            <div className="flex justify-between md:w-fit md:min-w-fit">
                                <div className="group relative flex w-full flex-row items-center">
                                    <div className="absolute left-2 top-1/2 -translate-y-1/2"></div>
                                    <Compass
                                        size={24}
                                        className="z-20 mx-2 animate-wiggle stroke-[1.5px] transition-all group-hover:animate-spin motion-reduce:animate-none [&_circle]:stroke-foreground [&_path]:stroke-[url(#compass-black)_#09090b] dark:[&_path]:stroke-[url(#compass-white)_#fafafa]"
                                    />
                                    <h1 className="select-none pb-1.5 pr-3 pt-1.5 font-serif text-xl md:py-0">
                                        Kurssikartta
                                    </h1>
                                </div>
                                <InstallButton
                                    includeText
                                    className="border-y-0 border-r-0 md:hidden"
                                />
                                <LanguageToggle className="inline-flex border-y-0 border-r-0 border-border px-5 focus:z-10 md:hidden" />
                                <ModeToggle className="inline-flex border-y-0 border-r-0 border-border px-5 focus:z-10 md:hidden" />
                            </div>

                            <Select defaultValue="TKT">
                                <SelectTrigger className="w-full shrink-0 select-none border-x-0 border-b-0 border-border hover:bg-secondary/90 focus:z-10 md:w-[160px] md:border md:border-y-0">
                                    <SelectValue placeholder="Valitse Tutkinto" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="TKT">
                                        TKT Kandi
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="20-23">
                                <SelectTrigger className="w-full shrink-0 select-none border-x-0 border-border hover:bg-secondary/90 focus:z-10 md:w-[160px] md:border md:border-y-0 md:border-l-0">
                                    <SelectValue placeholder="Valitse Opetussuunnitelma" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="20-23">
                                        OPS 2023-2026
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="relative flex w-full flex-row">
                                <Search
                                    size={20}
                                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2"
                                />
                                <Input
                                    className="w-full border-0 pl-11 hover:bg-secondary/90 focus:z-10"
                                    placeholder="Hae kursseja"
                                />
                                <InstallButton className="hidden border-y-0 border-r-0 md:flex" />
                                <FullscreenButton className="border-y-0 border-r-0" />
                                <InfoButton className="flex border-y-0 border-r-0 md:hidden" />
                            </div>
                        </div>

                        <InfoButton className="hidden border-y-0 border-r-0 focus:z-10 md:flex" />
                        <LanguageToggle className="hidden border-y-0 border-r-0 border-border px-5 focus:z-10 md:inline-flex" />
                        <ModeToggle className="hidden border-y-0 border-r-0 border-border px-5 focus:z-10 md:inline-flex" />
                    </div>
                    <Separator />
                </div>
                <CourseMap />
            </div>
        </main>
    )
}
