import { degrees } from '@/data'
import { type DegreeCode } from '@/data/enums'
import { redirect } from 'next/navigation'

// TODO: Show a proper error page for cases where user has input
// an invalid degree code in the URL. This may even be due to an
// outdated link, so we should handle this gracefully.
export default function CourseMap({
    params: { degree },
}: Readonly<{
    params: {
        degree: DegreeCode
    }
}>) {
    const degreeData = degrees[degree]

    if (!degreeData) {
        redirect('/')
    }

    const structure = Object.keys(degreeData.structures)[0]

    if (!structure) {
        redirect('/')
    }

    redirect(`/${degree}/${structure}`)
}
