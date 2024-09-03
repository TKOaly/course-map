'use server'

import { type DegreeCode } from '@/data/enums'
import { getCourses } from './courses'
import { getEdges } from './edges'
import { getCourseNodes } from './nodes'
import { getDegreeStructure } from './structures'

export const getFlowData = async (
    degreeCode: DegreeCode,
    structure: string
) => {
    const degree = getDegreeStructure(degreeCode, structure)

    if (!degree) {
        return undefined
    }

    const courses = getCourses(degree)

    return {
        nodes: getCourseNodes(courses),
        edges: getEdges(courses),
    }
}
