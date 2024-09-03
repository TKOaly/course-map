import { degrees } from '@/data'
import { DegreeCode } from '@/data/enums'
import { redirect } from 'next/navigation'

/**
 * Redirects to a default value, as user has navigated to the root of the app.
 */
const Landing = () =>
    redirect(
        `/${DegreeCode.TKT}/${Object.keys(degrees[DegreeCode.TKT].structures)[0]}`
    )

export default Landing
