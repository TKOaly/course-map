import { degrees } from '@/data'
import { type DegreeCode } from '@/data/enums'

export const getDegreeStructure = (
    degreeKey: DegreeCode,
    structureKey: string
) => {
    const degree = degrees[degreeKey]

    return degree ? degree.structures[structureKey] : undefined
}
