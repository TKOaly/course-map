import { Method, Period } from './enums'
import { Id } from './ids'
import { type Curriculum } from './types'

export const curriculum_24_25: Curriculum = {
    [Id.TKT10002]: [
        {
            method: Method.LECTURE,
            period: Period.FIRST,
        },
    ],
    [Id.TKT10003]: [
        {
            method: Method.LECTURE,
            period: Period.SECOND,
        },
    ],
    [Id.TKT10004]: [
        {
            method: Method.LECTURE,
            period: Period.THIRD,
        },
        {
            method: Method.INDEPENDENT,
            period: Period.INTENSIVE_MAY,
        },
    ],
    [Id.TKT10005]: [
        {
            method: Method.LECTURE,
            start: new Date('2025-01-12'),
            end: new Date('2025-05-15'),
        },
    ],
    [Id.TKT20001]: [
        {
            method: Method.LECTURE,
            start: new Date('2025-01-12'),
            end: new Date('2025-05-15'),
        },
    ],
} as const
