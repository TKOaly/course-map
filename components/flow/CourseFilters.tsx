'use client'

import { CourseGroup } from '@/data/enums'
import { type CourseNodeType } from '@/lib/nodes'
import { courseDataAtom, searchAtom } from '@/lib/state'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { pipe } from 'remeda'
import { CourseFlow } from './CourseFlow'
import { type CourseNodeData } from './CourseLoader'

type FilterFunction = (courseNodeData: CourseNodeData) => CourseNodeData

const searchNodes =
    (searchString: string): FilterFunction =>
    ({ nodes, edges }) => {
        const nodefilter = (node: CourseNodeType) =>
            node.data.code.toLowerCase().includes(searchString.toLowerCase()) ||
            node.data.id.toLowerCase().includes(searchString.toLowerCase())

        const searchedNodes = nodes.filter(nodefilter).map((node) =>
            nodefilter(node)
                ? node
                : {
                      ...node,
                      data: {
                          ...node.data,
                          group: CourseGroup.PLACEHOLDER,
                      },
                  }
        )

        const searchedNodeIds = new Set(searchedNodes.map((node) => node.id))

        const searchedEdges = edges.filter(
            (edge) =>
                searchedNodeIds.has(edge.source) &&
                searchedNodeIds.has(edge.target)
        )

        return { nodes: searchedNodes, edges: searchedEdges }
    }

export const CourseFilters = ({
    courseNodeData,
}: {
    courseNodeData: CourseNodeData
}) => {
    const setCourseData = useSetAtom(courseDataAtom)
    const searchString = useAtomValue(searchAtom)

    useEffect(() => {
        setCourseData(courseNodeData.nodes.map((node) => node.data))
    }, [courseNodeData, setCourseData])

    return (
        <CourseFlow
            courseNodeData={pipe(courseNodeData, searchNodes(searchString))}
        />
    )
}
