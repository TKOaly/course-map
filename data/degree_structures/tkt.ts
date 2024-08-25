import { CourseCode } from '../course-codes'
import { CourseGroup } from '../enums'
import { type DegreeStructures } from '../types'

export const structures: DegreeStructures = {
    '23-26': {
        name: 'Opetussuunnitelma 2023-2026',
        groups: [
            {
                courseGroup: CourseGroup.BASIC,
                description: 'Pakolliset perusopinnot',
                compulsory: [CourseCode.TKT10002, CourseCode.TKT10003],
            },
            {
                courseGroup: CourseGroup.INTERMEDIATE,
                description: 'Pakolliset aineopinnot',
                compulsory: [CourseCode.TKT200011, CourseCode.TKT200012],
            },
            {
                courseGroup: CourseGroup.ALTERANTIVE,
                description: 'Vaihtoehtoinen opintokokonaisuus',
                compulsory: [CourseCode.MAT11001],
            },
        ],
    },
} as const
