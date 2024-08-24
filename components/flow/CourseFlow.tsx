'use client'

import { getFlowData } from '@/lib/get-flow-data'
import { selectedCourseAtom } from '@/lib/state/course'
import { useBreakpoint } from '@/lib/tailwind'
import { Background, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useSetAtom } from 'jotai'
import { CourseNode } from './CourseNode'

const { nodes, edges } = getFlowData()

const nodeTypes = {
    course: CourseNode,
}

export const CourseFlow = () => {
    const selectCourse = useSetAtom(selectedCourseAtom)
    const isMobile = !useBreakpoint('md')

    return (
        <ReactFlow
            // Nodes
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodeClick={(_event, node) => selectCourse(node.data)}
            nodesDraggable={false}
            nodesFocusable={false}
            nodesConnectable={false}
            // Edges
            edges={edges}
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
