import { CourseCode } from '@/degrees/course-codes'

export const testEdges = [
    {
        id: `${CourseCode.TKT10002}-${CourseCode.TKT10003}`,
        source: CourseCode.TKT10002,
        target: CourseCode.TKT10003,
    },
    {
        id: `${CourseCode.TKT10003}-${CourseCode.TKT200011}`,
        source: CourseCode.TKT10003,
        target: CourseCode.TKT200011,
    },
    {
        id: `${CourseCode.TKT200011}-${CourseCode.TKT200012}`,
        source: CourseCode.TKT200011,
        target: CourseCode.TKT200012,
    },
    {
        id: `${CourseCode.MAT11001}-${CourseCode.TKT200011}`,
        source: CourseCode.MAT11001,
        target: CourseCode.TKT200011,
    },
]
