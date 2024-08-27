import { DegreeCode } from '@/data/enums'
import { type CourseEdgeType } from '@/lib/edges'
import { getFlowData } from '@/lib/flow'
import { type CourseNodeType } from '@/lib/nodes'
import { CourseFilters } from './CourseFilters'

export type CourseNodeData = {
    nodes: CourseNodeType[]
    edges: CourseEdgeType[]
}

export const CourseLoader = () => {
    const courseData = getFlowData(DegreeCode.TKT, '23-26')

    return <CourseFilters courseNodeData={courseData} />
}
