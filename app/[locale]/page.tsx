import { degrees } from '@/data'
import { DegreeCode } from '@/data/enums'
import { redirect } from 'next/navigation'

const Landing = () =>
    redirect(
        `/${DegreeCode.TKT}/${Object.keys(degrees[DegreeCode.TKT].structures)[0]}`
    )

export default Landing