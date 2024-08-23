import { type CourseNodeType } from '@/components/flow/CourseNode'

export const getEdges = (nodes: CourseNodeType[]) =>
    nodes.flatMap((node) =>
        (node.data.prerequisites ?? []).map((prerequisite) => ({
            id: `${node.id}-${prerequisite.courseCode}`,
            source: node.id,
            target: prerequisite.courseCode,
            animated: true,
        }))
    )
