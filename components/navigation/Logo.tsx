'use client'

import { Compass } from 'lucide-react'
import { useParams } from 'next/navigation'

export const Logo = () => {
    const params = useParams<{ lang: string }>()

    const logos: Record<string, string> = {
        fi: 'Kurssikartta',
        en: 'CourseMap',
        default: 'CourseMap',
    }

    return (
        <div className="group relative flex w-full flex-row items-center">
            <div className="absolute left-2 top-1/2 -translate-y-1/2"></div>
            <Compass
                size={24}
                className="z-20 mx-2 animate-wiggle stroke-[1.5px] transition-all group-hover:animate-spin motion-reduce:animate-none [&_circle]:stroke-foreground [&_path]:stroke-[url(#compass-black)_#09090b] dark:[&_path]:stroke-[url(#compass-white)_#fafafa]"
            />
            <h1 className="select-none pb-1.5 pr-3 pt-1.5 font-serif text-xl md:py-0">
                {logos[params.lang] ?? logos.default}
            </h1>
        </div>
    )
}
