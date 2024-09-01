'use server'

import { type DegreeCode } from '@/data/enums'
import { getCourses } from './courses'
import { getEdges } from './edges'
import { getCourseNodes } from './nodes'
import { getDegreeStructure } from './structures'

export const getFlowData = async (degree: DegreeCode, structure: string) => {
    const courses = getCourses(getDegreeStructure(degree, structure))

    return {
        nodes: getCourseNodes(courses),
        edges: getEdges(courses),
    }
}
