import { type CourseData } from './courses'

export const getEdges = (courses: CourseData[]) =>
    courses.flatMap((course) =>
        (course.prerequisites ?? []).map((prerequisite) => ({
            id: `${course.id}-${prerequisite.id}`,
            source: course.id,
            target: prerequisite.id,
            animated: true,
            type: 'smoothstep',
        }))
    )
