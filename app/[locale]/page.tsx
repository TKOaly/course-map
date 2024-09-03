'use client'

import { degrees } from '@/data'
import { selectedDegreeAtom } from '@/lib/state'
import { useAtom } from 'jotai'
import { redirect } from 'next/navigation'

const Landing = () => {
    const [{ degree, structure }] = useAtom(selectedDegreeAtom)

    redirect(
        `/${degree}/${structure ?? Object.keys(degrees[degree].structures)[0]}`
    )
}

export default Landing
