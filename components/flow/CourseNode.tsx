import { Handle, Position } from '@xyflow/react'

type OwnProps = {
    data: {
        label: string
    }
}

export const CourseNode = ({ data }: OwnProps) => {
    return (
        <div className="overflow-hidden rounded border-0 bg-[#9bc8b2] ring-2 ring-[#9bc8b2] hover:ring-4">
            <Handle type="target" position={Position.Left} />
            <div className="flex items-center justify-between">
                <div className="flex h-full flex-col items-center justify-center bg-[#9bc8b2] px-3 text-primary dark:text-primary-foreground">
                    <p className="-mb-2 font-semibold">5</p>
                    <p className="text-sm text-primary/70 dark:text-primary-foreground/70">
                        op
                    </p>
                </div>
                <div className="flex flex-col rounded bg-background p-2 pr-3">
                    <label className="text-xs text-foreground/70">
                        TKT10001
                    </label>
                    <h2 className="max-w-48 break-words text-sm">
                        {data.label}
                    </h2>
                </div>
            </div>
            <Handle type="source" position={Position.Right} />
        </div>
    )
}
