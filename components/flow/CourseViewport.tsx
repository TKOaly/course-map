'use client'

import { selectedCourseAtom } from '@/lib/state/course'
import { useBreakpoint } from '@/lib/tailwind'
import { Background, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useSetAtom } from 'jotai'
import { CourseNode } from './CourseNode'
import { testEdges, testNodes } from './testNodes'

// const courseNodes = getCourseNodes()
const courseNodes = testNodes
const coursePrequisites = testEdges

const nodeTypes = {
    course: CourseNode,
}

export const CourseViewport = () => {
    const selectCourse = useSetAtom(selectedCourseAtom)
    const isMobile = !useBreakpoint('md')

    return (
        <ReactFlow
            // Nodes
            nodes={courseNodes}
            nodeTypes={nodeTypes}
            onNodeClick={(_event, node) => selectCourse(node.data)}
            nodesDraggable={false}
            nodesConnectable={false}
            nodesFocusable={false}
            // Edges
            edges={coursePrequisites}
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
