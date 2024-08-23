import { type Prerequisite } from '@/degrees/enums'
import { type Course } from '@/degrees/types'
import { Handle, type Node, type NodeProps, Position } from '@xyflow/react'

export type CourseNodeData = Course & {
    code: string
    prerequisites?: {
        courseCode: string
        prerequisiteType: Prerequisite
    }[]
}

export type CourseNodeType = Node<CourseNodeData, 'course'>

export const CourseNode = ({ data: course }: NodeProps<CourseNodeType>) => {
    const { name, credits, code } = course

    return (
        <>
            <Handle type="target" position={Position.Left} />
            <div className="rounded border-0 bg-[#9bc8b2] ring-2 ring-[#9bc8b2] hover:ring-4">
                <div className="flex items-center justify-between">
                    <div className="flex h-full flex-col items-center justify-center bg-[#9bc8b2] px-3 text-primary dark:text-primary-foreground">
                        <p className="-mb-2 font-semibold">{credits ?? '-'}</p>
                        <p className="text-sm text-primary/70 dark:text-primary-foreground/70">
                            op
                        </p>
                    </div>
                    <div className="flex flex-col rounded bg-background p-2 pr-3">
                        <label className="text-xs text-foreground/70">
                            {code}
                        </label>
                        <h2 className="max-w-48 break-words text-sm">{name}</h2>
                    </div>
                </div>
            </div>
            <Handle type="source" position={Position.Right} />
        </>
    )
}
