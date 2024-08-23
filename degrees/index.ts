import { DegreeCode } from './enums'
import { structures as tktStructures } from './tkt/structure'
import { type Degrees } from './types'

export const degrees: Degrees = {
    [DegreeCode.TKT]: {
        name: 'Tietojenkäsittelytieteen Kandiohjelma',
        structures: tktStructures,
    },
}
