import { courses } from '@/data/courses'
import { descriptions } from '@/data/descriptions'
import { type CourseGroup, Necessity, Prerequisite } from '@/data/enums'
import { type Id } from '@/data/ids'
import { type Course, type DegreeStructure } from '@/data/types'
import { typedOptionalEntries } from './typeUtils'

// Type of the course data used in the frontend / layout engine
export type CourseData = Omit<Course, 'prerequisites' | 'equivalents'> & {
    id: Id // Course name
    prerequisites: { id: Id; necessity: Prerequisite }[]
    equivalents: (Course & { id: Id; group: CourseGroup })[]
    linkId?: string
    group: CourseGroup
    disabled?: boolean
    description: string
    mandatory?: boolean
    module?: string
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
                    equivalents: (courses[id].equivalents ?? []).map(
                        (equivalent) => ({
                            ...courses[equivalent],
                            id: equivalent,
                            group: group.type,
                        })
                    ),
                    group: group.type,
                    description: descriptions[id],
                    mandatory: group.necessity === Necessity.MANDATORY,
                    module: group.description,
                    // Extract the Sisu link ID from the URL to be used in dynamic studies link
                    linkId: (courses[id].sisuLink?.match(
                        /(?<=courseunit\/)otm(?:-|[a-z0-9])*(?=\/|)/m
                    ) ?? [undefined])[0],
                }))
        )
        .flat()
}
