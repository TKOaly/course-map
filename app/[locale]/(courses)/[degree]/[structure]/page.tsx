import { CourseLoader } from '@/components/flow/CourseLoader'
import { CourseInfoContainer } from '@/components/info/CourseInfoContainer'
import { Fullscreen } from '@/components/navigation/Fullscreen'
import { type DegreeCode } from '@/data/enums'

export default function CourseMap({
    params: { degree, structure },
}: Readonly<{
    params: {
        degree: DegreeCode
        structure: string
    }
}>) {
    return (
        <Fullscreen>
            <CourseInfoContainer>
                <CourseLoader degree={degree} structure={structure} />
            </CourseInfoContainer>
        </Fullscreen>
    )
}
