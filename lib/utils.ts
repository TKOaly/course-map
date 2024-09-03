import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Fixes an issue where shadcdn does not properly handle touch events on mobile.
 * https://github.com/TKOaly/course-map/issues/28
 * https://github.com/shadcn-ui/ui/issues/486
 */
export function mobileHookHack(ref: HTMLElement | null) {
    if (!ref) return
    ref.ontouchstart = (e) => {
        e.preventDefault()
    }
}
