'use client'

import { selectedCourseAtom } from '@/lib/state'
import { useBreakpoint } from '@/lib/tailwind'
import dagre from '@dagrejs/dagre'
import { Background, Position, ReactFlow, useReactFlow } from '@xyflow/react'
import { useSetAtom } from 'jotai'
import { CourseNode } from './CourseNode'

import { type CourseEdgeType } from '@/lib/edges'
import { type CourseNodeType } from '@/lib/nodes'
import '@xyflow/react/dist/style.css'
import { useEffect, useState } from 'react'
import { CourseEdge } from './CourseEdge'
import { type CourseNodeData } from './CourseLoader'

const nodeWidth = 350
const nodeHeight = 60

const getLayoutedElements = (
    nodes: CourseNodeType[],
    edges: CourseEdgeType[]
) => {
    const dagreGraph = new dagre.graphlib.Graph()
    dagreGraph.setGraph({ rankdir: 'LR' })
    dagreGraph.setDefaultEdgeLabel(() => ({}))

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, {
            width: nodeWidth,
            height: nodeHeight,
        })
    })

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target)
    })

    dagre.layout(dagreGraph)

    const newNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id)
        const newNode = {
            ...node,
            targetPosition: Position.Left,
            sourcePosition: Position.Right,
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
    const reactFlow = useReactFlow()

    const [{ nodes, edges }, setLayout] = useState(
        getLayoutedElements(courseNodeData.nodes, courseNodeData.edges)
    )

    useEffect(() => {
        const elements = getLayoutedElements(
            courseNodeData.nodes,
            courseNodeData.edges
        )
        setLayout(elements)

        const fitView = async () => {
            await reactFlow.fitView({ duration: 750 })
        }

        // Only move the view if the number of nodes has changed
        setTimeout(() => {
            void fitView()
        }, 50)
    }, [courseNodeData, reactFlow, isMobile])

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
