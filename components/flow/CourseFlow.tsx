'use client'

import { DegreeCode } from '@/data/enums'
import { getFlowData } from '@/lib/flow'
import { selectedCourseAtom } from '@/lib/state'
import { useBreakpoint } from '@/lib/tailwind'
import dagre from '@dagrejs/dagre'
import { Background, ReactFlow } from '@xyflow/react'
import { useSetAtom } from 'jotai'
import { CourseNode } from './CourseNode'

import { type CourseEdgeType } from '@/lib/edges'
import { type CourseNodeType } from '@/lib/nodes'
import '@xyflow/react/dist/style.css'

const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const nodeWidth = 300
const nodeHeight = 100

const getLayoutedElements = (
    nodes: CourseNodeType[],
    edges: CourseEdgeType[]
) => {
    dagreGraph.setGraph({ rankdir: 'LR' })

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
    })

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target)
    })

    dagre.layout(dagreGraph)

    const newNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id)
        const newNode = {
            ...node,
            targetPosition: 'left',
            sourcePosition: 'right',
            // We are shifting the dagre node position (anchor=center center) to the top left
            // so it matches the React Flow node anchor point (top left).
            position: {
                x: nodeWithPosition.x - nodeWidth / 2,
                y: nodeWithPosition.y - nodeHeight / 2,
            },
        }

        return newNode
    })

    return { nodes: newNodes, edges }
}

const nodeTypes = {
    course: CourseNode,
}

export const CourseFlow = () => {
    const selectCourse = useSetAtom(selectedCourseAtom)
    const isMobile = !useBreakpoint('md')

    const { nodes, edges } = getFlowData(DegreeCode.TKT, '23-26')

    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        nodes,
        edges
    )

    return (
        <ReactFlow
            // Nodes
            nodes={layoutedNodes}
            nodeTypes={nodeTypes}
            onNodeClick={(_event, node) => {
                console.log(node.data)
                selectCourse(node.data)
            }}
            nodesDraggable={false}
            nodesFocusable={false}
            nodesConnectable={false}
            // Edges
            edges={layoutedEdges}
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
