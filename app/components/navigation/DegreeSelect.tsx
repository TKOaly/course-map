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
import { useParams } from 'next/navigation'

export const DegreeSelect = () => {
    const { degree } = useParams<{ degree: DegreeCode }>()

    const router = useRouter()

    return (
        <Select
            value={degree}
            onValueChange={(newDegree: DegreeCode) => {
                router.push(
                    `/${newDegree}/${Object.keys(degrees[newDegree].structures)[0]}`
                )
            }}
        >
            <SelectTrigger
                aria-label="Choose degree"
                className="w-full shrink-0 select-none border-x-0 border-b-0 border-border @container hover:bg-secondary/90 focus:z-10 md:w-1/5 md:border md:border-y-0"
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
