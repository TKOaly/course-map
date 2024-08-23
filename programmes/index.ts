import { ProgrammeCode } from './enums'
import { structures as tktStructures } from './tkt/structure'
import { type Programmes } from './types'

export const programmes: Programmes = {
    [ProgrammeCode.TKT]: {
        name: 'Tietojenkäsittelytieteen Kandiohjelma',
        structures: tktStructures,
    },
}
