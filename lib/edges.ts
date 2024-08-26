import { Prerequisite } from '@/data/enums'
import { type CourseData } from './courses'

export type CourseEdgeType = {
    id: string
    source: string
    target: string
    animated: boolean
}

const prerequisiteColors: { [key in Prerequisite]: string } = {}

export const getEdges = (courses: CourseData[]): CourseEdgeType[] =>
    courses.flatMap((course) =>
        (course.prerequisites ?? []).map((prerequisite) => ({
            id: `${prerequisite.id}-${course.id}`,
            source: prerequisite.id,
            target: course.id,
            color:
                prerequisite.necessity === Prerequisite.MANDATORY
                    ? 'red'
                    : 'blue',
            animated: true,
        }))
    )
