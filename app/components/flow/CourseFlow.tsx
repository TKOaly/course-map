'use client'

import { selectedCourseAtom } from '@/lib/state'
import { useBreakpoint } from '@/lib/tailwind'
import { Background, Position, ReactFlow, useReactFlow } from '@xyflow/react'
import { useSetAtom } from 'jotai'
import { CourseNode } from './CourseNode'

import '@xyflow/react/dist/style.css'
import { useEffect, useState } from 'react'
import { CourseEdge } from './CourseEdge'
import { type CourseNodeData } from './CourseLoader'

import { type CourseEdgeType, type CourseNodeType } from '@/lib/types'
import ELK from 'elkjs'

const nodeWidth = 350
const nodeHeight = 80

const elk = new ELK()

/**
 * Layout the nodes and edges of the course graph.
 * Uses the ELK.js layout engine to figure out the best positions for the nodes.
 */
const getLayoutedNodes = async (
    nodes: CourseNodeType[],
    edges: CourseEdgeType[]
) => {
    const graph = {
        id: 'root',
        layoutOptions: {
            'elk.algorithm': 'layered',
            'elk.direction': 'RIGHT',
            separateConnectedComponents: 'false',
            'elk.layered.nodePlacement.bk.fixedAlignment': 'BALANCED',
            'elk.layered.crossingMinimization.forceNodeModelOrder': 'false',
            'elk.layered.crossingMinimization.semiInteractive': 'true',
        },
        children: nodes.map((node) => {
            return {
                id: node.id,
                width: nodeWidth,
                height: nodeHeight,
                targetPosition: Position.Left,
                sourcePosition: Position.Right,
                layoutOptions: {
                    'portAlignment.default': 'CENTER',
                    portConstraints: 'FIXED_SIDE',
                },
            }
        }),
        edges: edges.map((edge) => ({
            id: edge.id,
            sources: [edge.source],
            targets: [edge.target],
        })),
    }

    const layoutedGraph = await elk.layout(graph)

    return nodes.map((node) => {
        const layoutedNode = layoutedGraph.children?.find(
            (elkNode) => elkNode.id === node.id
        )
        return {
            ...node,
            position: {
                x: layoutedNode?.x ?? 0,
                y: layoutedNode?.y ?? 0,
            },
        }
    })
}

const nodeTypes = {
    course: CourseNode,
}

const edgeTypes = {
    course: CourseEdge,
}

/**
 * Displays the course graph based on the provided course nodes.
 */
export const CourseFlow = ({
    courseNodeData,
}: {
    courseNodeData: CourseNodeData
}) => {
    const selectCourse = useSetAtom(selectedCourseAtom)
    const isMobile = !useBreakpoint('md')
    const { fitView } = useReactFlow()

    const [{ nodes, edges }, setLayout] = useState<CourseNodeData>({
        nodes: [],
        edges: [],
    })

    useEffect(() => {
        const layoutNodes = async () => {
            const layoutedNodes = await getLayoutedNodes(
                courseNodeData.nodes,
                courseNodeData.edges
            )

            setLayout({ nodes: layoutedNodes, edges: courseNodeData.edges })
        }

        void layoutNodes().then(async () =>
            setTimeout(() => {
                void fitView({ duration: 750 })
            }, 30)
        )

        // Only move the view if the number of nodes has changed
    }, [fitView, courseNodeData])

    return (
        <ReactFlow
            // Nodes
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodeClick={(_event, node) => {
                console.log(node.data)
                selectCourse(node.data)
            }}
            nodesDraggable={false}
            nodesFocusable={false}
            nodesConnectable={false}
            // Edges
            edges={edges}
            edgeTypes={edgeTypes}
            edgesFocusable={false}
            edgesReconnectable={false}
            className="size-full"
            // Other config
            minZoom={0.2}
            panOnDrag
            zoomOnPinch
            fitView
            attributionPosition={isMobile ? 'top-right' : 'bottom-left'}
        >
            <Background color="#777" />
        </ReactFlow>
    )
}
