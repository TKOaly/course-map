import { CourseGroup, Necessity } from '../enums'
import { Id } from '../ids'
import { type DegreeStructures } from '../types'

export const structures: DegreeStructures = {
    '23-26': {
        name: 'Opetussuunnitelma 2023-2026',
        shortName: 'OPS 23-26',
        groups: [
            {
                type: CourseGroup.BASIC,
                necessity: Necessity.MANDATORY,
                courses: [
                    Id.TKT10002,
                    Id.TKT10003,
                    Id.TKT10004,
                    Id.TKT10006,
                    Id.TKT200011,
                ],
                description: 'Pakolliset perusopinnot',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.MANDATORY,
                courses: [
                    Id.TKT20005,
                    Id.TKT20006,
                    Id.TKT20007,
                    Id.TKT20013,
                    Id.TKT20014,
                    Id.TKT200012,
                    Id.DATA15001,
                    Id.TKT20016,
                    Id.TKT20019,
                ],
                description: 'Pakolliset aineopinnot',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.MANDATORY,
                courses: [Id.TKT200151, Id.TKT200152],
                description: 'Tietojenkäsittely ja yhteiskunta',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.OPTIONAL,
                courses: [Id.TKT20010, Id.TKT20012, Id.TKT20018],
                description: 'Aineopintojen harjoitustyöt',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.OPTIONAL,
                courses: [
                    Id.BSCS2011,
                    Id.TKT21012,
                    Id.TKT21004,
                    Id.TKT21029,
                    Id.TKT21030,
                    Id.TKT21018,
                    Id.TKT210281,
                    Id.TKT210282,
                    Id.TKT21031,
                    Id.TKT21036,
                    Id.TKT21037,
                    Id.TKT21038,
                    Id.TKT21040,
                    Id.TKT21041,
                    Id.TKT21039,
                    Id.TKT21026,
                    Id.TKT21003,
                    Id.TKT210031,
                ],
                description: 'Valinnaiset aineopinnot',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.MANDATORY,
                courses: [Id.TKT200091, Id.TKT200092, Id.TKT200093],
                description: 'Tietoturvan perusteet',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.OPTIONAL,
                courses: [
                    Id.CSM141081,
                    Id.CSM141082,
                    Id.CSM141083,
                    Id.CSM14113,
                    Id.CSM14110,
                    Id.CSM14111,
                    Id.CSM14112,
                    Id.CSM141084,
                    Id.CSM14114,
                    Id.CSM141091,
                    Id.CSM141092,
                    Id.CSM141093,
                ],
                description: 'Full Stack -websovelluskehitys',
            },
            {
                type: CourseGroup.ALTERANTIVE,
                necessity: Necessity.SELECTABLE,
                courses: [[Id.MAT11001, Id.MAT12001, Id.MAT12002]],
                description: 'Menetelmätieteet',
            },
            {
                type: CourseGroup.ALTERANTIVE,
                necessity: Necessity.SELECTABLE,
                courses: [
                    [
                        Id.MAT11009,
                        Id.MAT11015,
                        Id.MAT11002,
                        Id.MAT21001,
                        Id.MAT11003,
                    ],
                ],
                description: 'Matematiikan aineopinnot',
            },
            {
                type: CourseGroup.OTHER,
                necessity: Necessity.MANDATORY,
                courses: [Id['DIGI-A'], Id.TKT500031],
                description: 'Opiskelijan digitaidot',
            },
            {
                type: CourseGroup.OTHER,
                necessity: Necessity.OPTIONAL,
                courses: [
                    Id.MAT20016,
                    Id.TKT50007,
                    Id['ML-HAL-OPJT01'],
                    Id['ML-T001'],
                ],
                description: 'Muut opinnot',
            },
            {
                type: CourseGroup.OTHER,
                necessity: Necessity.MANDATORY,
                courses: [Id.TKT50002, Id.TKT50004],
                description: 'Akateemiset taidot',
            },
            {
                type: CourseGroup.MINOR,
                necessity: Necessity.OPTIONAL,
                courses: [Id.FYS1015, Id.FYS1010, Id.FYS1014],
                description: 'Fysikaalisten tieteiden opintokokonaisuus',
            },
        ],
    },
    '20-23': {
        name: 'Opetussuunnitelma 2020-2023',
        shortName: 'OPS 20-23',
        groups: [
            {
                type: CourseGroup.BASIC,
                necessity: Necessity.MANDATORY,
                courses: [
                    Id.TKT10001,
                    Id.TKT10002,
                    Id.TKT10003,
                    Id.TKT10004,
                    Id.TKT10005,
                    Id.TKT20001,
                ],
                description: 'Pakolliset perusopinnot',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.MANDATORY,
                courses: [
                    Id.TKT20005,
                    Id.TKT20006,
                    Id.TKT20007,
                    Id.TKT20013,
                    Id.TKT20014,
                    Id.DATA15001,
                    Id.TKT20003,
                    Id.TKT20004,
                    Id.TKT20019,
                ],
                description: 'Pakolliset aineopinnot',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.OPTIONAL,
                courses: [Id.TKT20010, Id.TKT20012, Id.TKT20018],
                description: 'Aineopintojen harjoitustyöt',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.OPTIONAL,
                courses: [
                    Id.BSCS2011,
                    Id.TKT21012,
                    Id.TKT21004,
                    Id.TKT21029,
                    Id.TKT21030,
                    Id.TKT21018,
                    Id.TKT210281,
                    Id.TKT210282,
                    Id.TKT21031,
                    Id.TKT21036,
                    Id.TKT21037,
                    Id.TKT21038,
                    Id.TKT21040,
                    Id.TKT21041,
                    Id.TKT21039,
                    Id.TKT21026,
                    Id.TKT21003,
                    Id.TKT210031,
                ],
                description: 'Valinnaiset aineopinnot',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.MANDATORY,
                courses: [Id.TKT200091, Id.TKT200092, Id.TKT200093],
                description: 'Tietoturvan perusteet',
            },
            {
                type: CourseGroup.INTERMEDIATE,
                necessity: Necessity.OPTIONAL,
                courses: [
                    Id.CSM141081,
                    Id.CSM141082,
                    Id.CSM141083,
                    Id.CSM14113,
                    Id.CSM14110,
                    Id.CSM14111,
                    Id.CSM14112,
                    Id.CSM141084,
                    Id.CSM14114,
                    Id.CSM141091,
                    Id.CSM141092,
                    Id.CSM141093,
                ],
                description: 'Full Stack -websovelluskehitys',
            },
            {
                type: CourseGroup.ALTERANTIVE,
                necessity: Necessity.SELECTABLE,
                courses: [[Id.MAT11001, Id.MAT12001, Id.MAT12002]],
                description: 'Menetelmätieteet',
            },
            {
                type: CourseGroup.ALTERANTIVE,
                necessity: Necessity.SELECTABLE,
                courses: [
                    [
                        Id.MAT11009,
                        Id.MAT11015,
                        Id.MAT11002,
                        Id.MAT21001,
                        Id.MAT11003,
                    ],
                ],
                description: 'Matematiikan aineopinnot',
            },
            {
                type: CourseGroup.OTHER,
                necessity: Necessity.MANDATORY,
                courses: [Id['DIGI-A'], Id.TKT500031],
                description: 'Opiskelijan digitaidot',
            },
            {
                type: CourseGroup.OTHER,
                necessity: Necessity.OPTIONAL,
                courses: [
                    Id.MAT20016,
                    Id.TKT50007,
                    Id['ML-HAL-OPJT01'],
                    Id['ML-T001'],
                ],
                description: 'Muut opinnot',
            },
            {
                type: CourseGroup.OTHER,
                necessity: Necessity.MANDATORY,
                courses: [Id.TKT50002, Id.TKT50004],
                description: 'Akateemiset taidot',
            },
            {
                type: CourseGroup.MINOR,
                necessity: Necessity.OPTIONAL,
                courses: [Id.FYS1015, Id.FYS1010, Id.FYS1014],
                description: 'Fysikaalisten tieteiden opintokokonaisuus',
            },
        ],
    },
} as const
