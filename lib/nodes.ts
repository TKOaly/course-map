import { type Node } from '@xyflow/react'
import { type CourseData } from './courses'

export type CourseNodeType = Node<CourseData, 'course'>

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
