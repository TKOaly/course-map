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

import { type CourseEdgeType } from '@/lib/edges'
import { type CourseNodeType } from '@/lib/nodes'
import ELK from 'elkjs'

const nodeWidth = 350
const nodeHeight = 80

const elk = new ELK()

const layoutOptions = {
    'elk.algorithm': 'layered',
    'elk.direction': 'RIGHT',
    separateConnectedComponents: 'false',
    'elk.layered.nodePlacement.bk.fixedAlignment': 'BALANCED',
    'elk.layered.crossingMinimization.forceNodeModelOrder': 'false',
    'elk.layered.crossingMinimization.semiInteractive': 'true',
}

const getLayoutedNodes = async (
    nodes: CourseNodeType[],
    edges: CourseEdgeType[]
) => {
    const graph = {
        id: 'root',
        layoutOptions,
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
        edges: edges.map((e) => ({
            id: e.id,
            sources: [e.source],
            targets: [e.target],
        })),
    }

    const layoutedGraph = await elk.layout(graph)

    const layoutedNodes = nodes.map((node) => {
        const layoutedNode = layoutedGraph.children?.find(
            (lgNode) => lgNode.id === node.id
        )
        return {
            ...node,
            position: {
                x: layoutedNode?.x ?? 0,
                y: layoutedNode?.y ?? 0,
            },
        }
    })

    return layoutedNodes
}

const nodeTypes = {
    course: CourseNode,
}

const edgeTypes = {
    course: CourseEdge,
}

export const CourseFlow = ({
    courseNodeData,
}: {
    courseNodeData: CourseNodeData
}) => {
    const selectCourse = useSetAtom(selectedCourseAtom)
    const isMobile = !useBreakpoint('md')
    const { fitView, getViewport, setViewport } = useReactFlow()

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
            }, 10)
        )

        // Only move the view if the number of nodes has changed
    }, [fitView, courseNodeData, setViewport, getViewport])

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
            nodesFocusable={true}
            nodesConnectable={false}
            // Edges
            edges={edges}
            edgeTypes={edgeTypes}
            edgesFocusable={false}
            edgesReconnectable={false}
            className="size-full"
            // Other config
            minZoom={0.1}
            panOnDrag
            zoomOnPinch
            fitView
            attributionPosition={isMobile ? 'top-right' : 'bottom-left'}
        >
            <Background color="#777" />
        </ReactFlow>
    )
}
