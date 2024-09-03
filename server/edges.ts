import { type CourseData, type CourseEdgeType } from '@/lib/types'

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
