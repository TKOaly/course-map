import { degrees } from '@/data'
import { type DegreeCode } from '@/data/enums'

export const getDegreeStructure = (
    degreeKey: DegreeCode,
    structureKey: string
) => {
    const degree = degrees[degreeKey]

    if (!degree) {
        throw new Error(`No degree found for key ${degreeKey}`)
    }

    const structure = degree.structures[structureKey]

    if (!structure) {
        throw new Error(
            `No structure in degree ${degreeKey} found for key ${structureKey}`
        )
    }

    return structure
}
