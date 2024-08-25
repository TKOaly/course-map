import { type CourseNodeType } from '@/components/flow/CourseNode'
import { Position } from '@xyflow/react'
import { getAllCourses } from './get-courses'

export const getCourseNodes = (): CourseNodeType[] => {
    const courses = getAllCourses()

    return Object.entries(courses).map(([courseCode, course]) => ({
        id: courseCode,
        type: 'course',
        data: {
            ...course,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {
            x:
                (parseInt(course.code.substring(course.code.length - 2)) % 10) *
                300,
            y: Math.random() * 1500,
        },
    }))
}
