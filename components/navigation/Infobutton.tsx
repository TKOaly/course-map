'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'
import { Sheet, SheetTrigger } from '../ui/sheet'

type OwnProps = {
    className?: string
}

export const InfoButton = ({ className }: OwnProps) => (
    <Sheet>
        <SheetTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                className={cn(
                    'flex w-fit items-center justify-between gap-2 border-border px-3',
                    className
                )}
            >
                <Info className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            </Button>
        </SheetTrigger>
    </Sheet>
)
