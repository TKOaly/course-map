'use client'

import { Button } from '@/app/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu'
import { type Locale } from '@/app/i18n/settings'
import { cn } from '@/lib/utils'
import { Globe } from 'lucide-react'
import { useRouter, useSelectedLayoutSegments } from 'next/navigation'

type OwnProps = {
    className?: string
}

/**
 * Dropdown for selecting the site language.
 * Changes the URL to match the selected language.
 */
export function LanguageToggle({ className }: OwnProps) {
    const segments = useSelectedLayoutSegments()
    const router = useRouter()

    const setLocale = (locale: string) => {
        router.replace(
            `/${locale}/${segments.filter((segment) => !segment.startsWith('(')).join('/')}`
        )

        fetch('/api/locale', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ locale }),
        }).catch(console.error)
    }

    const options: { [key in Locale]: string } = { fi: 'Suomi', en: 'English' }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    aria-label="Choose language"
                    variant="outline"
                    size="icon"
                    className={cn(className)}
                >
                    <Globe className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
                    <span className="sr-only">Choose language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="-mt-1">
                {Object.entries(options).map(([locale, label]) => (
                    <DropdownMenuItem
                        key={locale}
                        onClick={() => setLocale(locale)}
                    >
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
