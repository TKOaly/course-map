import { courses } from '@/data/courses'
import { type CourseGroup, Prerequisite } from '@/data/enums'
import { type Id } from '@/data/ids'
import { type Course, type DegreeStructure } from '@/data/types'
import { typedOptionalEntries } from './typeUtils'

// Type of the course data used in the frontend / layout engine
export type CourseData = Course & {
    id: Id // Course name
    prerequisites: { id: Id; necessity: Prerequisite }[]
    group: CourseGroup
}

export const getCourses = (degreeStructure: DegreeStructure): CourseData[] => {
    const includedCourses = new Set(
        degreeStructure.groups.map(({ courses }) => courses).flat(2)
    )

    const addedCourses = new Set<Id>()

    return degreeStructure.groups
        .map((group) =>
            group.courses
                .flat()
                .filter((id) => !addedCourses.has(id))
                .map((id) => ({
                    ...courses[id],
                    id,
                    prerequisites: typedOptionalEntries(
                        courses[id].prerequisites ?? {}
                    )
                        // Filter out undefined
                        .filter(
                            ([, prerequisite]) => prerequisite in Prerequisite
                        )
                        .filter(([id]) => includedCourses.has(id))
                        .map(([id, prerequisite]) => ({
                            id,
                            necessity: prerequisite,
                        })),
                    group: group.type,
                }))
        )
        .flat()
}
