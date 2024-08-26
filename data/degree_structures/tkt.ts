import { CourseGroup, Necessity } from '../enums'
import { Id } from '../ids'
import { type DegreeStructures } from '../types'

export const structures: DegreeStructures = {
    '23-26': {
        name: 'Opetussuunnitelma 2023-2026',
        groups: [
            {
                type: CourseGroup.BASIC,
                necessity: Necessity.COMPULSORY,
                courses: [Id.TKT10002, Id.TKT10003],
                description: 'Pakolliset perusopinnot',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.COMPULSORY,
                courses: [Id.TKT200011, Id.TKT200012],
                description: 'Pakolliset aineopinnot',
            },
            {
                type: CourseGroup.ALTERANTIVE,
                necessity: Necessity.COMPULSORY,
                courses: [Id.MAT11001],
                description: 'Vaihtoehtoinen opintokokonaisuus',
            },
            {
                type: CourseGroup.PLACEHOLDER,
                necessity: Necessity.OPTIONAL,
                courses: [Id.TKT210241, Id.TKT210242, Id.TKT210243],
                description: 'placeholders',
            },
        ],
    },
} as const
