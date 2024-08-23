import { type CourseNodeType } from '@/components/flow/CourseNode'
import { getAllCourses } from './courses'

export const getCourseNodes = (): CourseNodeType[] => {
    const courses = getAllCourses()

    return Object.entries(courses).map(([courseCode, course]) => ({
        id: courseCode,
        type: 'course',
        data: {
            ...course,
        },
        position: { x: Math.random() * 2000, y: Math.random() * 2000 },
    }))
}
