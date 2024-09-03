import { CourseGroup, Necessity } from '../enums'
import { Id } from '../ids'
import { type DegreeStructures } from '../types'

export const structures: DegreeStructures = {
    '23-26': {
        name: 'Opetussuunnitelma 2023-2026',
        shortName: 'OPS 23-26',
        groups: [
            {
                type: CourseGroup.BASIC,
                necessity: Necessity.MANDATORY,
                courses: [Id.DATA11001],
                description: 'Pakolliset perusopinnot',
            },
        ],
    },
} as const
