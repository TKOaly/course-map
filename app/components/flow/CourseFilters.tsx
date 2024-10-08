'use client'

import { courseDataAtom, searchAtom } from '@/lib/state'
import { type CourseNodeType } from '@/lib/types'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { pipe } from 'remeda'
import { CourseFlow } from './CourseFlow'
import { type CourseNodeData } from './CourseLoader'

type FilterFunction = (courseNodeData: CourseNodeData) => CourseNodeData

/**
 * Recursively get all prerequisites for a course and flatten them into a list.
 */
const getPrerequisites = (
    edges: CourseNodeData['edges'],
    id: string,
    origin: string
): string[] => {
    const prerequisites = edges
        .filter((edge) => edge.target === id)
        .map((edge) => edge.source)

    const prerequisitesOfPrerequisites = prerequisites
        .filter((prerequisite) => prerequisite !== origin)
        .flatMap((prerequisite) =>
            getPrerequisites(edges, prerequisite, origin)
        )

    return [...prerequisites, ...prerequisitesOfPrerequisites]
}

/**
 * Filter function that searches for courses based on their code, id, or nicknames.
 */
const searchNodes =
    (searchString: string): FilterFunction =>
    ({ nodes, edges }) => {
        if (!searchString || searchString === '') {
            return { nodes, edges }
        }

        const nodefilter = (node: CourseNodeType) =>
            node.data.code.toLowerCase().includes(searchString.toLowerCase()) ||
            node.data.id.toLowerCase().includes(searchString.toLowerCase()) ||
            (node.data.nicknames ?? [])
                .join(' ')
                .toLowerCase()
                .includes(searchString.toLowerCase())

        const matches = nodes.filter(nodefilter).map((node) => node.id)

        const prerequisites = matches.flatMap((match) =>
            getPrerequisites(edges, match, match)
        )

        const toBeIncluded = new Set([...matches, ...prerequisites])

        const origins = new Set(matches)

        const searchedNodes = nodes
            .filter((node) => toBeIncluded.has(node.id))
            .map((node) =>
                origins.has(node.id)
                    ? node
                    : {
                          ...node,
                          data: {
                              ...node.data,
                              disabled: true,
                          },
                      }
            )

        const searchedEdges = edges.filter(
            (edge) =>
                toBeIncluded.has(edge.source) && toBeIncluded.has(edge.target)
        )

        return { nodes: searchedNodes, edges: searchedEdges }
    }

/**
 * In-between component that filters the course data based on the search string.
 */
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
