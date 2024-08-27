import { Id } from './ids'
import { type Descriptions } from './types'

// Descriptions are in a separate file to unclutter the courses file
// Empty descriptions will be hidden in frontend

export const descriptions: Descriptions = {
    // ========
    //   TKT
    // ========
    [Id.TKT10001]: `Kurssilla opetetaan tietojenkäsittelytieteen perusteet`,
    [Id.TKT10002]: `Opintojaksolla perehdyt nykyaikaisen ohjelmoinnin perusideoihin sekä ohjelmoinnissa käytettävien työvälineiden lisäksi algoritmien laatimiseen.
            
            Opintojakson jälkeen

            1. ymmärrät periaatteen tasolla algoritmien ja tietokoneen toiminnan ja ohjelmoinnin rooli tässä toiminnassa,

            2. osaat kirjoittaa itse imperatiiviseen paradigmaan perustuvia yksinkertaisen ongelman ratkaisevia ohjelmia

            3. ja osaat käyttää ohjelmointikieltä työvälineenä datan käsittelemiseksi esimerkiksi opiskeluun, työhön tai harrastuksiin liittyvissä tilanteissa.
            `,
    [Id.TKT10003]: `Kurssilla tutustutaan olio-ohjelmoinnin lisäksi muun muassa funktionaaliseen paradigmaan ja Pythonin syvällisempään hyödyntämiseen.
        
        Opintojakson jälkeen
        
        1. ymmärrät periaatteellisella tasolla olio-ohjelmoinnin peruskäsitteet,
        
        2. osaat hyödyntää luokkia ja olioita osana omien ohjelmien suunnittelua ja toteutusta ja
        
        3. osaat käyttää funktionaalisia ominaisuuksia lyhyempien, tehokkaampien ja selkeämpien ohjelmien kirjoittamisessa.
        `,

    [Id.TKT10004]: `Kurssilla opetetaan tietokantojen perusteet`,

    [Id.TKT10005]: `Kurssilla opetetaan tietokoneen toiminnan perusteet`,

    [Id.TKT10006]: `Kurssilla opetetaan tietokoneen ja internetin perusteet`,

    [Id.TKT200010]: `Kurssilla opetetaan tietorakenteet ja algoritmit`,

    [Id.TKT200011]: `Kurssin jälkeen opiskelija
        
        tuntee O-merkinnän ja osaa analysoida sen avulla algoritmeja sekä valita tilanteeseen sopivan algoritmin
        
        tietää tehokkaita järjestämisalgoritmeja ja osaa käyttää niitä algoritmien suunnittelussa
        
        tuntee lista- ja hajautusrakenteiden toteutustapoja
        
        osaa käyttää rekursiota ohjelmoinnissa
        
        osaa verkkojen peruskäsitteet ja tuntee algoritmeja verkkojen läpikäyntiin
        `,

    [Id.TKT200012]: `Kurssin jälkeen opiskelija

        tuntee tasapainotetun binäärihakupuun ja keon toimintaperiaatteet
        
        osaa käyttää dynaamista ohjelmointia algoritmien suunnittelussa
        
        tuntee algoritmeja lyhimpien polkujen etsimiseen verkossa
        
        osaa käsitellä tehokkaasti suunnattuja syklittömiä verkkoja
        
        tuntee union-find-rakenteen ja osaa käyttää sitä pienimmän virittävän puun etsimiseen
        
        osaa määrittää verkon maksimivirtauksen ja tehdä siihen liittyviä palautuksia
        `,

    [Id.TKT20005]: `Kurssilla opetetaan laskennan mallit`,

    [Id.TKT20006]: `Kurssilla opetetaan ohjelmistotuotanto`,

    [Id.TKT20007]: `Kurssilla tehdään ohjelmistoprojekti`,

    [Id.TKT20013]: `Kurssilla tehdään kandidaatin tutkielma`,

    [Id.TKT20014]: `Kurssilla tehdään kypsyysnäyte LuK`,

    [Id.TKT20016]: `Kurssilla opetetaan laskentaympäristöt`,

    [Id.TKT20019]: `Kurssilla opetetaan tietokannat ja web-ohjelmointi`,

    [Id.TKT200091]: `Kurssilla opetetaan tietoturvan perusteet`,

    [Id.TKT200092]: `Kurssilla opetetaan tietoturvan perusteet`,

    [Id.TKT200093]: `Kurssilla opetetaan tietoturvan perusteet`,

    [Id.TKT20009]: `Kurssilla opetetaan tietoturvan perusteet`,

    [Id.TKT20015]: `Kurssin jälkeen opiskelija:

        Osaa tunnistaa ja selittää keskeisiä tietojenkäsittelyn yhteiskunnallisia vaikutuksia. Tätä varten opiskelija on tutustunut tarpeellisessa määrin alan historiaan ja ajankohtaisiin ilmiöihin. Osaa tunnistaa ja kuvailla eräitä keskeisiä yksityisyyteen, turvallisuuteen ja kestävään kehitykseen liittyviä riskejä. Osaa tunnistaa ja kuvailla eräitä lähestymistapoja ja menetelmiä, joilla riskejä voidaan yrittää hallita.

        Osaa kuvailla tietojenkäsittelytieteen olemusta ja sen asemaa muiden tieteenalojen joukossa.

        Osaa selittää, mistä tietojenkäsittelyn etiikassa ja alan ammattilaisten yhteiskunnallisessa vastuussa on kyse. Osaa tunnistaa eräitä keskeisiä alan ammatillisia ja muita järjestöjä. Osaa kuvailla eettisten ohjeistojen merkitystä ja luetella ainakin kahden keskeisen ohjeiston sisällön pääkohtia.

        Osaa tunnistaa ja selittää eräitä keskeisiä periaatteita, jotka liittyvät tekijänoikeuksiin, ohjelmistolisensseihin ja -patentteihin. Osaa kuvailla, mistä avoimen lähdekoodin filosofiassa on kyse ja tunnistaa eräitä avoimen lähdekoodin lisenssejä. Osaa luetella eräitä keskeisimpiä tietosuojalainsäädännön yksilölle antamia oikeuksia ja sen tietojenkäsittelyn ammattilaisille asettamia velvollisuuksia.

        Kurssi harjaannuttaa erityisesti seuraavissa yleisissä akateemisista asiantuntijataidoissa: eettisen ajattelun, kestävyys-, vastuullisuus- ja tulevaisuusajattelun sekä systeemisen ajattelun kehittäminen.

        Asiasisältö

        Tieto- ja viestintätekniikan historiaa ja ajankohtaisia ilmiöitä, kuten tekoäly, esineiden internet, big data.

        Tietojenkäsittelytieteen määrittelyä, sen asema muiden tieteiden joukossa.

        Tietojenkäsittelyalan ammatillisia ja tieteellisiä järjestöjä; standardointijärjestöt.

        Tietoyhteiskunta: tietojenkäsittely ja demokratia, sosiaalinen media, sananvapaus, digitaalinen kuilu, saavutettavuus.

        Tietojenkäsittely ja kestävä kehitys.

        Yksityisyys ja tietoturva: yksityisyyden ja tietoturvan filosofisia perusteita, riskit kuten yksityisyysloukkaukset, tietorikollisuus ja tietoyhteiskunnan haavoittuvaisuus, tietosuojalainsäädännön alan ammattilaisille asettamia vaatimuksia, tietokokoelmien pseudonymisointi ja anonymisointi.

        Tietojenkäsittelyn etiikka, ml. tekoälyn etiikka: eettisiä ohjeistoja, eräitä keskeisiä eettisiä kysymyksiä, mm. alan ammattilaisten vastuu ja yleisen edun merkitys.

        Immateriaalioikeudet sekä avoin koodi ja data: immateriaalioikeuden filosofisia perusteita, tekijänoikeudet, ohjelmistopatentit ja -lisenssit, tavaramerkit ja liikesalaisuudet, avoin saatavuus, avoin data ja avoin lähdekoodi (free and open source software).`,

    [Id.TKT200151]: `Kurssin jälkeen opiskelija:

        Osaa tunnistaa ja selittää keskeisiä tietojenkäsittelyn yhteiskunnallisia vaikutuksia. Tätä varten opiskelija on tutustunut tarpeellisessa määrin alan historiaan ja ajankohtaisiin ilmiöihin. Osaa tunnistaa ja kuvailla eräitä keskeisiä yksityisyyteen, turvallisuuteen ja kestävään kehitykseen liittyviä riskejä. Osaa tunnistaa ja kuvailla eräitä lähestymistapoja ja menetelmiä, joilla riskejä voidaan yrittää hallita.

        Osaa kuvailla tietojenkäsittelytieteen olemusta ja sen asemaa muiden tieteenalojen joukossa.

        Osaa selittää, mistä tietojenkäsittelyn etiikassa ja alan ammattilaisten yhteiskunnallisessa vastuussa on kyse. Osaa tunnistaa eräitä keskeisiä alan ammatillisia ja muita järjestöjä. Osaa kuvailla eettisten ohjeistojen merkitystä ja luetella ainakin kahden keskeisen ohjeiston sisällön pääkohtia.

        Osaa tunnistaa ja selittää eräitä keskeisiä periaatteita, jotka liittyvät tekijänoikeuksiin, ohjelmistolisensseihin ja -patentteihin. Osaa kuvailla, mistä avoimen lähdekoodin filosofiassa on kyse ja tunnistaa eräitä avoimen lähdekoodin lisenssejä. Osaa luetella eräitä keskeisimpiä tietosuojalainsäädännön yksilölle antamia oikeuksia ja sen tietojenkäsittelyn ammattilaisille asettamia velvollisuuksia.

        Kurssi harjaannuttaa erityisesti seuraavissa yleisissä akateemisista asiantuntijataidoissa: eettisen ajattelun, kestävyys-, vastuullisuus- ja tulevaisuusajattelun sekä systeemisen ajattelun kehittäminen.

        Asiasisältö

        Tieto- ja viestintätekniikan historiaa ja ajankohtaisia ilmiöitä, kuten tekoäly, esineiden internet, big data.

        Tietojenkäsittelytieteen määrittelyä, sen asema muiden tieteiden joukossa.

        Tietojenkäsittelyalan ammatillisia ja tieteellisiä järjestöjä; standardointijärjestöt.

        Tietoyhteiskunta: tietojenkäsittely ja demokratia, sosiaalinen media, sananvapaus, digitaalinen kuilu, saavutettavuus.

        Tietojenkäsittely ja kestävä kehitys.

        Yksityisyys ja tietoturva: yksityisyyden ja tietoturvan filosofisia perusteita, riskit kuten yksityisyysloukkaukset, tietorikollisuus ja tietoyhteiskunnan haavoittuvaisuus, tietosuojalainsäädännön alan ammattilaisille asettamia vaatimuksia, tietokokoelmien pseudonymisointi ja anonymisointi.

        Tietojenkäsittelyn etiikka, ml. tekoälyn etiikka: eettisiä ohjeistoja, eräitä keskeisiä eettisiä kysymyksiä, mm. alan ammattilaisten vastuu ja yleisen edun merkitys.

        Immateriaalioikeudet sekä avoin koodi ja data: immateriaalioikeuden filosofisia perusteita, tekijänoikeudet, ohjelmistopatentit ja -lisenssit, tavaramerkit ja liikesalaisuudet, avoin saatavuus, avoin data ja avoin lähdekoodi (free and open source software).`,

    [Id.TKT200152]: `Kurssin jälkeen opiskelija:

        Osaa tunnistaa ja selittää keskeisiä tietojenkäsittelyn yhteiskunnallisia vaikutuksia. Tätä varten opiskelija on tutustunut tarpeellisessa määrin alan historiaan ja ajankohtaisiin ilmiöihin. Osaa tunnistaa ja kuvailla eräitä keskeisiä yksityisyyteen, turvallisuuteen ja kestävään kehitykseen liittyviä riskejä. Osaa tunnistaa ja kuvailla eräitä lähestymistapoja ja menetelmiä, joilla riskejä voidaan yrittää hallita.

        Osaa kuvailla tietojenkäsittelytieteen olemusta ja sen asemaa muiden tieteenalojen joukossa.

        Osaa selittää, mistä tietojenkäsittelyn etiikassa ja alan ammattilaisten yhteiskunnallisessa vastuussa on kyse. Osaa tunnistaa eräitä keskeisiä alan ammatillisia ja muita järjestöjä. Osaa kuvailla eettisten ohjeistojen merkitystä ja luetella ainakin kahden keskeisen ohjeiston sisällön pääkohtia.

        Osaa tunnistaa ja selittää eräitä keskeisiä periaatteita, jotka liittyvät tekijänoikeuksiin, ohjelmistolisensseihin ja -patentteihin. Osaa kuvailla, mistä avoimen lähdekoodin filosofiassa on kyse ja tunnistaa eräitä avoimen lähdekoodin lisenssejä. Osaa luetella eräitä keskeisimpiä tietosuojalainsäädännön yksilölle antamia oikeuksia ja sen tietojenkäsittelyn ammattilaisille asettamia velvollisuuksia.

        Kurssi harjaannuttaa erityisesti seuraavissa yleisissä akateemisista asiantuntijataidoissa: eettisen ajattelun, kestävyys-, vastuullisuus- ja tulevaisuusajattelun sekä systeemisen ajattelun kehittäminen.

        Asiasisältö

        Tieto- ja viestintätekniikan historiaa ja ajankohtaisia ilmiöitä, kuten tekoäly, esineiden internet, big data.

        Tietojenkäsittelytieteen määrittelyä, sen asema muiden tieteiden joukossa.

        Tietojenkäsittelyalan ammatillisia ja tieteellisiä järjestöjä; standardointijärjestöt.

        Tietoyhteiskunta: tietojenkäsittely ja demokratia, sosiaalinen media, sananvapaus, digitaalinen kuilu, saavutettavuus.

        Tietojenkäsittely ja kestävä kehitys.

        Yksityisyys ja tietoturva: yksityisyyden ja tietoturvan filosofisia perusteita, riskit kuten yksityisyysloukkaukset, tietorikollisuus ja tietoyhteiskunnan haavoittuvaisuus, tietosuojalainsäädännön alan ammattilaisille asettamia vaatimuksia, tietokokoelmien pseudonymisointi ja anonymisointi.

        Tietojenkäsittelyn etiikka, ml. tekoälyn etiikka: eettisiä ohjeistoja, eräitä keskeisiä eettisiä kysymyksiä, mm. alan ammattilaisten vastuu ja yleisen edun merkitys.

        Immateriaalioikeudet sekä avoin koodi ja data: immateriaalioikeuden filosofisia perusteita, tekijänoikeudet, ohjelmistopatentit ja -lisenssit, tavaramerkit ja liikesalaisuudet, avoin saatavuus, avoin data ja avoin lähdekoodi (free and open source software).`,

    [Id.TKT20010]: `Kurssilla tehdään aineopintojen harjoitustyö`,

    [Id.TKT20012]: `Kurssilla tehdään aineopintojen harjoitustyö`,

    [Id.TKT20018]: `Kurssilla tehdään aineopintojen harjoitustyö`,

    [Id.TKT21012]: `Kurssilla opetetaan algoritmit ongelmanratkaisussa`,

    [Id.TKT21004]: `Kurssilla opetetaan computer architecture`,

    [Id.TKT21029]: `Kurssilla opetetaan functional programming`,

    [Id.TKT21030]: `Kurssilla opetetaan functional programming`,

    [Id.TKT21032]: `Kurssilla opetetaan kilpaohjelmointi`,

    [Id.TKT21033]: `Kurssilla opetetaan kilpaohjelmointi`,

    [Id.TKT21034]: `Kurssilla opetetaan kilpaohjelmointi`,

    [Id.TKT21035]: `Kurssilla opetetaan kilpaohjelmointi`,

    [Id.TKT210241]: `Kurssilla opetetaan ohjelmointihaasteita`,

    [Id.TKT210242]: `Kurssilla opetetaan ohjelmointihaasteita`,

    [Id.TKT210243]: `Kurssilla opetetaan ohjelmointihaasteita`,

    [Id.TKT21018]: `Kurssilla opetetaan tekoälyn perusteet`,

    [Id.TKT210281]: `Kurssilla opetetaan tekoälyn rakentaminen`,

    [Id.TKT210282]: `Kurssilla opetetaan tekoälyn rakentaminen`,

    [Id.TKT21031]: `Kurssilla opetetaan tekoälyn etiikka`,

    [Id.TKT21036]: `Kurssilla opetetaan DevOps with Docker`,

    [Id.TKT21037]: `Kurssilla opetetaan DevOps with Docker`,

    [Id.TKT21038]: `Kurssilla opetetaan DevOps with Docker`,

    [Id.TKT21040]: `Kurssilla opetetaan test-driven development`,

    [Id.TKT21041]: `Kurssilla opetetaan test-driven development`,

    [Id.TKT21039]: `Kurssilla opetetaan core 5G and beyond`,

    [Id.TKT21026]: `Kurssilla opetetaan network programming`,

    [Id.TKT21003]: `Kurssilla opetetaan web-palvelinohjelmointi Ruby on Rails`,

    [Id.TKT50002]: `Kurssilla opetetaan tutkimustiedonhaku`,

    [Id.TKT50004]: `Kurssilla opetetaan akateemiset taidot`,

    [Id.TKT50007]: `Opiskelija voi saada varusmiespalveluksen johtajakoulutuskesta 5 opintopistettä`,

    [Id.TKT500031]: ``,

    // ========
    //   BSCS
    // ========
    [Id.BSCS2002]: `Kurssilla opetetaan computing and society`,

    [Id.BSCS2011]: `Kurssilla opetetaan programming for performance`,

    // ========
    //   MAT
    // ========
    [Id.MAT11001]: `Kurssin jälkeen opiskelija

        Opiskelija osaa käyttää induktiotodistusta ja vastaoletustodistusta sekä muita todistustekniikoita väitteiden perustelussa.
        
        Opiskelija osaa joukkojen ja osajoukkojen perusoperaatiot, tietää mikä on joukon koko ja osaa laskea osajoukkojen lukumäärän.
        
        Opiskelija hallitsee funktioiden määritelmän ja perusominaisuudet, kuten lähtöjoukon, maalijoukon, injektiivisyyden ja surjektiivisuuden sekä bijektiivisyyden.
        
        Opiskelija tietää mitä relaatiot ovat, millaisia ominaisuuksia niillä on ja esimerkiksi mitä ovat ekvivalenssirelatatiot.
        
        Opiskelija osaa käyttää alkeislogiikkaa alkeellisten väitteiden todistamiseen.
        
        Opiskelija osaa kompleksilukujen perusteet: peruslaskutoimitukset, itseisarvo ja erilaiset esitystavat. Hän osaa ratkaista alkeellisia polynomiyhtälöita sekä johtaa trigonometria kaavoja.
        `,

    [Id.MAT12001]: `Tilastotieteen ja R-ohjelmiston käytön perusteet.
        
        Kurssin asiasisältö:
        
        Varianssi, keskihajonta, korrelaatio, ehdollinen todennäköisyys, Bayesin kaava, diskreetit ja normaalijakautuneet satunnaismuuttujat, standardinormaalijakaumam kertymäfunktio, keskeinen raja-arvolause, populaatiokeskiarvon, keskihajonnan ja osuuksien estimointi otosten avulla sekä estimaattien luottamusvälien muodostaminen. Tilastollinen hypoteesin testaus, nollahypoteesi, merkitsevyystaso, P-arvon käsite, t-testi.
        
        R-ohjelmiston käytön alkeet: 
        
        Skalaarimuuttujien, vektoreiden ja matriisien laskuoperaatiot, R:n tietotyypit, tilastolliset funktiot, simulointi ja jakaumafunktiot, ristiintaulukointi, aineiston lataaminen tiedostosta, jakaumafunktiot, omien funktioiden luominen, nimetyt argumentit ja oletusarvot argumenteille, koodin osien toistaminen, for-silmukka, sapply(), apply(), aineiston luokittelu ja luottamusvälit, listat ja tilastollinen testaaminen.`,

    [Id.MAT12002]: `Tilastotieteen ja R-ohjelmiston käytön alkeet. Tilastollinen testaaminen parametrisesti ja ei-parametrisesti käytännössä.
        
        Kurssin asiasisältö:
        
        Kahden populaation vertaaminen, t-testin yleistys, varianssianalyysi, lineaarinen regressio, yhteensopivuustestit, riippumattomuustestit, ei-parametriset testit, bayes-päättelyn alkeet.

        R-ohjelmiston käytön alkeet:
        
        Listat ja tilastollinen testaaminen, listan luominen ja komponenttien nimeäminen, koodiblokit, replicate, yhden otoksen t-testi, kahden otoksen t-testi, riippumattomuustesti, yhden ja useamman selittäjän lineaarinen regressio, if else - rakenne, Bayes-päättelyä, lisäpakettien asentaminen ja käyttäminen.
        `,

    [Id.MAT20016]: `Kurssilla opetetaan Latex`,

    // ========
    //   CSM
    // ========
    [Id.CSM141081]: ``,

    [Id.CSM141082]: ``,

    [Id.CSM141083]: ``,

    [Id.CSM14113]: ``,

    [Id.CSM14110]: ``,

    [Id.CSM14111]: ``,

    [Id.CSM14112]: ``,

    [Id.CSM141084]: ``,

    [Id.CSM14114]: ``,

    [Id.CSM141091]: ``,

    [Id.CSM141092]: ``,

    [Id.CSM141093]: ``,

    // ========
    //   MAST
    // ========

    // ========
    //   DATA
    // ========
    [Id.DATA15001]: `After the course, the student...

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

    // ========
    //   FYS
    // ========

    // ========
    //   OTHER
    // ========
    [Id['DIGI-A']]: `Kurssilla opetetaan opiskelijan digitaidot`,
    [Id['ML-HAL-OPJT01']]:
        `Opiskelija voi saada yliopiston hallinto- ja opiskelijajärjestötoiminnasta 1-5 opintopistettä`,

    [Id['ML-T001']]: `Opiskelija voi saada tuutoroinnista 5 opintopistettä`,
} as const
