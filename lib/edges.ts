import { type CourseData } from './courses'

export const getEdges = (courses: CourseData[]) =>
    courses.flatMap((course) =>
        (course.prerequisites ?? []).map((prerequisite) => ({
            id: `${prerequisite.id}-${course.id}`,
            source: prerequisite.id,
            target: course.id,
            animated: true,
            type: 'smoothstep',
        }))
    )
