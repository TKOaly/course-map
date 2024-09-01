'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { useTranslate } from '@/app/i18n'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

type OwnProps = {
    className?: string
}

export function ModeToggle({ className }: OwnProps) {
    const { setTheme } = useTheme()
    const t = useTranslate()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    aria-label="Choose display mode"
                    variant="outline"
                    size="icon"
                    className={cn(className)}
                >
                    <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="-mt-1">
                <DropdownMenuItem
                    onClick={() => setTheme('light')}
                    className="flex items-center"
                >
                    <Sun className="mr-2 h-4 w-4" />
                    {t.navigation.modeToggle.light}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                    className="flex items-center"
                >
                    <Moon className="mr-2 h-4 w-4" />
                    {t.navigation.modeToggle.dark}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('system')}
                    className="flex items-center"
                >
                    <Monitor className="mr-2 h-4 w-4" />
                    {t.navigation.modeToggle.system}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
