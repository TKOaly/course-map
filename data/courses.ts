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
        description: `Kurssilla opetetaan tietojenkäsittelytieteen perusteet`,
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
        description: `Opintojaksolla perehdyt nykyaikaisen ohjelmoinnin perusideoihin sekä ohjelmoinnissa käytettävien työvälineiden lisäksi algoritmien laatimiseen.
            
            Opintojakson jälkeen

            1. ymmärrät periaatteen tasolla algoritmien ja tietokoneen toiminnan ja ohjelmoinnin rooli tässä toiminnassa,

            2. osaat kirjoittaa itse imperatiiviseen paradigmaan perustuvia yksinkertaisen ongelman ratkaisevia ohjelmia

            3. ja osaat käyttää ohjelmointikieltä työvälineenä datan käsittelemiseksi esimerkiksi opiskeluun, työhön tai harrastuksiin liittyvissä tilanteissa.
            `,
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
        description: `Kurssilla tutustutaan olio-ohjelmoinnin lisäksi muun muassa funktionaaliseen paradigmaan ja Pythonin syvällisempään hyödyntämiseen.
        
        Opintojakson jälkeen
        
        1. ymmärrät periaatteellisella tasolla olio-ohjelmoinnin peruskäsitteet,
        
        2. osaat hyödyntää luokkia ja olioita osana omien ohjelmien suunnittelua ja toteutusta ja
        
        3. osaat käyttää funktionaalisia ominaisuuksia lyhyempien, tehokkaampien ja selkeämpien ohjelmien kirjoittamisessa.
        `,
    },
    [Id.TKT10004]: {
        code: 'TKT10004',
        credits: 5,
        prerequisites: {
            [Id.TKT10002]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tietokantojen perusteet`,
        nicknames: ['Tikape'],
    },
    [Id.TKT10005]: {
        code: 'TKT10005',
        credits: 5,
        description: `Kurssilla opetetaan tietokoneen toiminnan perusteet`,
        nicknames: ['Tito'],
    },
    [Id.TKT10006]: {
        code: 'TKT10006',
        credits: 5,
        description: `Kurssilla opetetaan tietokoneen ja internetin perusteet`,
        nicknames: ['Tintti'],
    },
    [Id.TKT200010]: {
        code: 'TKT200010',
        credits: 10,
        description: `Kurssilla opetetaan tietorakenteet ja algoritmit`,
        nicknames: ['Tira'],
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
        description: `Kurssin jälkeen opiskelija
        
        tuntee O-merkinnän ja osaa analysoida sen avulla algoritmeja sekä valita tilanteeseen sopivan algoritmin
        
        tietää tehokkaita järjestämisalgoritmeja ja osaa käyttää niitä algoritmien suunnittelussa
        
        tuntee lista- ja hajautusrakenteiden toteutustapoja
        
        osaa käyttää rekursiota ohjelmoinnissa
        
        osaa verkkojen peruskäsitteet ja tuntee algoritmeja verkkojen läpikäyntiin
        `,
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
        description: `Kurssin jälkeen opiskelija

        tuntee tasapainotetun binäärihakupuun ja keon toimintaperiaatteet
        
        osaa käyttää dynaamista ohjelmointia algoritmien suunnittelussa
        
        tuntee algoritmeja lyhimpien polkujen etsimiseen verkossa
        
        osaa käsitellä tehokkaasti suunnattuja syklittömiä verkkoja
        
        tuntee union-find-rakenteen ja osaa käyttää sitä pienimmän virittävän puun etsimiseen
        
        osaa määrittää verkon maksimivirtauksen ja tehdä siihen liittyviä palautuksia
        `,
    },
    [Id.TKT20005]: {
        code: 'TKT20005',
        credits: 5,
        nicknames: ['lama'],
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan laskennan mallit`,
    },
    [Id.TKT20006]: {
        code: 'TKT20006',
        credits: 5,
        nicknames: ['ohtu'],
        prerequisites: {
            [Id.TKT20019]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan ohjelmistotuotanto`,
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
        description: `Kurssilla tehdään ohjelmistoprojekti`,
    },
    [Id.TKT20013]: {
        code: 'TKT20013',
        credits: 6,
        nicknames: ['kandi'],
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
            [Id.TKT20007]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla tehdään kandidaatin tutkielma`,
    },
    [Id.TKT20014]: {
        code: 'TKT20014',
        credits: 0,
        prerequisites: {
            [Id.TKT20013]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla tehdään kypsyysnäyte LuK`,
    },
    [Id.TKT20016]: {
        code: 'TKT20016',
        credits: 5,
        prerequisites: {
            [Id.TKT200011]: Prerequisite.MANDATORY,
            [Id.TKT10006]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan laskentaympäristöt`,
    },
    [Id.TKT20019]: {
        code: 'TKT20019',
        credits: 5,
        prerequisites: {
            [Id.TKT10003]: Prerequisite.MANDATORY,
            [Id.TKT10004]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tietokannat ja web-ohjelmointi`,
    },
    [Id.TKT200091]: {
        code: 'TKT200091',
        credits: 5,
        prerequisites: {
            [Id.TKT10003]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tietoturvan perusteet`,
    },
    [Id.TKT200092]: {
        code: 'TKT200092',
        credits: 5,
        prerequisites: {
            [Id.TKT200091]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tietoturvan perusteet`,
    },
    [Id.TKT200093]: {
        code: 'TKT200093',
        credits: 5,
        prerequisites: {
            [Id.TKT200092]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tietoturvan perusteet`,
    },
    [Id.TKT20009]: {
        code: 'TKT20009',
        credits: 5,
        prerequisites: {
            [Id.TKT10003]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tietoturvan perusteet`,
    },
    [Id.TKT20015]: {
        code: 'TKT20015',
        credits: 5,
        description: `Kurssilla opetetaan tietojenkäsittely ja yhteiskunta`,
    },
    [Id.TKT200151]: {
        code: 'TKT200151',
        credits: 5,
        description: `Kurssilla opetetaan tietojenkäsittely ja yhteiskunta`,
    },
    [Id.TKT200152]: {
        code: 'TKT200152',
        credits: 5,
        prerequisites: {
            [Id.TKT200151]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tietojenkäsittely ja yhteiskunta`,
    },
    [Id.TKT20010]: {
        code: 'TKT20010',
        credits: 5,
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla tehdään aineopintojen harjoitustyö`,
    },
    [Id.TKT20012]: {
        code: 'TKT20012',
        credits: 5,
        prerequisites: {
            [Id.TKT10006]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla tehdään aineopintojen harjoitustyö`,
    },
    [Id.TKT20018]: {
        code: 'TKT20018',
        credits: 5,
        prerequisites: {
            [Id.TKT20016]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla tehdään aineopintojen harjoitustyö`,
    },
    [Id.TKT21012]: {
        code: 'TKT21012',
        credits: 5,
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan algoritmit ongelmanratkaisussa`,
    },
    [Id.TKT21004]: {
        code: 'TKT21004',
        credits: 5,
        prerequisites: {
            [Id.TKT20016]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan computer architecture`,
    },
    [Id.TKT21029]: {
        code: 'TKT21029',
        credits: 5,
        prerequisites: {
            [Id.TKT10003]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan functional programming`,
    },
    [Id.TKT21030]: {
        code: 'TKT21030',
        credits: 5,
        prerequisites: {
            [Id.TKT21029]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan functional programming`,
    },
    [Id.TKT21032]: {
        code: 'TKT21032',
        credits: 5,
        description: `Kurssilla opetetaan kilpaohjelmointi`,
    },
    [Id.TKT21033]: {
        code: 'TKT21033',
        credits: 5,
        prerequisites: {
            [Id.TKT21032]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan kilpaohjelmointi`,
    },
    [Id.TKT21034]: {
        code: 'TKT21034',
        credits: 5,
        prerequisites: {
            [Id.TKT21033]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan kilpaohjelmointi`,
    },
    [Id.TKT21035]: {
        code: 'TKT21035',
        credits: 5,
        prerequisites: {
            [Id.TKT21034]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan kilpaohjelmointi`,
    },
    [Id.TKT210241]: {
        code: 'TKT210241',
        credits: 5,
        description: `Kurssilla opetetaan ohjelmointihaasteita`,
    },
    [Id.TKT210242]: {
        code: 'TKT210242',
        credits: 5,
        description: `Kurssilla opetetaan ohjelmointihaasteita`,
        prerequisites: {
            [Id.TKT210241]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT210243]: {
        code: 'TKT210243',
        credits: 5,
        description: `Kurssilla opetetaan ohjelmointihaasteita`,
        prerequisites: {
            [Id.TKT210242]: Prerequisite.MANDATORY,
        },
    },
    [Id.TKT21018]: {
        code: 'TKT21018',
        credits: 5,
        description: `Kurssilla opetetaan tekoälyn perusteet`,
    },
    [Id.TKT210281]: {
        code: 'TKT210281',
        credits: 5,
        prerequisites: {
            [Id.TKT21018]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tekoälyn rakentaminen`,
    },
    [Id.TKT210282]: {
        code: 'TKT210282',
        credits: 5,
        prerequisites: {
            [Id.TKT210281]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tekoälyn rakentaminen`,
    },
    [Id.TKT21031]: {
        code: 'TKT21031',
        credits: 5,
        description: `Kurssilla opetetaan tekoälyn etiikka`,
    },
    [Id.TKT21036]: {
        code: 'TKT21036',
        credits: 1,
        description: `Kurssilla opetetaan DevOps with Docker`,
    },
    [Id.TKT21037]: {
        code: 'TKT21037',
        credits: 1,
        prerequisites: {
            [Id.TKT21036]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan DevOps with Docker`,
    },
    [Id.TKT21038]: {
        code: 'TKT21038',
        credits: 1,
        prerequisites: {
            [Id.TKT21037]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan DevOps with Docker`,
    },
    [Id.TKT21040]: {
        code: 'TKT21040',
        credits: 5,
        description: `Kurssilla opetetaan test-driven development`,
    },
    [Id.TKT21041]: {
        code: 'TKT21041',
        credits: 5,
        prerequisites: {
            [Id.TKT21040]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan test-driven development`,
    },
    [Id.TKT21039]: {
        code: 'TKT21039',
        credits: 2,
        description: `Kurssilla opetetaan core 5G and beyond`,
    },
    [Id.TKT21026]: {
        code: 'TKT21026',
        credits: 5,
        prerequisites: {
            [Id.TKT20016]: Prerequisite.RECOMMENDED,
        },
        description: `Kurssilla opetetaan network programming`,
    },
    [Id.TKT21003]: {
        code: 'TKT21003',
        credits: 5,
        prerequisites: {
            [Id.TKT20019]: Prerequisite.RECOMMENDED,
        },
        description:
            'Kurssilla opetetaan web-palvelinohjelmointi Ruby on Rails',
    },
    [Id.TKT50002]: {
        code: 'TKT50002',
        credits: 1,
        prerequisites: {
            [Id.TKT20013]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan tutkimustiedonhaku`,
    },
    [Id.TKT50004]: {
        code: 'TKT50004',
        credits: 1,
        description: `Kurssilla opetetaan akateemiset taidot`,
    },
    [Id.TKT50007]: {
        code: 'TKT50007',
        credits: 5,
        description: `Opiskelija voi saada varusmiespalveluksen johtajakoulutuskesta 5 opintopistettä`,
    },

    // ========
    //   BSCS
    // ========
    [Id.BSCS2002]: {
        code: 'BSCS2002',
        credits: 5,
        description: `Kurssilla opetetaan computing and society`,
        equivalents: [Id.TKT10001],
    },
    [Id.BSCS2011]: {
        code: 'BSCS2011',
        credits: 5,
        prerequisites: {
            [Id.TKT200012]: Prerequisite.MANDATORY,
        },
        description: `Kurssilla opetetaan programming for performance`,
    },

    // ========
    //   MAT
    // ========
    [Id.MAT11001]: {
        code: 'MAT11001',
        credits: 5,
        nicknames: ['jym'],
        languages: [Language.FI],
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-e034179c-f679-419f-9bcc-671b20dd92aa',
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-e034179c-f679-419f-9bcc-671b20dd92aa',
        description: `Kurssin jälkeen opiskelija

        Opiskelija osaa käyttää induktiotodistusta ja vastaoletustodistusta sekä muita todistustekniikoita väitteiden perustelussa.
        
        Opiskelija osaa joukkojen ja osajoukkojen perusoperaatiot, tietää mikä on joukon koko ja osaa laskea osajoukkojen lukumäärän.
        
        Opiskelija hallitsee funktioiden määritelmän ja perusominaisuudet, kuten lähtöjoukon, maalijoukon, injektiivisyyden ja surjektiivisuuden sekä bijektiivisyyden.
        
        Opiskelija tietää mitä relaatiot ovat, millaisia ominaisuuksia niillä on ja esimerkiksi mitä ovat ekvivalenssirelatatiot.
        
        Opiskelija osaa käyttää alkeislogiikkaa alkeellisten väitteiden todistamiseen.
        
        Opiskelija osaa kompleksilukujen perusteet: peruslaskutoimitukset, itseisarvo ja erilaiset esitystavat. Hän osaa ratkaista alkeellisia polynomiyhtälöita sekä johtaa trigonometria kaavoja.
        `,
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
        description: `Tilastotieteen ja R-ohjelmiston käytön perusteet.
        
        Kurssin asiasisältö:
        
        Varianssi, keskihajonta, korrelaatio, ehdollinen todennäköisyys, Bayesin kaava, diskreetit ja normaalijakautuneet satunnaismuuttujat, standardinormaalijakaumam kertymäfunktio, keskeinen raja-arvolause, populaatiokeskiarvon, keskihajonnan ja osuuksien estimointi otosten avulla sekä estimaattien luottamusvälien muodostaminen. Tilastollinen hypoteesin testaus, nollahypoteesi, merkitsevyystaso, P-arvon käsite, t-testi.
        
        R-ohjelmiston käytön alkeet: 
        
        Skalaarimuuttujien, vektoreiden ja matriisien laskuoperaatiot, R:n tietotyypit, tilastolliset funktiot, simulointi ja jakaumafunktiot, ristiintaulukointi, aineiston lataaminen tiedostosta, jakaumafunktiot, omien funktioiden luominen, nimetyt argumentit ja oletusarvot argumenteille, koodin osien toistaminen, for-silmukka, sapply(), apply(), aineiston luokittelu ja luottamusvälit, listat ja tilastollinen testaaminen.`,
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
        description: `Tilastotieteen ja R-ohjelmiston käytön alkeet. Tilastollinen testaaminen parametrisesti ja ei-parametrisesti käytännössä.
        
        Kurssin asiasisältö:
        
        Kahden populaation vertaaminen, t-testin yleistys, varianssianalyysi, lineaarinen regressio, yhteensopivuustestit, riippumattomuustestit, ei-parametriset testit, bayes-päättelyn alkeet.

        R-ohjelmiston käytön alkeet:
        
        Listat ja tilastollinen testaaminen, listan luominen ja komponenttien nimeäminen, koodiblokit, replicate, yhden otoksen t-testi, kahden otoksen t-testi, riippumattomuustesti, yhden ja useamman selittäjän lineaarinen regressio, if else - rakenne, Bayes-päättelyä, lisäpakettien asentaminen ja käyttäminen.
        `,
    },

    // ========
    //   CSM
    // ========
    [Id.CSM141081]: {
        code: 'CSM141081',
        credits: 1,
        prerequisites: {
            [Id.TKT20019]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM141082]: {
        code: 'CSM141082',
        credits: 1,
        prerequisites: {
            [Id.CSM141081]: Prerequisite.MANDATORY,
        },
    },
    [Id.CSM141083]: {
        code: 'CSM141083',
        credits: 1,
        prerequisites: {
            [Id.CSM141082]: Prerequisite.MANDATORY,
        },
    },
    [Id.CSM14113]: {
        code: 'CSM14113',
        credits: 1,
        prerequisites: {
            [Id.CSM141081]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM14110]: {
        code: 'CSM14110',
        credits: 1,
        prerequisites: {
            [Id.CSM14113]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM14111]: {
        code: 'CSM14111',
        credits: 1,
        prerequisites: {
            [Id.CSM14110]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM14112]: {
        code: 'CSM14112',
        credits: 1,
        prerequisites: {
            [Id.CSM14111]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM141084]: {
        code: 'CSM141084',
        credits: 1,
        prerequisites: {
            [Id.CSM14112]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM14114]: {
        code: 'CSM14114',
        credits: 1,
        prerequisites: {
            [Id.CSM141084]: Prerequisite.RECOMMENDED,
        },
    },
    [Id.CSM141091]: {
        code: 'CSM141091',
        credits: 1,
        prerequisites: {
            [Id.CSM141081]: Prerequisite.MANDATORY,
        },
    },
    [Id.CSM141092]: {
        code: 'CSM141092',
        credits: 1,
        prerequisites: {
            [Id.CSM141091]: Prerequisite.MANDATORY,
        },
    },
    [Id.CSM141093]: {
        code: 'CSM141093',
        credits: 1,
        prerequisites: {
            [Id.CSM141092]: Prerequisite.MANDATORY,
        },
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
        description: `After the course, the student...

        can express the basic philosophical problems related to AI (the difficulty in defining AI and consciousness, acting vs thinking, Turing test)
        
        can distinguish between realistic and unrealistic AI in science-fiction
        
        can describe the contrast between "Good Old Fashioned AI" (GOFAI) and modern AI approaches
        
        knows the main stream developments in the history of AI
        
        can formulate a problem as a graph and apply search algorithms to solve it
        
        can explain and implement A* search
        
        can formulate a simple game (such as tic-tac-toe) as a game tree
        
        can explain and implement the minimax algorithm and depth-limited alpha-beta pruning
        
        can design a reasonable heuristic evaluation function in a game (e.g., chess)
        
        can express uncertain knowledge in a simple situation using a probabilistic model
        
        can apply the Bayes theorem to calculate posterior probabilities given evidence in a simple scenario
        
        can estimate probability values from a sample
        
        can represent a problem solving situation as a Bayesian network
        
        can apply an approximate (Monte Carlo) technique to perform inference in a Bayesian network
        
        can distinguish between unsupervised and supervised machine learning scenarios
        
        can implement at least two supervised classification methods (e.g., naive Bayes, nearest neighbour classifier)
        
        knows the main types of neural networks (feed-forward, recurrent, self-organizing map) and their main principles
        
        can implement the perceptron algorithm in a simple binary classification problem
        
        can generate natural language sentences from a context-free grammar
        
        can parse a sentence using the Cocke-Younger-Kasami algorithm
        
        appreciates the difficulty of implementing an autonomous robot in the real world
        
        implements simple functionalities, e.g., following a line on the floor, using a robot with limited sensor capabilities`,
    },

    // ========
    //   FYS
    // ========

    // ========
    //   OTHER
    // ========
    [Id['ML-HAL-OPJT01']]: {
        code: 'ML-HAL-OPJT01',
        credits: 5,
        sisuLink:
            'https://sisu.helsinki.fi/student/courseunit/otm-a827b6f5-a83b-4b89-b609-a59268cc064b',
        studiesLink:
            'https://studies.helsinki.fi/kurssit/opintojakso/otm-a827b6f5-a83b-4b89-b609-a59268cc064b',
        description: `Opiskelija voi saada yliopiston hallinto- ja opiskelijajärjestötoiminnasta 1-5 opintopistettä`,
    },
    [Id['ML-T001']]: {
        code: 'ML-T001',
        credits: 5,
        description: `Opiskelija voi saada tuutoroinnista 5 opintopistettä`,
    },
} as const
