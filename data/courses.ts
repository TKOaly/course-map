import { Language, Prerequisite } from './enums'
import { Id } from './ids'
import { type Courses } from './types'

// Course names are defined in ids.ts

export const courses: Courses = {
    // ========
    //   TKT
    // ========
    [Id.TKT10001]: {
        code: 'TKT10001',
        credits: 5,
        nicknames: ['JTKT'],
        equivalents: [Id.BSCS2002],
    },
    [Id.TKT10002]: {
        code: 'TKT10002',
        credits: 5,
        nicknames: ['ohpe'],
        languages: [Language.FI, Language.SV],
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-5b481a9e-2ca4-4131-baab-58eb384bed41',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-5b481a9e-2ca4-4131-baab-58eb384bed41',
    },
    [Id.TKT10003]: {
        code: 'TKT10003',
        credits: 5,
        nicknames: ['ohja'],
        prerequisites: {
            [Id.TKT10002]: Prerequisite.MANDATORY,
        },
        languages: [Language.FI, Language.SV],
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
    },
    [Id.TKT10004]: {
        code: 'TKT10004',
        credits: 5,
        nicknames: ['tikape'],
        languages: [Language.FI, Language.SV],
        prerequisites: {
            [Id.TKT10002]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-36dc8b2a-0cd3-4d8c-92e8-1373aa4b2881',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-36dc8b2a-0cd3-4d8c-92e8-1373aa4b2881',
    },
    [Id.TKT10005]: {
        code: 'TKT10005',
        credits: 5,
        nicknames: ['tito'],
    },
    [Id.TKT10006]: {
        code: 'TKT10006',
        credits: 5,
        nicknames: ['tintti'],
        languages: [Language.FI, Language.SV],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-bf6e6800-a2a9-44ca-be98-077948df0c04',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-bf6e6800-a2a9-44ca-be98-077948df0c04',
    },
    [Id.TKT200010]: {
        code: 'TKT200010',
        credits: 10,
        nicknames: ['tira'],
        prerequisites: { [Id.TKT10003]: Prerequisite.MANDATORY },
        equivalents: [Id.TKT200011, Id.TKT200012],
    },
    [Id.TKT200011]: {
        code: 'TKT200011',
        credits: 5,
        nicknames: ['tira I'],
        prerequisites: {
            [Id.TKT10003]: Prerequisite.MANDATORY,
            [Id.MAT11001]: Prerequisite.MANDATORY,
        },
        languages: [Language.FI],
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-a0f67d51-907d-4ec1-9726-04c4b654a02d',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-a0f67d51-907d-4ec1-9726-04c4b654a02d',
    },
    [Id.TKT200012]: {
        code: 'TKT200012',
        credits: 5,
        nicknames: ['tira II'],
        prerequisites: {
            [Id.TKT200011]: Prerequisite.MANDATORY,
        },
        languages: [Language.FI],
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-fb39d562-012a-46d8-9336-a52a7ff6056a',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-fb39d562-012a-46d8-9336-a52a7ff6056a',
    },
    [Id.TKT20005]: {
        code: 'TKT20005',
        credits: 5,
        nicknames: ['lama'],
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT20006]: {
        code: 'TKT20006',
        credits: 5,
        nicknames: ['ohtu'],
        prerequisites: {
            [Id.TKT20019]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT20007]: {
        code: 'TKT20007',
        credits: 10,
        nicknames: ['ohtuprojekti'],
        prerequisites: {
            [Id.TKT20006]: Prerequisite.MANDATORY,
            [Id.TKT20010]: Prerequisite.ALTERANTIVE,
            [Id.TKT20012]: Prerequisite.ALTERANTIVE,
            [Id.TKT20018]: Prerequisite.ALTERANTIVE,
        },
    },
    [Id.TKT20013]: {
        code: 'TKT20013',
        credits: 6,
        nicknames: ['kandi'],
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
            [Id.TKT20007]: Prerequisite.MANDATORY,
            [Id.TKT200093]: Prerequisite.ALTERANTIVE,
            [Id.TKT20009]: Prerequisite.ALTERANTIVE,
            [Id.DATA15001]: Prerequisite.MANDATORY,
            [Id.TKT20005]: Prerequisite.MANDATORY,
            [Id.TKT20016]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT20014]: {
        code: 'TKT20014',
        credits: 0,
        prerequisites: {
            [Id.TKT20013]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT20016]: {
        code: 'TKT20016',
        credits: 5,
        nicknames: ['copla', 'LY', 'ent. käjä'],
        prerequisites: {
            [Id.TKT10006]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT20019]: {
        code: 'TKT20019',
        credits: 5,
        nicknames: ['tsoha'],
        languages: [Language.FI, Language.SV],
        prerequisites: {
            [Id.TKT10003]: Prerequisite.MANDATORY,
            [Id.TKT10004]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-8acb6e0c-e322-4811-a84c-38cef5de7da9',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-8acb6e0c-e322-4811-a84c-38cef5de7da9',
    },
    [Id.TKT200091]: {
        code: 'TKT200091',
        credits: 1,
        prerequisites: {
            [Id.TKT10003]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT200092]: {
        code: 'TKT200092',
        credits: 3,
        prerequisites: {
            [Id.TKT200091]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT200093]: {
        code: 'TKT200093',
        credits: 1,
        prerequisites: {
            [Id.TKT200092]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT20009]: {
        code: 'TKT20009',
        credits: 5,
        prerequisites: {
            [Id.TKT10003]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT20015]: {
        code: 'TKT20015',
        credits: 5,
        nicknames: ['ent. jtkt'],
        languages: [Language.FI, Language.EN, Language.SV],
        equivalents: [Id.TKT200151, Id.TKT200152],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-48ed3483-7057-4d92-8b6c-a96befb265f2',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-48ed3483-7057-4d92-8b6c-a96befb265f2',
    },
    [Id.TKT200151]: {
        code: 'TKT200151',
        credits: 2,
        nicknames: ['ent. jtkt'],
        languages: [Language.FI, Language.EN, Language.SV],
        equivalents: [Id.TKT20015],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-b532f254-b2af-43e4-ae03-e360ef3063ea',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-b532f254-b2af-43e4-ae03-e360ef3063ea',
    },
    [Id.TKT200152]: {
        code: 'TKT200152',
        credits: 3,
        nicknames: ['ent. jtkt'],
        languages: [Language.FI, Language.EN, Language.SV],
        prerequisites: {
            [Id.TKT200151]: Prerequisite.MANDATORY,
        },
        equivalents: [Id.TKT20015],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-bf0fbf45-74ee-4f60-a85a-b13170171116',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-bf0fbf45-74ee-4f60-a85a-b13170171116',
    },
    [Id.TKT20010]: {
        code: 'TKT20010',
        credits: 5,
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT20012]: {
        code: 'TKT20012',
        credits: 5,
        prerequisites: {
            [Id.TKT10006]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT20018]: {
        code: 'TKT20018',
        credits: 5,
        prerequisites: {
            [Id.TKT20019]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21012]: {
        code: 'TKT21012',
        credits: 10,
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21004]: {
        code: 'TKT21004',
        credits: 5,
        prerequisites: {
            [Id.TKT20016]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21029]: {
        code: 'TKT21029',
        credits: 5,
        languages: [Language.EN],
        prerequisites: {
            [Id.TKT10003]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-b712c311-9405-4fda-8e5e-71cbc6a9a91a',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-b712c311-9405-4fda-8e5e-71cbc6a9a91a',
    },
    [Id.TKT21030]: {
        code: 'TKT21030',
        credits: 5,
        prerequisites: {
            [Id.TKT21029]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21032]: {
        code: 'TKT21032',
        credits: 5,
    },
    [Id.TKT21033]: {
        code: 'TKT21033',
        credits: 5,
        prerequisites: {
            [Id.TKT21032]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21034]: {
        code: 'TKT21034',
        credits: 5,
        prerequisites: {
            [Id.TKT21033]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21035]: {
        code: 'TKT21035',
        credits: 5,
        prerequisites: {
            [Id.TKT21034]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT210241]: {
        code: 'TKT210241',
        credits: 5,
    },
    [Id.TKT210242]: {
        code: 'TKT210242',
        credits: 5,
        prerequisites: {
            [Id.TKT210241]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT210243]: {
        code: 'TKT210243',
        credits: 5,
        prerequisites: {
            [Id.TKT210242]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21018]: {
        code: 'TKT21018',
        credits: 2,
        languages: [
            Language.FI,
            Language.EN,
            Language.SV,
            Language.ES,
            Language.FR,
            Language.NO,
            Language.SK,
        ],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-d7334a38-70b7-4f36-9dd6-86adeb12549b',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-d7334a38-70b7-4f36-9dd6-86adeb12549b',
    },
    [Id.TKT210281]: {
        code: 'TKT210281',
        credits: 1,
        languages: [Language.EN],
        prerequisites: {
            [Id.TKT21018]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-da7298f6-d8d4-4b17-b950-d591f96ff967',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-da7298f6-d8d4-4b17-b950-d591f96ff967',
    },
    [Id.TKT210282]: {
        code: 'TKT210282',
        credits: 1,
        languages: [Language.EN],
        prerequisites: {
            [Id.TKT210281]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-14e456f5-2c55-4aa6-81d4-7364a68c7518',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-14e456f5-2c55-4aa6-81d4-7364a68c7518',
    },
    [Id.TKT21031]: {
        code: 'TKT21031',
        credits: 2,
        languages: [Language.FI, Language.EN],
        prerequisites: {
            [Id.TKT21018]: Prerequisite.RECOMMENDED,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-2154e607-fffb-4593-8aaa-87e2808a1b07',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-2154e607-fffb-4593-8aaa-87e2808a1b07',
    },
    [Id.TKT21036]: {
        code: 'TKT21036',
        credits: 1,
        languages: [Language.EN],
        prerequisites: {
            [Id.TKT20019]: Prerequisite.RECOMMENDED,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-bf6ac455-c74b-48a9-8079-1e26272d8594',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-bf6ac455-c74b-48a9-8079-1e26272d8594',
    },
    [Id.TKT21037]: {
        code: 'TKT21037',
        credits: 1,
        prerequisites: {
            [Id.TKT21036]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21038]: {
        code: 'TKT21038',
        credits: 1,
        prerequisites: {
            [Id.TKT21037]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21040]: {
        code: 'TKT21040',
        credits: 5,
        prerequisites: {
            [Id.CSM141081]: Prerequisite.MANDATORY,
            [Id.TKT21037]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21041]: {
        code: 'TKT21041',
        credits: 5,
        prerequisites: {
            [Id.TKT21040]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21039]: {
        code: 'TKT21039',
        credits: 2,
        prerequisites: {
            [Id.TKT10006]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.TKT21026]: {
        code: 'TKT21026',
        credits: 5,
        prerequisites: {
            [Id.TKT20016]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.TKT21003]: {
        code: 'TKT21003',
        credits: 5,
        nicknames: ['wepa'],
        languages: [Language.FI],
        prerequisites: {
            [Id.TKT20019]: Prerequisite.RECOMMENDED,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-fdc9fbb0-ef3c-47c1-aa04-3c2e30e7c14a',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-fdc9fbb0-ef3c-47c1-aa04-3c2e30e7c14a',
    },
    [Id.TKT210031]: {
        code: 'TKT210031',
        credits: 1,
        languages: [Language.EN],
        prerequisites: {
            [Id.TKT21003]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-52d1725a-a4d5-44da-bc85-25f0012368c6',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-52d1725a-a4d5-44da-bc85-25f0012368c6',
    },
    [Id.TKT50002]: {
        code: 'TKT50002',
        credits: 1,
        prerequisites: {
            [Id.TKT20013]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT50004]: {
        code: 'TKT50004',
        credits: 1,
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-6053efeb-1495-48aa-bf24-3b77c91590f3',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-6053efeb-1495-48aa-bf24-3b77c91590f3',
    },
    [Id.TKT50007]: {
        code: 'TKT50007',
        credits: 5,
        nicknames: ['AUK', 'RUK'],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-200d4836-e709-47fc-a871-3decd20c0b7c',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-200d4836-e709-47fc-a871-3decd20c0b7c',
    },
    [Id.TKT500031]: {
        code: 'TKT500031',
        credits: 1,
        nicknames: ['lapio'],
        languages: [Language.FI, Language.EN],
        prerequisites: {
            [Id['DIGI-A']]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-5147d780-614d-4d70-9601-017b4c2ceffd',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-5147d780-614d-4d70-9601-017b4c2ceffd',
    },

    // ========
    //   BSCS
    // ========
    [Id.BSCS2002]: {
        code: 'BSCS2002',
        credits: 5,
        equivalents: [Id.TKT10001],
    },
    [Id.BSCS2011]: {
        code: 'BSCS2011',
        credits: 5,
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
        },
    },

    // ========
    //   CSM
    // ========
    [Id.CSM141081]: {
        code: 'CSM141081',
        credits: 5,
        languages: [Language.FI, Language.EN],
        nicknames: ['fäsä'],
        prerequisites: {
            [Id.TKT20019]: Prerequisite.RECOMMENDED,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-7f2015a3-2003-44af-984b-c80df2cfab0f',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-7f2015a3-2003-44af-984b-c80df2cfab0f',
    },
    [Id.CSM141082]: {
        code: 'CSM141082',
        credits: 1,
        nicknames: ['fäsä'],
        prerequisites: {
            [Id.CSM141081]: Prerequisite.MANDATORY,
        },
    },
    [Id.CSM141083]: {
        code: 'CSM141083',
        credits: 1,
        nicknames: ['fäsä'],
        prerequisites: {
            [Id.CSM141082]: Prerequisite.MANDATORY,
        },
    },
    [Id.CSM14113]: {
        code: 'CSM14113',
        credits: 1,
        nicknames: ['fäsä'],
        prerequisites: {
            [Id.CSM141081]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM14110]: {
        code: 'CSM14110',
        credits: 1,
        nicknames: ['fäsä'],
        prerequisites: {
            [Id.CSM14113]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM14111]: {
        code: 'CSM14111',
        credits: 1,
        nicknames: ['fäsä'],
        prerequisites: {
            [Id.CSM14110]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM14112]: {
        code: 'CSM14112',
        credits: 1,
        nicknames: ['fäsä'],
        prerequisites: {
            [Id.CSM14111]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM141084]: {
        code: 'CSM141084',
        credits: 1,
        nicknames: ['fäsä'],
        prerequisites: {
            [Id.CSM14112]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM14114]: {
        code: 'CSM14114',
        credits: 1,
        nicknames: ['fäsä'],
        prerequisites: {
            [Id.CSM141084]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM141091]: {
        code: 'CSM141091',
        credits: 5,
        nicknames: ['fäsäprojekti'],
        prerequisites: {
            [Id.CSM141081]: Prerequisite.MANDATORY,
        },
    },
    [Id.CSM141092]: {
        code: 'CSM141092',
        credits: 7,
        nicknames: ['fäsäprojekti'],
        prerequisites: {
            [Id.CSM141091]: Prerequisite.MANDATORY,
        },
    },
    [Id.CSM141093]: {
        code: 'CSM141093',
        credits: 10,
        nicknames: ['fäsäprojekti'],
        prerequisites: {
            [Id.CSM141092]: Prerequisite.MANDATORY,
        },
    },

    // ========
    //   MAT
    // ========
    [Id.MAT11001]: {
        code: 'MAT11001',
        credits: 5,
        nicknames: ['jym'],
        languages: [Language.FI, Language.EN, Language.SV],
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-e034179c-f679-419f-9bcc-671b20dd92aa',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-e034179c-f679-419f-9bcc-671b20dd92aa',
    },
    [Id.MAT12001]: {
        code: 'MAT12001',
        credits: 5,
        nicknames: ['tiltu I'],
        languages: [Language.FI, Language.EN, Language.SV],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-9691c5ad-1b68-4979-a03e-4c454a5f00e0',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-9691c5ad-1b68-4979-a03e-4c454a5f00e0',
    },
    [Id.MAT12002]: {
        code: 'MAT12002',
        credits: 5,
        nicknames: ['tiltu II'],
        prerequisites: {
            [Id.MAT12001]: Prerequisite.MANDATORY,
        },
        languages: [Language.FI, Language.EN, Language.SV],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-ff4a5151-c893-4c2d-8d73-2c93a0817d38',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-ff4a5151-c893-4c2d-8d73-2c93a0817d38',
    },
    [Id.MAT20016]: {
        code: 'MAT20016',
        credits: 1,
        languages: [Language.FI, Language.EN, Language.SV],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-df4dd057-4c07-4e5e-9fa0-97c478748a4a',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-df4dd057-4c07-4e5e-9fa0-97c478748a4a',
    },
    [Id.MAT11009]: {
        code: 'MAT11009',
        credits: 5,
        prerequisites: {
            [Id.MAT11001]: Prerequisite.MANDATORY,
            [Id.MAT21001]: Prerequisite.RECOMMENDED,
        },
        languages: [Language.FI, Language.EN, Language.SV],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-e73c203b-3dba-4fd0-9d49-d535ea8a8aac',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-e73c203b-3dba-4fd0-9d49-d535ea8a8aac',
    },
    [Id.MAT11015]: {
        code: 'MAT11015',
        credits: 5,
        languages: [Language.FI, Language.EN, Language.SV],
        prerequisites: {
            [Id.MAT11009]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-4851899d-9eb0-4618-ae2a-b9551fd5fd91',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-4851899d-9eb0-4618-ae2a-b9551fd5fd91',
    },
    [Id.MAT11002]: {
        code: 'MAT11002',
        credits: 5,
        nicknames: ['linis I'],
        languages: [Language.FI, Language.SV],
        prerequisites: {
            [Id.MAT11001]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-afa19b13-8265-4b32-b7db-327e81e05d01',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-afa19b13-8265-4b32-b7db-327e81e05d01',
    },
    [Id.MAT21001]: {
        code: 'MAT21001',
        credits: 5,
        nicknames: ['linis II'],
        languages: [Language.FI, Language.EN, Language.SV],
        prerequisites: {
            [Id.MAT11002]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-1d41ea49-6d85-41de-9ab3-7ea35a10c12f',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-1d41ea49-6d85-41de-9ab3-7ea35a10c12f',
    },
    [Id.MAT11003]: {
        code: 'MAT11003',
        credits: 5,
        nicknames: ['rajis'],
        languages: [Language.FI, Language.EN, Language.SV],
        prerequisites: {
            [Id.MAT11001]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-25df637c-dc67-4e04-a98a-f5d7fe64e873',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-25df637c-dc67-4e04-a98a-f5d7fe64e873',
    },

    // ========
    //   MAST
    // ========

    // ========
    //   DATA
    // ========
    [Id.DATA15001]: {
        code: 'DATA15001',
        credits: 5,
        nicknames: ['johtek'],
        languages: [Language.FI, Language.EN],
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-0ae8deca-fa7b-4293-8e0d-bd05cfc2e68e',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-0ae8deca-fa7b-4293-8e0d-bd05cfc2e68e',
    },

    // ========
    //   OTHER
    // ========
    [Id['DIGI-A']]: {
        code: 'DIGI-A',
        credits: 2,
        languages: [Language.FI, Language.EN, Language.SV],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-57f0aee4-8ee8-4ceb-a31a-c41950268263',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-57f0aee4-8ee8-4ceb-a31a-c41950268263',
    },
    [Id['ML-HAL-OPJT01']]: {
        code: 'ML-HAL-OPJT01',
        credits: 5,
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-a827b6f5-a83b-4b89-b609-a59268cc064b',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-a827b6f5-a83b-4b89-b609-a59268cc064b',
    },
    [Id['ML-T001']]: {
        code: 'ML-T001',
        credits: 5,
    },

    // ========
    //   FYS
    // ========
    [Id.FYS1015]: {
        code: 'FYS1015',
        credits: 5,
        languages: [Language.FI, Language.SV],
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-48d307c3-b191-4267-b697-ac0e3f00411d',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-48d307c3-b191-4267-b697-ac0e3f00411d',
    },
    [Id.FYS1010]: {
        code: 'FYS1010',
        credits: 5,
        nicknames: ['mapu I'],
        languages: [Language.FI, Language.SV],
        prerequisites: {
            [Id.FYS1015]: Prerequisite.RECOMMENDED,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-46067a09-fd2b-488a-bf4b-8481259e724e',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-46067a09-fd2b-488a-bf4b-8481259e724e',
    },
    [Id.FYS1014]: {
        code: 'FYS1014',
        credits: 5,
        languages: [Language.FI, Language.SV],
        prerequisites: {
            [Id.FYS1010]: Prerequisite.RECOMMENDED,
        },
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-c57b0864-306b-42dc-9539-2aa596c6521c',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-c57b0864-306b-42dc-9539-2aa596c6521c',
    },
} as const
