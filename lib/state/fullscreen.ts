import { atom } from 'jotai'
import { type MutableRefObject } from 'react'

export const fullscreenElementAtom =
    atom<MutableRefObject<HTMLDivElement | null> | null>(null)

export const isFullscreenAtom = atom(false)
