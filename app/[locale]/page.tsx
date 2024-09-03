'use client'

import { degrees } from '@/data'
import { selectedDegreeAtom } from '@/lib/state'
import { useAtomValue } from 'jotai'
import { redirect } from 'next/navigation'

const Landing = () => {
    const { degree, structure } = useAtomValue(selectedDegreeAtom)

    redirect(
        `/${degree}/${structure ?? Object.keys(degrees[degree].structures)[0]}`
    )
}

export default Landing
