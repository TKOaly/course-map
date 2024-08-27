import { type Prerequisite } from '@/data/enums'
import { type Edge } from '@xyflow/react'
import { type CourseData } from './courses'

export type EdgeData = {
    necessity: Prerequisite
}

export type CourseEdgeType = Edge<EdgeData, 'course'>

export const getEdges = (courses: CourseData[]): CourseEdgeType[] =>
    courses.flatMap((course) =>
        (course.prerequisites ?? []).map((prerequisite) => ({
            id: `${prerequisite.id}-${course.id}`,
            source: prerequisite.id,
            target: course.id,
            type: 'course',
            data: {
                necessity: prerequisite.necessity,
            },
        }))
    )
