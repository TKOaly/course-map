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
        description: 'Kurssilla opetetaan tietojenkäsittelytieteen perusteet',
        nicknames: ['JTKT'],
        equivalents: [Id.BSCS2002],
    },
    [Id.TKT10002]: {
        code: 'TKT10002',
        credits: 5,
        description: `Opintojaksolla perehdyt nykyaikaisen ohjelmoinnin perusideoihin sekä ohjelmoinnissa käytettävien työvälineiden lisäksi algoritmien laatimiseen.
            
            Opintojakson jälkeen

            1. ymmärrät periaatteen tasolla algoritmien ja tietokoneen toiminnan ja ohjelmoinnin rooli tässä toiminnassa,

            2. osaat kirjoittaa itse imperatiiviseen paradigmaan perustuvia yksinkertaisen ongelman ratkaisevia ohjelmia

            3. ja osaat käyttää ohjelmointikieltä työvälineenä datan käsittelemiseksi esimerkiksi opiskeluun, työhön tai harrastuksiin liittyvissä tilanteissa.
            `,
        nicknames: ['ohpe'],
        languages: [Language.FI],
        coursesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-5b481a9e-2ca4-4131-baab-58eb384bed41',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-5b481a9e-2ca4-4131-baab-58eb384bed41',
    },
    [Id.TKT10003]: {
        code: 'TKT10003',
        credits: 5,
        description: `Kurssilla tutustutaan olio-ohjelmoinnin lisäksi muun muassa funktionaaliseen paradigmaan ja Pythonin syvällisempään hyödyntämiseen.
        
        Opintojakson jälkeen
        
        1. ymmärrät periaatteellisella tasolla olio-ohjelmoinnin peruskäsitteet,
        
        2. osaat hyödyntää luokkia ja olioita osana omien ohjelmien suunnittelua ja toteutusta ja
        
        3. osaat käyttää funktionaalisia ominaisuuksia lyhyempien, tehokkaampien ja selkeämpien ohjelmien kirjoittamisessa.
        `,
        nicknames: ['ohja'],
        prerequisites: {
            [Id.TKT10002]: Prerequisite.MANDATORY,
            [Id.MAT11001]: Prerequisite.RECOMMENDED,
        },
        languages: [Language.FI],
        coursesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
    },
    [Id.TKT10004]: {
        code: 'TKT10004',
        credits: 5,
        description: 'Kurssilla opetetaan tietokantojen perusteet',
        nicknames: ['Tikape'],
    },
    [Id.TKT10005]: {
        code: 'TKT10005',
        credits: 5,
        description: 'Kurssilla opetetaan tietokoneen toiminnan perusteet',
        nicknames: ['Tito'],
    },
    [Id.TKT10006]: {
        code: 'TKT10006',
        credits: 5,
        description: 'Kurssilla opetetaan tietokoneen ja internetin perusteet',
        nicknames: ['Tintti'],
    },
    [Id.TKT200010]: {
        code: 'TKT200010',
        credits: 10,
        description: 'Kurssilla opetetaan tietorakenteet ja algoritmit',
        nicknames: ['Tira'],
        prerequisites: { [Id.TKT10003]: Prerequisite.MANDATORY },
        equivalents: [Id.TKT200011, Id.TKT200012],
    },
    [Id.TKT200011]: {
        code: 'TKT200011',
        credits: 5,
        description: `Kurssin jälkeen opiskelija
        
        tuntee O-merkinnän ja osaa analysoida sen avulla algoritmeja sekä valita tilanteeseen sopivan algoritmin
        
        tietää tehokkaita järjestämisalgoritmeja ja osaa käyttää niitä algoritmien suunnittelussa
        
        tuntee lista- ja hajautusrakenteiden toteutustapoja
        
        osaa käyttää rekursiota ohjelmoinnissa
        
        osaa verkkojen peruskäsitteet ja tuntee algoritmeja verkkojen läpikäyntiin
        `,
        nicknames: ['tira I'],
        prerequisites: { [Id.TKT10003]: Prerequisite.MANDATORY },
        languages: [Language.FI],
        coursesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-a0f67d51-907d-4ec1-9726-04c4b654a02d',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-a0f67d51-907d-4ec1-9726-04c4b654a02d',
    },
    [Id.TKT200012]: {
        code: 'TKT200012',
        credits: 5,
        description: `Kurssin jälkeen opiskelija

        tuntee tasapainotetun binäärihakupuun ja keon toimintaperiaatteet
        
        osaa käyttää dynaamista ohjelmointia algoritmien suunnittelussa
        
        tuntee algoritmeja lyhimpien polkujen etsimiseen verkossa
        
        osaa käsitellä tehokkaasti suunnattuja syklittömiä verkkoja
        
        tuntee union-find-rakenteen ja osaa käyttää sitä pienimmän virittävän puun etsimiseen
        
        osaa määrittää verkon maksimivirtauksen ja tehdä siihen liittyviä palautuksia
        `,
        nicknames: ['tira II'],
        prerequisites: {
            [Id.TKT200011]: Prerequisite.MANDATORY,
        },
        languages: [Language.FI],
        coursesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-fb39d562-012a-46d8-9336-a52a7ff6056a',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-fb39d562-012a-46d8-9336-a52a7ff6056a',
    },
    [Id.TKT20005]: {
        code: 'TKT20005',
        credits: 5,
        description: 'Kurssilla opetetaan laskennan mallit',
        nicknames: ['Lama'],
    },
    [Id.TKT20006]: {
        code: 'TKT20006',
        credits: 5,
        description: 'Kurssilla opetetaan ohjelmistotuotanto',
        nicknames: ['Ohtu'],
    },
    [Id.TKT20007]: {
        code: 'TKT20007',
        credits: 5,
        description: 'Kurssilla tehdään ohjelmistoprojekti',
        nicknames: ['Ohtuprojekti'],
    },
    [Id.TKT20013]: {
        code: 'TKT20013',
        credits: 5,
        description: 'Kurssilla tehdään kandidaatin tutkielma',
        nicknames: ['Kandi'],
    },
    [Id.TKT20014]: {
        code: 'TKT20014',
        credits: 5,
        description: 'Kurssilla tehdään kypsyysnäyte LuK',
    },
    [Id.TKT20016]: {
        code: 'TKT20016',
        credits: 5,
        description: 'Kurssilla opetetaan laskentaympäristöt',
    },
    [Id.TKT20019]: {
        code: 'TKT20019',
        credits: 5,
        description: 'Kurssilla opetetaan tietokannat ja web-ohjelmointi',
    },
    [Id.TKT200091]: {
        code: 'TKT200091',
        credits: 5,
        description: 'Kurssilla opetetaan tietoturvan perusteet',
    },
    [Id.TKT200092]: {
        code: 'TKT200092',
        credits: 5,
        description: 'Kurssilla opetetaan tietoturvan perusteet',
    },
    [Id.TKT200093]: {
        code: 'TKT200093',
        credits: 5,
        description: 'Kurssilla opetetaan tietoturvan perusteet',
    },
    [Id.TKT20009]: {
        code: 'TKT20009',
        credits: 5,
        description: 'Kurssilla opetetaan tietoturvan perusteet',
    },
    [Id.TKT20015]: {
        code: 'TKT20015',
        credits: 5,
        description: 'Kurssilla opetetaan tietojenkäsittely ja yhteiskunta',
    },
    [Id.TKT200151]: {
        code: 'TKT200151',
        credits: 5,
        description: 'Kurssilla opetetaan tietojenkäsittely ja yhteiskunta',
    },
    [Id.TKT200152]: {
        code: 'TKT200152',
        credits: 5,
        description: 'Kurssilla opetetaan tietojenkäsittely ja yhteiskunta',
    },
    [Id.TKT20010]: {
        code: 'TKT20010',
        credits: 5,
        description: 'Kurssilla tehdään aineopintojen harjoitustyö',
    },
    [Id.TKT20012]: {
        code: 'TKT20012',
        credits: 5,
        description: 'Kurssilla tehdään aineopintojen harjoitustyö',
    },
    [Id.TKT20018]: {
        code: 'TKT20018',
        credits: 5,
        description: 'Kurssilla tehdään aineopintojen harjoitustyö',
    },
    [Id.TKT21012]: {
        code: 'TKT21012',
        credits: 5,
        description: 'Kurssilla opetetaan algoritmit ongelmanratkaisussa',
    },
    [Id.TKT21004]: {
        code: 'TKT21004',
        credits: 5,
        description: 'Kurssilla opetetaan computer architecture',
    },
    [Id.TKT21029]: {
        code: 'TKT21029',
        credits: 5,
        description: 'Kurssilla opetetaan functional programming',
    },
    [Id.TKT21030]: {
        code: 'TKT21030',
        credits: 5,
        description: 'Kurssilla opetetaan functional programming',
    },
    [Id.TKT21032]: {
        code: 'TKT21032',
        credits: 5,
        description: 'Kurssilla opetetaan kilpaohjelmointi',
    },
    [Id.TKT21033]: {
        code: 'TKT21033',
        credits: 5,
        description: 'Kurssilla opetetaan kilpaohjelmointi',
    },
    [Id.TKT21034]: {
        code: 'TKT21034',
        credits: 5,
        description: 'Kurssilla opetetaan kilpaohjelmointi',
    },
    [Id.TKT21035]: {
        code: 'TKT21035',
        credits: 5,
        description: 'Kurssilla opetetaan kilpaohjelmointi',
    },
    [Id.TKT210241]: {
        code: 'TKT210241',
        credits: 5,
        description: 'Kurssilla opetetaan ohjelmointihaasteita',
    },
    [Id.TKT210242]: {
        code: 'TKT210242',
        credits: 5,
        description: 'Kurssilla opetetaan ohjelmointihaasteita',
        prerequisites: {
            [Id.TKT210241]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT210243]: {
        code: 'TKT210243',
        credits: 5,
        description: 'Kurssilla opetetaan ohjelmointihaasteita',
        prerequisites: {
            [Id.TKT210242]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21018]: {
        code: 'TKT21018',
        credits: 5,
        description: 'Kurssilla opetetaan tekoälyn perusteet',
    },
    [Id.TKT210281]: {
        code: 'TKT210281',
        credits: 5,
        description: 'Kurssilla opetetaan tekoälyn rakentaminen',
    },
    [Id.TKT210282]: {
        code: 'TKT210282',
        credits: 5,
        description: 'Kurssilla opetetaan tekoälyn rakentaminen',
    },
    [Id.TKT21031]: {
        code: 'TKT21031',
        credits: 5,
        description: 'Kurssilla opetetaan tekoälyn etiikka',
    },
    [Id.TKT21036]: {
        code: 'TKT21036',
        credits: 5,
        description: 'Kurssilla opetetaan DevOps with Docker',
    },
    [Id.TKT21037]: {
        code: 'TKT21037',
        credits: 5,
        description: 'Kurssilla opetetaan DevOps with Docker',
    },
    [Id.TKT21038]: {
        code: 'TKT21038',
        credits: 5,
        description: 'Kurssilla opetetaan DevOps with Docker',
    },
    [Id.TKT21040]: {
        code: 'TKT21040',
        credits: 5,
        description: 'Kurssilla opetetaan test-driven development',
    },
    [Id.TKT21041]: {
        code: 'TKT21041',
        credits: 5,
        description: 'Kurssilla opetetaan test-driven development',
    },
    [Id.TKT21039]: {
        code: 'TKT21039',
        credits: 5,
        description: 'Kurssilla opetetaan core 5G and beyond',
    },
    [Id.TKT21026]: {
        code: 'TKT21026',
        credits: 5,
        description: 'Kurssilla opetetaan network programming',
    },
    [Id.TKT21003]: {
        code: 'TKT21003',
        credits: 5,
        description:
            'Kurssilla opetetaan web-palvelinohjelmointi Ruby on Rails',
    },

    // ========
    //   BSCS
    // ========
    [Id.BSCS2002]: {
        code: 'BSCS2002',
        credits: 5,
        description: 'Kurssilla opetetaan computing and society',
        equivalents: [Id.TKT10001],
    },

    // ========
    //   MAT
    // ========
    [Id.MAT11001]: {
        code: 'MAT11001',
        credits: 5,
        description: `Kurssin jälkeen opiskelija

        Opiskelija osaa käyttää induktiotodistusta ja vastaoletustodistusta sekä muita todistustekniikoita väitteiden perustelussa.
        
        Opiskelija osaa joukkojen ja osajoukkojen perusoperaatiot, tietää mikä on joukon koko ja osaa laskea osajoukkojen lukumäärän.
        
        Opiskelija hallitsee funktioiden määritelmän ja perusominaisuudet, kuten lähtöjoukon, maalijoukon, injektiivisyyden ja surjektiivisuuden sekä bijektiivisyyden.
        
        Opiskelija tietää mitä relaatiot ovat, millaisia ominaisuuksia niillä on ja esimerkiksi mitä ovat ekvivalenssirelatatiot.
        
        Opiskelija osaa käyttää alkeislogiikkaa alkeellisten väitteiden todistamiseen.
        
        Opiskelija osaa kompleksilukujen perusteet: peruslaskutoimitukset, itseisarvo ja erilaiset esitystavat. Hän osaa ratkaista alkeellisia polynomiyhtälöita sekä johtaa trigonometria kaavoja.
        `,
        nicknames: ['jym'],
        languages: [Language.FI],
        coursesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-fb39d562-012a-46d8-9336-a52a7ff6056a',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-e034179c-f679-419f-9bcc-671b20dd92aa',
    },

    // ========
    //   CSM
    // ========

    // ========
    //   MAST
    // ========

    // ========
    //   DATA
    // ========

    // ========
    //   FYS
    // ========
} as const
