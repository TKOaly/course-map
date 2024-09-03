'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/app/components/ui/select'
import { useRouter } from '@/app/i18n'
import { degrees } from '@/data'
import { type DegreeCode } from '@/data/enums'
import { selectedCourseAtom, selectedDegreeAtom } from '@/lib/state'
import { useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'

export const DegreeSelect = () => {
    const { degree } = useParams<{ degree: DegreeCode }>()

    const router = useRouter()
    const setSelectedCourse = useSetAtom(selectedCourseAtom)
    const setSelectedDegree = useSetAtom(selectedDegreeAtom)

    return (
        <Select
            value={degree}
            onValueChange={(newDegree: DegreeCode) => {
                const defaultStructure = Object.keys(
                    degrees[newDegree].structures
                )[0]
                router.push(`/${newDegree}/${defaultStructure}`)
                setSelectedDegree({
                    degree: newDegree,
                    structure: defaultStructure,
                })
                setSelectedCourse(undefined)
            }}
        >
            <SelectTrigger
                aria-label="Choose degree"
                className="w-full shrink-0 select-none border-x-0 border-b-0 border-border @container hover:bg-secondary/90 focus:z-10 md:w-1/4 md:border md:border-y-0"
            >
                <SelectValue placeholder="Valitse Tutkinto" />
            </SelectTrigger>
            <SelectContent>
                <div className="@container">
                    {Object.entries(degrees).map(
                        ([code, { name, shortName }]) => (
                            <SelectItem key={code} value={code}>
                                <p className="hidden @[18rem]:block">{name}</p>
                                <p className="block @[18rem]:hidden">
                                    {shortName}
                                </p>
                            </SelectItem>
                        )
                    )}
                </div>
            </SelectContent>
        </Select>
    )
}
