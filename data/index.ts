import { structures as tktStructures } from './degree_structures/tkt'
import { DegreeCode } from './enums'
import { type Degrees } from './types'

export const degrees: Degrees = {
    [DegreeCode.TKT]: {
        name: 'Tietojenkäsittelytieteen Kandiohjelma',
        structures: tktStructures,
    },
} as const
