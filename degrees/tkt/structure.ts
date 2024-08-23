import { CourseCode } from '../course-codes'
import { CourseGroup } from '../enums'
import { type DegreeStructures } from '../types'

export const structures: DegreeStructures = {
    '20-23': {
        name: 'Opetussuunnitelma 2020-2023',
        groups: [
            {
                courseGroup: CourseGroup.BASIC,
                description: 'Pakolliset perusopinnot',
                compulsory: [
                    CourseCode.TKT10002,
                    CourseCode.TKT10003,
                    CourseCode.TKT10004,
                    CourseCode.TKT10005,
                    CourseCode.TKT200010,
                ],
            },
            {
                courseGroup: CourseGroup.BASIC,
                description: 'Johdatus tietojenkäsittelytieteeseen',
                selectable: [[CourseCode.TKT200011], [CourseCode.TKT20005]],
            },
        ],
    },
} as const
