import { atom } from 'jotai'
import { type MutableRefObject } from 'react'
import { type CourseData } from './types'

export const fullscreenElementAtom =
    atom<MutableRefObject<HTMLDivElement | null> | null>(null)

export const isFullscreenAtom = atom(false)

export const selectedCourseAtom = atom<CourseData | undefined>(undefined)

export const searchAtom = atom('')

export const courseDataAtom = atom<CourseData[]>([])
