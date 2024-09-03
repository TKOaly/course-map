import { type DegreeCode } from '@/data/enums'
import { type CourseEdgeType, type CourseNodeType } from '@/lib/types'
import { getFlowData } from '@/server/flow'
import { notFound } from 'next/navigation'
import { CourseFilters } from './CourseFilters'

export type CourseNodeData = {
    nodes: CourseNodeType[]
    edges: CourseEdgeType[]
}

type OwnProps = {
    degree: DegreeCode
    structure: string
}

export const CourseLoader = async ({ degree, structure }: OwnProps) => {
    const courseData = await getFlowData(degree, structure)

    if (!courseData) {
        notFound()
    }

    return <CourseFilters courseNodeData={courseData} />
}
