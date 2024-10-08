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
import { mobileHookHack } from '@/lib/utils'
import { useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'

/**
 * Dropdown for selecting the degree structure.
 * Changes the URL to match the selected degree structure.
 */
export const DegreeStructureSelect = () => {
    const { degree, structure } = useParams<{
        degree: DegreeCode
        structure: string
    }>()

    const router = useRouter()
    const setSelectedCourse = useSetAtom(selectedCourseAtom)
    const setSelectedDegree = useSetAtom(selectedDegreeAtom)

    return (
        <Select
            value={structure}
            onValueChange={(newStructure) => {
                router.push(`/${degree}/${newStructure}`)
                setSelectedDegree({
                    degree,
                    structure: newStructure,
                })
                setSelectedCourse(undefined)
            }}
        >
            <SelectTrigger
                aria-label="Choose degree structure"
                className="w-full shrink-0 select-none border-x-0 border-border @container hover:bg-secondary/90 focus:z-10 md:w-1/5 md:border md:border-y-0 md:border-l-0"
            >
                <SelectValue placeholder="Valitse Opetussuunnitelma" />
            </SelectTrigger>
            <SelectContent ref={mobileHookHack}>
                <div className="@container">
                    {degrees[degree] &&
                        Object.entries(degrees[degree].structures ?? {}).map(
                            ([code, { name, shortName }]) => (
                                <SelectItem key={code} value={code}>
                                    <p className="hidden @[15rem]:block">
                                        {name}
                                    </p>
                                    <p className="block @[15rem]:hidden">
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
