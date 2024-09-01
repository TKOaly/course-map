import { type CourseData, type CourseNodeType } from '@/lib/types'

export const getCourseNodes = (courses: CourseData[]): CourseNodeType[] =>
    courses.map((course) => ({
        id: course.id,
        type: 'course',
        data: course,
        position: {
            x: 0,
            y: 0,
        },
    }))
