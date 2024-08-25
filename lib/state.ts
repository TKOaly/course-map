import { type CourseNodeData } from '@/components/flow/CourseNode'
import { atom } from 'jotai'
import { type MutableRefObject } from 'react'

export const fullscreenElementAtom =
    atom<MutableRefObject<HTMLDivElement | null> | null>(null)

export const isFullscreenAtom = atom(false)

export const selectedCourseAtom = atom<CourseNodeData | undefined>(undefined)
