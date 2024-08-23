import { type CourseNodeData } from '@/components/flow/CourseNode'
import { atom } from 'jotai'

export const selectedCourseAtom = atom<CourseNodeData | undefined>(undefined)
