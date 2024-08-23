import { CourseCode } from './course_codes'
import { Method, Period } from './enums'
import { type Curriculum } from './types'

export const curriculum_24_25: Curriculum = {
    [CourseCode.TKT10002]: [
        {
            method: Method.LECTURE,
            period: Period.FIRST,
        },
    ],
    [CourseCode.TKT10003]: [
        {
            method: Method.LECTURE,
            period: Period.SECOND,
        },
    ],
    [CourseCode.TKT10004]: [
        {
            method: Method.LECTURE,
            period: Period.THIRD,
        },
        {
            method: Method.INDEPENDENT,
            period: Period.INTENSIVE_MAY,
        },
    ],
    [CourseCode.TKT10005]: [
        {
            method: Method.LECTURE,
            start: new Date('2025-01-12'),
            end: new Date('2025-05-15'),
        },
    ],
    [CourseCode.TKT200010]: [
        {
            method: Method.LECTURE,
            start: new Date('2025-01-12'),
            end: new Date('2025-05-15'),
        },
    ],
} as const
