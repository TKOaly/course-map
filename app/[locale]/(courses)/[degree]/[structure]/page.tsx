import { CourseLoader } from '@/app/components/flow/CourseLoader'
import { CourseInfoContainer } from '@/app/components/info/CourseInfoContainer'
import { Fullscreen } from '@/app/components/navigation/Fullscreen'
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
