'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowDownToLine } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

type OwnProps = {
    includeText?: boolean
    className?: string
}

export function InstallButton({ includeText = false, className }: OwnProps) {
    const searchParams = useSearchParams()
    if (searchParams.get('source') === 'pwa') return null

    return (
        <Button
            variant="outline"
            size="icon"
            className={cn(
                'flex w-fit items-center justify-between gap-2 border-border px-3',
                className
            )}
        >
            <ArrowDownToLine className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            {includeText && <p>Install App</p>}
        </Button>
    )
}
