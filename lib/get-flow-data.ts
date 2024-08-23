import { getEdges } from './get-edges'
import { getCourseNodes } from './get-nodes'

export const getFlowData = () => {
    const courseNodes = getCourseNodes()
    return {
        nodes: courseNodes,
        edges: getEdges(courseNodes),
    }
}
