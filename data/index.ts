import { structures as csmStructures } from './degree_structures/csm'
import { structures as dataStructures } from './degree_structures/data'
import { structures as lsiStructures } from './degree_structures/lsi'
import { structures as tktStructures } from './degree_structures/tkt'
import { DegreeCode } from './enums'
import { type Degrees } from './types'

export const degrees: Degrees = {
    [DegreeCode.TKT]: {
        name: 'Tietojenkäsittelytieteen Kandiohjelma',
        shortName: 'TKT Kandi',
        structures: tktStructures,
    },
    [DegreeCode.CSM]: {
        name: 'Tietojenkäsittelytieteen Maisteriohjelma',
        shortName: 'TKT Maisteri',
        structures: csmStructures,
    },
    [DegreeCode.DATA]: {
        name: 'Datatieteen Maisteriohjelma',
        shortName: 'DATA Maisteri',
        structures: dataStructures,
    },
    [DegreeCode.LSI]: {
        name: 'Life Science Informatics Maisteriohjelma',
        shortName: 'LSI Maisteri',
        structures: lsiStructures,
    },
} as const
