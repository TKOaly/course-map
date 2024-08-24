'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Globe } from 'lucide-react'

type OwnProps = {
    className?: string
}

export function LanguageToggle({ className }: OwnProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className={cn(className)}>
                    <Globe className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
                    <span className="sr-only">Choose language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="-mt-1">
                <DropdownMenuItem onClick={() => true}>Suomi</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
