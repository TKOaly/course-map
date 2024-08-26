import { CourseGroup } from '@/data/enums'
import { type CourseNodeType } from '@/lib/nodes'
import { Handle, type NodeProps, Position } from '@xyflow/react'

export const CourseNode = ({ data: course }: NodeProps<CourseNodeType>) => {
    return (
        <>
            <Handle type="target" position={Position.Left} />
            <div
                className={`bg-course-${course.group ?? CourseGroup.PLACEHOLDER} ring-course-${course.group ?? CourseGroup.PLACEHOLDER} rounded border-0 ring-2 hover:ring-4`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex h-full flex-col items-center justify-center px-3 text-primary dark:text-primary-foreground">
                        <p className="-mb-2 font-semibold">
                            {course.credits ?? '-'}
                        </p>
                        <p className="text-sm text-primary/80 dark:text-primary-foreground/80">
                            op
                        </p>
                    </div>
                    <div className="flex flex-col rounded bg-background p-2 pr-3">
                        <label className="text-xs text-foreground/70">
                            {course.code}
                        </label>
                        <h2 className="w-48 break-words text-sm">
                            {course.id /* course name */}
                        </h2>
                    </div>
                </div>
            </div>
            <Handle type="source" position={Position.Right} />
        </>
    )
}
