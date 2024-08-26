import { type Node } from '@xyflow/react'
import { type CourseData } from './courses'

export type CourseNodeType = Node<CourseData, 'course'>

export const getCourseNodes = (courses: CourseData[]): CourseNodeType[] =>
    courses.map((course) => ({
        id: course.id,
        type: 'course',
        data: course,
        position: {
            x:
                (parseInt(course.code.substring(course.code.length - 2)) % 10) *
                300,
            y: Math.random() * 1500,
        },
    }))
