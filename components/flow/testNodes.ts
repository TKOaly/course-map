import { type CourseNodeType } from '@/components/flow/CourseNode'
import { CourseCode } from '@/degrees/course-codes'
import { Prerequisite } from '@/degrees/enums'

export const testNodes: CourseNodeType[] = [
    {
        id: CourseCode.TKT10002,
        type: 'course',
        data: {
            code: 'TKT10002',
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
        position: { x: 0, y: 0 },
    },
    {
        id: CourseCode.TKT10003,
        type: 'course',
        data: {
            code: 'TKT10003',
            name: 'Ohjelmoinnin jatkokurssi',
            credits: 5,
            description: `Kurssilla tutustutaan olio-ohjelmoinnin lisäksi muun muassa funktionaaliseen paradigmaan ja Pythonin syvällisempään hyödyntämiseen.
            
            Opintojakson jälkeen
            
            1. ymmärrät periaatteellisella tasolla olio-ohjelmoinnin peruskäsitteet,
            
            2. osaat hyödyntää luokkia ja olioita osana omien ohjelmien suunnittelua ja toteutusta ja
            
            3. osaat käyttää funktionaalisia ominaisuuksia lyhyempien, tehokkaampien ja selkeämpien ohjelmien kirjoittamisessa.
            `,
            nicknames: ['ohja'],
            prerequisites: [
                {
                    courseCode: CourseCode.TKT10002,
                    prerequisiteType: Prerequisite.MANDATORY,
                },
                {
                    courseCode: CourseCode.MAT11001,
                    prerequisiteType: Prerequisite.RECOMMENDED,
                },
            ],
            language: 'Suomi',
            coursesLink:
                'https://studies.helsinki.fi/kurssit/opintojakso/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
            sisuLink:
                'https://sisu.helsinki.fi/student/courseunit/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
        },
        position: { x: 300, y: 0 },
    },
    {
        id: CourseCode.TKT200011,
        type: 'course',
        data: {
            code: 'TKT200011',
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
            prerequisites: [
                {
                    courseCode: CourseCode.TKT10003,
                    prerequisiteType: Prerequisite.MANDATORY,
                },
            ],
            language: 'Suomi',
            coursesLink:
                'https://studies.helsinki.fi/kurssit/opintojakso/otm-a0f67d51-907d-4ec1-9726-04c4b654a02d',
            sisuLink:
                'https://sisu.helsinki.fi/student/courseunit/otm-a0f67d51-907d-4ec1-9726-04c4b654a02d',
        },
        position: { x: 600, y: 50 },
    },
    {
        id: CourseCode.TKT200012,
        type: 'course',
        data: {
            code: 'TKT200012',
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
            prerequisites: [
                {
                    courseCode: CourseCode.TKT200011,
                    prerequisiteType: Prerequisite.MANDATORY,
                },
            ],
            language: 'Suomi',
            coursesLink:
                'https://studies.helsinki.fi/kurssit/opintojakso/otm-fb39d562-012a-46d8-9336-a52a7ff6056a',
            sisuLink:
                'https://sisu.helsinki.fi/student/courseunit/otm-fb39d562-012a-46d8-9336-a52a7ff6056a',
        },
        position: { x: 900, y: 50 },
    },
    {
        id: CourseCode.MAT11001,
        type: 'course',
        data: {
            code: 'MAT11001',
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
        position: { x: 300, y: 100 },
    },
]

export const testEdges = [
    {
        id: `${CourseCode.TKT10002}-${CourseCode.TKT10003}`,
        source: CourseCode.TKT10002,
        target: CourseCode.TKT10003,
    },
    {
        id: `${CourseCode.TKT10003}-${CourseCode.TKT200011}`,
        source: CourseCode.TKT10003,
        target: CourseCode.TKT200011,
    },
    {
        id: `${CourseCode.TKT200011}-${CourseCode.TKT200012}`,
        source: CourseCode.TKT200011,
        target: CourseCode.TKT200012,
    },
    {
        id: `${CourseCode.MAT11001}-${CourseCode.TKT200011}`,
        source: CourseCode.MAT11001,
        target: CourseCode.TKT200011,
    },
]
