import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { type MutableRefObject } from 'react'
import { type CourseData } from './types'
import { DegreeCode } from '@/data/enums'

export const fullscreenElementAtom =
    atom<MutableRefObject<HTMLDivElement | null> | null>(null)

export const isFullscreenAtom = atom(false)

export const selectedCourseAtom = atom<CourseData | undefined>(undefined)

export const searchAtom = atom('')

export const courseDataAtom = atom<CourseData[]>([])

export const selectedDegreeAtom = atomWithStorage<{
    degree: DegreeCode
    structure: string | undefined
}>(
    'selectedDegree',
    {
        degree: DegreeCode.TKT,
        structure: undefined,
    },
    undefined,
    {
        getOnInit: true,
    }
)
