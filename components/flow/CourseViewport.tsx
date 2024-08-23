'use client'

import { Background, ReactFlow, type ReactFlowProps } from '@xyflow/react'
import { useMemo } from 'react'
import { CourseNode } from './CourseNode'

const testCourses: ReactFlowProps['nodes'] = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { label: 'Ohjelmoinnin perusteet' },
    },
    {
        id: '2',
        position: { x: 300, y: 0 },
        data: { label: 'Ohjelmoinnin jatkokurssi' },
    },
    {
        id: '3',
        position: { x: 600, y: 0 },
        data: { label: 'Tietorakenteet ja algoritmit' },
    },
    {
        id: '4',
        position: { x: 900, y: 0 },
        data: { label: 'Tietorakenteet ja algoritmit: harjoitustyö' },
    },
    {
        id: '5',
        position: { x: 900, y: 150 },
        data: { label: 'Algoritmit ongelmanratkaisussa' },
    },
].map((course) => ({ ...course, type: 'course' }))

const testEdges = [
    { id: '1-2', source: '1', target: '2' },
    { id: '2-3', source: '2', target: '3' },
    { id: '3-4', source: '3', target: '4' },
    { id: '3-5', source: '3', target: '5' },
]

const CourseViewport = () => {
    const nodeTypes = useMemo(() => ({ course: CourseNode }), [])

    return (
        <ReactFlow
            minZoom={0.1}
            nodeTypes={nodeTypes}
            nodes={testCourses}
            edges={testEdges}
            attributionPosition="bottom-left"
            panOnDrag
            zoomOnPinch
            fitView
            nodesConnectable={false}
            nodesFocusable={false}
            edgesFocusable={false}
            onNodeClick={(event, node) => console.log('click', node)}
            edgesReconnectable={false}
            nodesDraggable={false}
            className="size-full"
        >
            <Background color="#777" />
        </ReactFlow>
    )
}

export default CourseViewport
