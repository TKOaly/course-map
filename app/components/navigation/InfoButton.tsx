'use client'

import { Button } from '@/app/components/ui/button'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'
import { AppInfo } from '../info/AppInfo'
import { Sheet, SheetTrigger } from '../ui/sheet'

type OwnProps = {
    className?: string
}

/**
 * Button to toggle the info panel.
 */
export const InfoButton = ({ className }: OwnProps) => (
    <Sheet>
        <SheetTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                aria-label="Open site info panel"
                className={cn(
                    'flex w-fit items-center justify-between gap-2 border-border px-3',
                    className
                )}
            >
                <Info className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            </Button>
        </SheetTrigger>
        <AppInfo />
    </Sheet>
)
