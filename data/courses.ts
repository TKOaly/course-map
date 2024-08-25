import { CourseCode } from './course-codes'
import { Prerequisite } from './enums'
import { type Courses } from './types'

export const courses: Courses = {
    // ========
    //   TKT
    // ========
    [CourseCode.TKT10001]: {
        name: 'Johdatus tietojenkäsittelytieteeseen',
        credits: 5,
        description: 'Kurssilla opetetaan tietojenkäsittelytieteen perusteet',
        nicknames: ['JTKT'],
        equivalents: [CourseCode.BSCS2002],
    },
    [CourseCode.TKT10002]: {
        name: 'Ohjelmoinnin perusteet',
        credits: 5,
        description: `Opintojaksolla perehdyt nykyaikaisen ohjelmoinnin perusideoihin sekä ohjelmoinnissa käytettävien työvälineiden lisäksi algoritmien laatimiseen.
            
            Opintojakson jälkeen

            1. ymmärrät periaatteen tasolla algoritmien ja tietokoneen toiminnan ja ohjelmoinnin rooli tässä toiminnassa,

            2. osaat kirjoittaa itse imperatiiviseen paradigmaan perustuvia yksinkertaisen ongelman ratkaisevia ohjelmia

            3. ja osaat käyttää ohjelmointikieltä työvälineenä datan käsittelemiseksi esimerkiksi opiskeluun, työhön tai harrastuksiin liittyvissä tilanteissa.
            `,
        nicknames: ['ohpe'],
        language: 'Suomi',
        coursesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-5b481a9e-2ca4-4131-baab-58eb384bed41',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-5b481a9e-2ca4-4131-baab-58eb384bed41',
    },
    [CourseCode.TKT10003]: {
        name: 'Ohjelmoinnin jatkokurssi',
        credits: 5,
        description: `Kurssilla tutustutaan olio-ohjelmoinnin lisäksi muun muassa funktionaaliseen paradigmaan ja Pythonin syvällisempään hyödyntämiseen.
        
        Opintojakson jälkeen
        
        1. ymmärrät periaatteellisella tasolla olio-ohjelmoinnin peruskäsitteet,
        
        2. osaat hyödyntää luokkia ja olioita osana omien ohjelmien suunnittelua ja toteutusta ja
        
        3. osaat käyttää funktionaalisia ominaisuuksia lyhyempien, tehokkaampien ja selkeämpien ohjelmien kirjoittamisessa.
        `,
        nicknames: ['ohja'],
        prerequisites: {
            [CourseCode.TKT10002]: Prerequisite.MANDATORY,
            [CourseCode.MAT11001]: Prerequisite.RECOMMENDED,
        },
        language: 'Suomi',
        coursesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
    },
    [CourseCode.TKT10004]: {
        name: 'Tietokantojen perusteet',
        credits: 5,
        description: 'Kurssilla opetetaan tietokantojen perusteet',
        nicknames: ['Tikape'],
    },
    [CourseCode.TKT10005]: {
        name: 'Tietokoneen toiminnan perusteet',
        credits: 5,
        description: 'Kurssilla opetetaan tietokoneen toiminnan perusteet',
        nicknames: ['Tito'],
    },
    [CourseCode.TKT10006]: {
        name: 'Tietokone ja Internet',
        credits: 5,
        description: 'Kurssilla opetetaan tietokoneen ja internetin perusteet',
        nicknames: ['Tintti'],
    },
    [CourseCode.TKT200010]: {
        name: 'Tietorakenteet ja algoritmit',
        credits: 10,
        description: 'Kurssilla opetetaan tietorakenteet ja algoritmit',
        nicknames: ['Tira'],
        prerequisites: { [CourseCode.TKT10003]: Prerequisite.MANDATORY },
        equivalents: [CourseCode.TKT200011, CourseCode.TKT200012],
    },
    [CourseCode.TKT200011]: {
        name: 'Tietorakenteet ja algoritmit I',
        credits: 5,
        description: `Kurssin jälkeen opiskelija
        
        tuntee O-merkinnän ja osaa analysoida sen avulla algoritmeja sekä valita tilanteeseen sopivan algoritmin
        
        tietää tehokkaita järjestämisalgoritmeja ja osaa käyttää niitä algoritmien suunnittelussa
        
        tuntee lista- ja hajautusrakenteiden toteutustapoja
        
        osaa käyttää rekursiota ohjelmoinnissa
        
        osaa verkkojen peruskäsitteet ja tuntee algoritmeja verkkojen läpikäyntiin
        `,
        nicknames: ['tira I'],
        prerequisites: { [CourseCode.TKT10003]: Prerequisite.MANDATORY },
        language: 'Suomi',
        coursesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-a0f67d51-907d-4ec1-9726-04c4b654a02d',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-a0f67d51-907d-4ec1-9726-04c4b654a02d',
    },
    [CourseCode.TKT200012]: {
        name: 'Tietorakenteet ja algoritmit II',
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
            [CourseCode.TKT200011]: Prerequisite.MANDATORY,
        },
        language: 'Suomi',
        coursesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-fb39d562-012a-46d8-9336-a52a7ff6056a',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-fb39d562-012a-46d8-9336-a52a7ff6056a',
    },
    [CourseCode.TKT20005]: {
        name: 'Laskennan mallit',
        credits: 5,
        description: 'Kurssilla opetetaan laskennan mallit',
        nicknames: ['Lama'],
    },
    [CourseCode.TKT20006]: {
        name: 'Ohjelmistotuotanto',
        credits: 5,
        description: 'Kurssilla opetetaan ohjelmistotuotanto',
        nicknames: ['Ohtu'],
    },
    [CourseCode.TKT20007]: {
        name: 'Ohjelmistoprojekti',
        credits: 5,
        description: 'Kurssilla tehdään ohjelmistoprojekti',
        nicknames: ['Ohtuprojekti'],
    },
    [CourseCode.TKT20013]: {
        name: 'Kandidaatin tutkielma',
        credits: 5,
        description: 'Kurssilla tehdään kandidaatin tutkielma',
        nicknames: ['Kandi'],
    },
    [CourseCode.TKT20014]: {
        name: 'Kypsyysnäyte LuK',
        credits: 5,
        description: 'Kurssilla tehdään kypsyysnäyte LuK',
    },
    [CourseCode.TKT20016]: {
        name: 'Laskentaympäristöt',
        credits: 5,
        description: 'Kurssilla opetetaan laskentaympäristöt',
    },
    [CourseCode.TKT20019]: {
        name: 'Tietokannat ja web-ohjelmointi',
        credits: 5,
        description: 'Kurssilla opetetaan tietokannat ja web-ohjelmointi',
    },
    [CourseCode.TKT200091]: {
        name: 'Cyber Security Base: Introduction to Cyber Security',
        credits: 5,
        description: 'Kurssilla opetetaan tietoturvan perusteet',
    },
    [CourseCode.TKT200092]: {
        name: 'Cyber Security Base: Securing Software',
        credits: 5,
        description: 'Kurssilla opetetaan tietoturvan perusteet',
    },
    [CourseCode.TKT200093]: {
        name: 'Cyber Security Base: Course Project I',
        credits: 5,
        description: 'Kurssilla opetetaan tietoturvan perusteet',
    },
    [CourseCode.TKT20009]: {
        name: 'Tietoturvan perusteet',
        credits: 5,
        description: 'Kurssilla opetetaan tietoturvan perusteet',
    },
    [CourseCode.TKT20015]: {
        name: 'Tietojenkäsittely ja yhteiskunta',
        credits: 5,
        description: 'Kurssilla opetetaan tietojenkäsittely ja yhteiskunta',
    },
    [CourseCode.TKT200151]: {
        name: 'Tietojenkäsittely ja yhteiskunta, perusteet',
        credits: 5,
        description: 'Kurssilla opetetaan tietojenkäsittely ja yhteiskunta',
    },
    [CourseCode.TKT200152]: {
        name: 'Tietojenkäsittely ja yhteiskunta, jatkokurssi',
        credits: 5,
        description: 'Kurssilla opetetaan tietojenkäsittely ja yhteiskunta',
    },
    [CourseCode.TKT20010]: {
        name: 'Aineopintojen harjoitustyö: Algoritmit ja tekoäly',
        credits: 5,
        description: 'Kurssilla tehdään aineopintojen harjoitustyö',
    },
    [CourseCode.TKT20012]: {
        name: 'Aineopintojen harjoitustyö: Tietoliikenne',
        credits: 5,
        description: 'Kurssilla tehdään aineopintojen harjoitustyö',
    },
    [CourseCode.TKT20018]: {
        name: 'Aineopintojen harjoitustyö: Ohjelmistotekniikka',
        credits: 5,
        description: 'Kurssilla tehdään aineopintojen harjoitustyö',
    },
    [CourseCode.TKT21012]: {
        name: 'Algoritmit ongelmanratkaisussa',
        credits: 5,
        description: 'Kurssilla opetetaan algoritmit ongelmanratkaisussa',
    },
    [CourseCode.TKT21004]: {
        name: 'Computer Architecture',
        credits: 5,
        description: 'Kurssilla opetetaan computer architecture',
    },
    [CourseCode.TKT21029]: {
        name: 'Functional Programming I',
        credits: 5,
        description: 'Kurssilla opetetaan functional programming',
    },
    [CourseCode.TKT21030]: {
        name: 'Functional Programming II',
        credits: 5,
        description: 'Kurssilla opetetaan functional programming',
    },
    [CourseCode.TKT21032]: {
        name: 'Kilpaohjelmoinnin harjoittelu 1',
        credits: 5,
        description: 'Kurssilla opetetaan kilpaohjelmointi',
    },
    [CourseCode.TKT21033]: {
        name: 'Kilpaohjelmoinnin harjoittelu 2',
        credits: 5,
        description: 'Kurssilla opetetaan kilpaohjelmointi',
    },
    [CourseCode.TKT21034]: {
        name: 'Kilpaohjelmoinnin harjoittelu 3',
        credits: 5,
        description: 'Kurssilla opetetaan kilpaohjelmointi',
    },
    [CourseCode.TKT21035]: {
        name: 'Kilpaohjelmoinnin harjoittelu 4',
        credits: 5,
        description: 'Kurssilla opetetaan kilpaohjelmointi',
    },
    [CourseCode.TKT210241]: {
        name: 'Ohjelmointihaasteita 1',
        credits: 5,
        description: 'Kurssilla opetetaan ohjelmointihaasteita',
    },
    [CourseCode.TKT210242]: {
        name: 'Ohjelmointihaasteita 2',
        credits: 5,
        description: 'Kurssilla opetetaan ohjelmointihaasteita',
    },
    [CourseCode.TKT210243]: {
        name: 'Ohjelmointihaasteita 3',
        credits: 5,
        description: 'Kurssilla opetetaan ohjelmointihaasteita',
    },
    [CourseCode.TKT21018]: {
        name: 'Elements of AI: Tekoälyn perusteet',
        credits: 5,
        description: 'Kurssilla opetetaan tekoälyn perusteet',
    },
    [CourseCode.TKT210281]: {
        name: 'Elements of AI: Building AI - Intermediate',
        credits: 5,
        description: 'Kurssilla opetetaan tekoälyn rakentaminen',
    },
    [CourseCode.TKT210282]: {
        name: 'Elements of AI: Building AI - Advanced',
        credits: 5,
        description: 'Kurssilla opetetaan tekoälyn rakentaminen',
    },
    [CourseCode.TKT21031]: {
        name: 'Tekoälyn etiikka: Johdanto',
        credits: 5,
        description: 'Kurssilla opetetaan tekoälyn etiikka',
    },
    [CourseCode.TKT21036]: {
        name: 'DevOps with Docker',
        credits: 5,
        description: 'Kurssilla opetetaan DevOps with Docker',
    },
    [CourseCode.TKT21037]: {
        name: 'DevOps with Docker: docker-compose',
        credits: 5,
        description: 'Kurssilla opetetaan DevOps with Docker',
    },
    [CourseCode.TKT21038]: {
        name: 'DevOps with Docker: security and optimization',
        credits: 5,
        description: 'Kurssilla opetetaan DevOps with Docker',
    },
    [CourseCode.TKT21040]: {
        name: 'Test-Driven Development',
        credits: 5,
        description: 'Kurssilla opetetaan test-driven development',
    },
    [CourseCode.TKT21041]: {
        name: 'Test-Driven Development: Full Stack',
        credits: 5,
        description: 'Kurssilla opetetaan test-driven development',
    },
    [CourseCode.TKT21039]: {
        name: 'Core 5G and Beyond',
        credits: 5,
        description: 'Kurssilla opetetaan core 5G and beyond',
    },
    [CourseCode.TKT21026]: {
        name: 'Network Programming',
        credits: 5,
        description: 'Kurssilla opetetaan network programming',
    },
    [CourseCode.TKT21003]: {
        name: 'Web-palvelinohjelmointi Ruby on Rails',
        credits: 5,
        description:
            'Kurssilla opetetaan web-palvelinohjelmointi Ruby on Rails',
    },

    // ========
    //   BSCS
    // ========
    [CourseCode.BSCS2002]: {
        name: 'Computing and Society',
        credits: 5,
        description: 'Kurssilla opetetaan computing and society',
        equivalents: [CourseCode.TKT10001],
    },

    // ========
    //   MAT
    // ========
    [CourseCode.MAT11001]: {
        name: 'Johdatus yliopistomatematiikkaan',
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
        language: 'Suomi',
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
