import { type CourseGroup, type Prerequisite } from '@/data/enums'
import { type Id } from '@/data/ids'
import { type Course } from '@/data/types'
import { type Edge, type Node } from '@xyflow/react'

// Type of the course data used in the frontend / layout engine
export type CourseData = Omit<Course, 'prerequisites' | 'equivalents'> & {
    id: Id // Course name
    prerequisites: { id: Id; necessity: Prerequisite }[]
    equivalents: (Course & { id: Id; group: CourseGroup })[]
    linkId?: string
    group: CourseGroup
    disabled?: boolean
    description: string
    mandatory?: boolean
    module?: string
}

export type CourseNodeType = Node<CourseData, 'course'>

export type EdgeData = {
    necessity: Prerequisite
}

export type CourseEdgeType = Edge<EdgeData, 'course'>
