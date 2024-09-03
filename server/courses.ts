import { courses } from '@/data/courses'
import { descriptions } from '@/data/descriptions'
import { Necessity, Prerequisite } from '@/data/enums'
import { type Id } from '@/data/ids'
import { type DegreeStructure } from '@/data/types'
import { type CourseData } from '@/lib/types'
import { typedOptionalEntries } from '@/lib/typeUtils'

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
                        .filter(([, prerequisite]) =>
                            Object.values(Prerequisite).includes(prerequisite)
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
                        /(?<=courseunit\/)(?:otm|hy-CU)(?:-|[a-z0-9])*(?=\/|)/m
                    ) ?? [undefined])[0],
                }))
        )
        .flat()
}
