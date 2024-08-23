'use client'

import { Background, ReactFlow } from '@xyflow/react'
import { CourseNode, type CourseNodeProps } from './CourseNode'

const testCourses: CourseNodeProps[] = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: {
            name: 'Ohjelmoinnin perusteet',
            credits: 5,
        },
    },
    {
        id: '2',
        position: { x: 300, y: 0 },
        data: {
            name: 'Ohjelmoinnin jatkokurssi',
            credits: 5,
        },
    },
    {
        id: '3',
        position: { x: 600, y: 0 },
        data: {
            name: 'Tietorakenteet ja algoritmit',
            credits: 5,
        },
    },
    {
        id: '4',
        position: { x: 900, y: 0 },
        data: {
            name: 'Tietorakenteet ja algoritmit: harjoitustyö',
            credits: 5,
        },
    },
    {
        id: '5',
        position: { x: 900, y: 150 },
        data: {
            name: 'Algoritmit ongelmanratkaisussa',
            credits: 5,
        },
    },
].map((course) => ({ ...course, type: 'course' }))

const testEdges = [
    { id: '1-2', source: '1', target: '2' },
    { id: '2-3', source: '2', target: '3' },
    { id: '3-4', source: '3', target: '4' },
    { id: '3-5', source: '3', target: '5' },
]

const nodeTypes = {
    course: CourseNode,
}

export const CourseViewport = () => {
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
