import { type CourseEdgeType } from '@/lib/edges'
import {
    BaseEdge,
    type EdgeProps,
    getSimpleBezierPath,
    Position,
} from '@xyflow/react'

export const CourseEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    data,
}: EdgeProps<CourseEdgeType>) => {
    const [edgePath] = getSimpleBezierPath({
        sourceX: sourceX - 1,
        sourceY,
        targetX: targetX + 1,
        targetY,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    })

    return (
        <BaseEdge
            id={id}
            path={edgePath}
            className={`stroke-${data?.necessity}`}
        />
    )
}
