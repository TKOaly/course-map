import { Translation } from '@/app/i18n'
import { Compass } from 'lucide-react'

export const Logo = () => {
    return (
        <div className="group flex w-full flex-row items-center">
            <Compass
                size={24}
                className="z-20 mx-2 animate-wiggle stroke-[1.5px] transition-all group-hover:animate-spin motion-reduce:animate-none [&_circle]:stroke-foreground [&_path]:stroke-[url(#compass-black)_#09090b] dark:[&_path]:stroke-[url(#compass-white)_#fafafa]"
            />
            <h1 className="select-none pb-1.5 pr-3 pt-1.5 font-serif text-xl md:py-0">
                <Translation path="navigation.logo" />
            </h1>
        </div>
    )
}
