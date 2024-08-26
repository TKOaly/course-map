import { type Node, Position } from '@xyflow/react'
import { type CourseData } from './courses'

export type CourseNodeType = Node<CourseData, 'course'>

export const getCourseNodes = (courses: CourseData[]): CourseNodeType[] =>
    courses.map((course) => ({
        id: course.id,
        type: 'course',
        data: course,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {
            x: Math.random() * 1500,
            y: Math.random() * 1500,
        },
    }))
