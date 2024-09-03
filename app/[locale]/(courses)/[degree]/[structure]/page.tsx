import { CourseLoader } from '@/app/components/flow/CourseLoader'
import { CourseInfoContainer } from '@/app/components/info/CourseInfoContainer'
import { Fullscreen } from '@/app/components/navigation/Fullscreen'
import { type DegreeCode } from '@/data/enums'

/**
 * Loads the course data and displays it in a fullscreen container.
 * This will slot into the main layout's content area, underneath the navigation.
 */
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
