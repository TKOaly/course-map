import { courses } from '@/data/courses'
import { CourseGroup, Prerequisite } from '@/data/enums'
import { type Id } from '@/data/ids'
import { type Course, type DegreeStructure } from '@/data/types'
import { map, pipe } from 'remeda'
import { typedEntries, typedOptionalEntries } from './typeUtils'

// Type of the course data used in the frontend / layout engine
export type CourseData = Course & {
    id: Id // Course name
    prerequisites: { id: Id; necessity: Prerequisite }[]
    group: CourseGroup
}

export const getCourses = (degreeStructure: DegreeStructure): CourseData[] =>
    pipe(
        courses,
        typedEntries,
        map(([id, course]) => ({
            ...course,
            id,
            prerequisites: typedOptionalEntries(course.prerequisites ?? {})
                // Filter out undefined
                .filter(([, prerequisite]) => prerequisite in Prerequisite)
                .map(([id, prerequisite]) => ({
                    id,
                    necessity: prerequisite,
                })),
            group:
                Object.values(CourseGroup)[
                    parseInt(course.code.slice(-1)) %
                        Object.values(CourseGroup).length
                ] ?? CourseGroup.OTHER,
        }))
    )
