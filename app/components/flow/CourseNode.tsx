import { CourseGroup } from '@/data/enums'
import { type CourseNodeType } from '@/lib/types'
import { Handle, type NodeProps, Position } from '@xyflow/react'

export const CourseNode = ({ data: course }: NodeProps<CourseNodeType>) => {
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                className="!border-0 !bg-transparent"
            />
            <div
                className={`${course.disabled ? 'bg-zinc-300 dark:bg-zinc-800' : 'bg-course-' + (course.group ?? CourseGroup.PLACEHOLDER)} ${course.disabled ? 'ring-zinc-300 dark:ring-zinc-800' : 'ring-course-' + (course.group ?? CourseGroup.PLACEHOLDER)} rounded border-0 ring-2 hover:ring-4`}
            >
                <div className="flex items-center justify-between">
                    <div
                        className={`flex h-full flex-col items-center justify-center px-3 ${course.disabled ? 'text-muted-foreground/80 dark:text-muted-foreground' : 'text-primary dark:text-primary-foreground'}`}
                    >
                        <p className="-mb-2 font-semibold">
                            {course.credits ?? '-'}
                        </p>
                        <p className="text-sm">op</p>
                    </div>
                    <div className="flex flex-col rounded bg-background p-2 pr-3">
                        <label
                            className={`text-xs ${course.disabled ? 'text-muted-foreground dark:text-muted-foreground' : 'text-foreground/70'}`}
                        >
                            {course.code}
                        </label>
                        <h2
                            className={`w-48 break-words text-sm ${course.disabled && 'text-muted-foreground dark:text-muted-foreground'}`}
                        >
                            {course.id /* course name */}
                        </h2>
                    </div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="!border-0 !bg-transparent"
            />
        </>
    )
}
