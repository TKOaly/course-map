import { type ConnectionLineType } from '@xyflow/react'
import { type CourseData } from './courses'

export type CourseEdgeType = {
    id: string
    source: string
    target: string
    animated?: boolean
    type?: ConnectionLineType
}

export const getEdges = (courses: CourseData[]): CourseEdgeType[] =>
    courses.flatMap((course) =>
        (course.prerequisites ?? []).map((prerequisite) => ({
            id: `${prerequisite.id}-${course.id}`,
            source: prerequisite.id,
            target: course.id,
        }))
    )
