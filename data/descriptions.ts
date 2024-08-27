import { Id } from './ids'
import { type Descriptions } from './types'

// Descriptions are in a separate file to unclutter the courses file
// Empty descriptions will be hidden in frontend

export const descriptions: Descriptions = {
    // ========
    //   TKT
    // ========
    [Id.TKT10001]: ``,
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

    [Id.TKT10004]: `Kurssin jälkeen opiskelija ymmärtää tietokannan toteuttamiseen liittyviä haasteita,
        osaa SQL-kielen perusteet ja suunnitella omia kyselyitä,
        osaa käyttää tietokantaa ohjelmointikielen kautta,
        osaa suunnitella relaatiomallin mukaisia tietokantoja,
        tuntee tiedon eheyden, transaktioiden ja indeksien periaatteet,
        tuntee relaatiomallin taustalla olevaa teoriaa,
        tietää joitakin NoSQL-tietokantoja ja niiden ominaisuuksia

        Asiasisältö

        Tietokantojen haasteet ja relaatiomallin idea,
        SQL-kielen käyttäminen,
        Tietokannan käyttäminen ohjelmoinnissa,
        Tietokannan suunnittelu,
        Tietokantojen ominaisuudet (tiedon eheys, transaktiot, indeksit),
        Relaatiomallin teoria,
        Esimerkkejä NoSQL-tietokannoista`,

    [Id.TKT10005]: ``,

    [Id.TKT10006]: `Kurssin jälkeen osaat

        kuvailla tietokoneen perusrakenteen ja kertoa mitä tapahtuu koneen käynnistyksessä,
        kertoa missä kaikkialla tietokone voi säilyttää tietoa,
        kertoa mikä on prosessi ja mikä sen merkitys on ohjelman suorituksessa,
        selvittää verkkonumeron ja verkkonimen yhteyden sekä muuntaa verkkonumeron sitä vastaavaan binäärimuotoon ja toisinpäin,
        kuvailla Internetin rakenteen ja sen keskeiset toimintaperiaatteet,
        laatia konekielisen ohjelman, joka käsittelee yksinkertaista tietorakennetta ja arvojen sijoittamista muuttujille,
        selittää ja kuvata erilaisia tiedonesitystapoja sekä tehdä lukumuunnoksia erilaisten lukujärjestelmien välillä,
        selittää usean prosessin suorittamista ja keskeytysten käsittelyä,
        kuvata verkkoviestien lähettämisen ja vastaanottamisen,
        selittää Internetin keskeiset palvelut ja protokollat (DNS, HTTP, TCP, IP, DHCP, reititys) ja niiden toiminnan,
        perustella tiedon suojauksen merkityksen ja selittää jonkun esitellyn menetelmän toiminnan periaatteet.
        
        Kurssi harjaannuttaa erityisesti seuraavissa yleisissä akateemisista asiantuntijataidoissa: ryhmätyö, ammattikirjallisuuden lukeminen suomeksi ja englanniksi, akateeminen kirjoittaminen, ajanhallinta sekä rakentavan vuorovaikutuksen taidot.

        Kurssi harjaannuttaa myös alan yleisiä taitoja kuten komentotulkin ja LaTeXin peruskäyttöä.

        Asiasisältö

        Tietokoneen käynnistäminen ja perusrakenne (bootstrap, CPU, muisti, väylä, käyttöjärjestelmän lataus, prosessi)

        Verkkoasetukset (oma verkko-osoite, DHCP, hakemistorakenne /etc)

        Tietokoneen toiminta: konekielinen ohjelmointi, tiedon esitystavat ja muunnokset (kirjaimet, merkkijonot, IPv4 -desimaaliluku/binääri, IPv6/MAC - heksadesimaali/binääri)

        Modernin tietokoneen lyhyt esittely (moniprosessori, GPU)

        Verkkosivun nouto selaimella (I/O, keskeytykset, protokollapino, IP-osoitteet, DNS, HTTP, TCP, IP)

        Verkon toimintaa (verkkojen verkko, reititystaulu ja pakettien edelleenlähetys), häiriöitä (väylällä, verkossa, vikasietoisuuden koodaukset, Hamming, CRC, salaus)`,

    [Id.TKT200010]: ``,

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

    [Id.TKT20005]: ``,

    [Id.TKT20006]: ``,

    [Id.TKT20007]: ``,

    [Id.TKT20013]: ``,

    [Id.TKT20014]: ``,

    [Id.TKT20016]: ``,

    [Id.TKT20019]: `Kurssin jälkeen opiskelija

        ymmärtää web-sovellusten taustalla olevat perusideat
        osaa toteuttaa tietokantaa käyttävän web-sovelluksen
        osaa käyttää versionhallintaa ja siirtää sovelluksen tuotantoon
        osaa ottaa tietoturvan huomioon web-sovelluksen kehityksessä
        
        Asiasisältö
        
        Web-sovellusten taustalla olevat ideat

        Tietokantaa käyttävän web-sovelluksen toteuttaminen

        Versionhallinnan käyttäminen

        Web-sovelluksen siirtäminen tuotantoon

        Tietoturva web-sovelluskehityksessä`,

    [Id.TKT200091]: ``,

    [Id.TKT200092]: ``,

    [Id.TKT200093]: ``,

    [Id.TKT20009]: ``,

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

    [Id.TKT20010]: ``,

    [Id.TKT20012]: ``,

    [Id.TKT20018]: ``,

    [Id.TKT21012]: ``,

    [Id.TKT21004]: ``,

    [Id.TKT21029]: `After the course you
            
        know the basic principles of functional programming,
        
        can implement simple algorithms using the Haskell programming language,
        
        can fluently use recursion in programming.`,

    [Id.TKT21030]: ``,

    [Id.TKT21032]: ``,

    [Id.TKT21033]: ``,

    [Id.TKT21034]: ``,

    [Id.TKT21035]: ``,

    [Id.TKT210241]: ``,

    [Id.TKT210242]: ``,

    [Id.TKT210243]: ``,

    [Id.TKT21018]: `Kurssin suorittamisen jälkeen osaat:
        
        nimetä autonomisuuden ja adaptiivisuuden tekoälyn ominaispiirteiksi,
        
        erottaa toisistaan tieteiskirjallisuuden tekoälyn ja oikean tekoälyn,
        
        kuvailla tekoälyn keskeiset filosofiset kysymykset liittyen Turingin testiin ja kiinalaisen huoneen ajatuskokeeseen,
        
        muotoilla tosielämän ongelmia etsintäongelmina,
        
        muotoilla yksinkertaisia pelejä (kuten ristinolla) pelipuuksi,
        
        soveltaa minimax-periaatetta optimaalisten pelisiirtojen ratkaisemiseen rajoitetun kokoeisessa pelipuussa,
        
        ilmaista todennäköisyysarvoja luonnollisina frekvensseinä,
        
        soveltaa Bayesin kaavaa yksinkertaisissa skenaarioissa,
        
        selittää esiintyvyysharhan ja välttää sen bayesilaisen päättelyn avulla selittää miksi koneoppimista tarvitaan,
        
        erottaa ohjatun ja ohjaamattoman koneoppimisen tilanteet toisistaan,
        
        selittää seuraavan kolmen ohjatun koneoppimisen menetelmän periaatteet: lähimmän naapurin luokitin, lineaariregressio ja logistinen regressio,
        
        selittää, mitä neuroverkot ovat ja mihin tarkoituksiin ne sopivat,
        
        ymmärtää myös neuroverkkojen taustalla olevien menetelmien rajoitukset,
        
        ymmärtää tulevaisuuden ennustamisen vaikeus, jotta voit paremmin arvioida tekoälystä esitettyjen väitteiden uskottavuutta,
        
        tunnistaa joitakin tekoälyn merkittävimpiä yhteiskunnallisia vaikutuksia, kuten algoritmista syrjintää, väärennettyjä sisältöjä, yksityisyydensuojaa ja työelämän murrosta`,

    [Id.TKT210281]: `The course can be completed on three difficulty levels. The following learning objectives are achieved after completing the course on the advanced level. On the intermediate level, the same objectives are partially achieved.

        After the course, you are able to:

        describe different types of AI such as optimization, reasoning, and learning,
        
        choose a suitable AI approach to solve simple tasks such as route planning, probabilistic inference, and pattern recognition,
        
        implement a straightforward brute-force optimization algorithm,
        
        implement simple probabilistic inference based on statistical data using the Bayes rule,
        
        build linear regression models from data, and use the models to predict variables of interest, such as apartment prices,
        
        use the nearest neighbor method to predict variables of interest,
        
        use cross-validation to avoid under- and overfitting,
        
        build and apply logistic regression and simple neural network models for prediction`,

    [Id.TKT210282]: `The course can be completed on three difficulty levels. The following learning objectives are achieved after completing the course on the advanced level.

        After the course, you are able to:

        describe different types of AI such as optimization, reasoning, and learning,
        
        choose a suitable AI approach to solve simple tasks such as route planning, probabilistic inference, and pattern recognition,
        
        implement a straightforward brute-force optimization algorithm,
        
        implement simple probabilistic inference based on statistical data using the Bayes rule,
        
        build linear regression models from data, and use the models to predict variables of interest, such as apartment prices,
        
        use the nearest neighbor method to predict variables of interest,
        
        use cross-validation to avoid under- and overfitting,
        
        build and apply logistic regression and simple neural network models for prediction`,

    [Id.TKT21031]: `Kurssin jälkeen ymmärrät eettisen ajattelun roolin tekoälyjärjestelmien suunnittelussa ja toteuttamisessa,
        
        osaat kuvailla erilaisia tekoälyyn liittyviä eettisiä näkökulmia ja huomioonotettavia seikkoja,
        
        osaat analysoida tekoälyratkaisujen riskejä ja mahdollisuuksia etiikan näkökulmasta,
        
        osaat tunnistaa milloin tekoälyratkaisujen toteuttamisessa tarvitaan eettistä harkintaa,
        
        pystyt seuraamaan etiikkaan liittyviä keskusteluja sekä julkisissa että asiantuntijayhteisöissä,
        
        tiedät eettisten suositusten olemassaolosta ja pystyt soveltamaan niitä suoraviivaisissa tapauksissa, sekä
        
        ymmärrät milloin jonkin eettinen kysymyksen ratkaiseminen tarvitsee lisäosaamista. `,

    [Id.TKT21036]: `This part introduces containerization with Docker and relevant concepts such as image and volume. By the end of this part you are able to:

        Run containerized applications
        
        Containerize applications
        
        Utilize volumes to store data persistently outside of the containers.
        
        Use port mapping to enable access via TCP to containerized applications
        
        Share your own containers publicly`,

    [Id.TKT21037]: ``,

    [Id.TKT21038]: ``,

    [Id.TKT21040]: ``,

    [Id.TKT21041]: ``,

    [Id.TKT21039]: ``,

    [Id.TKT21026]: ``,

    [Id.TKT21003]: `Ruby on Rails on vanhempi MVC-websovelluskehys. Monet isot ja tunnetut sovellukset kuten Twitter, Heroku, AirBnB ja GitHub olivat aluksi Railsilla ohjelmoituja, osa näistä luottaa Railsiin edelleen.

        Kurssilla keskitytään palvelinpuolen toiminnallisuuden toteuttamiseen, kurssilla tuotettavat käyttöliittymät tulevat olemaan alkeellisia. Kurssi ei ole johdatuskurssi selainohjelmointiin ja käyttöliittymäsuunnitteluun, HTML:n, CSS:n ja JavaSacriptin rooli kurssilla on hyvin vähäinen.
        
        Kurssilla ei esim. varsinaisesti opeteta Rubyä ollenkaan, jokaisen osallistujan on hankittava kurssin aikana omatoimisesti riittävät valmiudet Rubyn käyttöön`,

    [Id.TKT210031]: `Learn how to build interactive web pages with the Hotwire tool provided by Rails 7 

        Asiasisältö
        
        Turbo fames
        
        Turbo streams
        
        Action Cable
        
        Stimulus`,

    [Id.TKT50002]: ``,

    [Id.TKT50004]: `Kurssista järjestetään yleensä yksi luento jokaisena opiskeluvuonna
    
    Osaamistavoitteet

    Opiskelija tietää opinnoissa tarvittavat tietojärjestelmät ja oppii käyttämään niitä.
        
    Hän tietää mikä on HUL-kysely ja miten tätä työkalua voi käyttää omien oppimistapojen kehittymisen seuraamisessa.
    
    Opiskelija tuntee koulutusohjeman opetussuunnitelman, miten omia opintoja voi seurata ja nopeuttaa, sekä miten valmistua ja mitkä ovat mahdolliset maisteriopintojen ohjelmat.
    
    Hän myös tietää, minkälaisia tukipalveluja on saatavilla ja mistä niitä voi kysellä.

    Asiasisältö
    
    SISU, HOPS, HUL-kyselyt, tutkintorakenne, akateeminen mentorointi, opintojen seuranta, tukipalvelut, vaihto-opiskelu, LUK-tutkinnon hakeminen, FM-opintoihin siirtyminen.`,

    [Id.TKT50007]: `Opiskelija voi saada varusmiespalveluksen johtajakoulutuskesta 5 opintopistettä`,

    [Id.TKT500031]: `Kurssin tavoitteena on varmistaa, että sinulla on tarvittavat käytännön taidot tietojenkäsittelytieteen opintoihin.
    
        Tavoitteena on, että opit komentorivin alkeet, käyttämään versionhallintaa suoraviivaisesti koodiprojektissa, sekä luomaan yksinkertaisen staattisen verkkosivun.`,

    // ========
    //   BSCS
    // ========
    [Id.BSCS2002]: ``,

    [Id.BSCS2011]: ``,

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

    [Id.MAT20016]: `Osaamistavoitteet

        Opiskelija osaa käyttää LaTeX-ladontaohjelmaa. Kurssi antaa valmiudet latoa esimerkiksi matemaattista tekstiä sisältäviä harjoitustehtävien ratkaisuja ja opinnäytetöitä.

        Asiasisältö

        LaTeX-ladontaohjelman käytön perusteet.`,

    [Id.MAT11009]: `Kurssin käytyään opiskelija tuntee sovelluksissa tarvittavan lineaarialgebran ja matriisilaskennan matemaattisen perusteet ja perusteet lineaarialgebrallisten ongelmien ratkaisemisesta soveltuvilla ohjelmointityökaluilla.

        Asiasisältö
        
        Kurssilla perehdytään lineaarialgebran ja matriisilaskennan sovelluksissa käytettäviin peruskäsitteisiin ja menetelmiin. Kurssin aiheita ovat:

        Lineaariset yhtälöryhmät ja matriisit
        Vektoriavaruudet ja lineaarikuvaukset
        Sisätulo ja ortogonaalisuus
        Determinantti ja ominaisarvot
        Matriisihajotelmat
        Käsiteltyä teoriaa harjoitellaan laskennallisten harjoitustehtävien avulla.`,

    [Id.MAT11015]: `Kurssin käytyään opiskelija tuntee sovelluksissa tarvittavan vektorianalyysin ja todennäköisyyslaskennan matemaattiset perusteet ja on tutustunut menetelmien soveltamiseen ohjelmointityökaluilla.

        Asiasisältö
        
        Kurssilla perehdytään vektorianalyysin ja todennäköisyyslaskennan peruskäsitteisiin ja menetelmiin. Kurssin aiheita ovat:
        
        Derivaatta ja differentiaali, Osittaisderivaatat ja gradientti, Taylorin sarjat, Diskreetit ja jatkuvat jakaumat, Riippumattomuus, Gaussiset jakaumat, Optimointi
        
        Käsiteltyä teoriaa harjoitellaan laskennallisten harjoitustehtävien avulla.`,

    [Id.MAT11002]: `Opintojaksolla käsitellään lineaarialgebran ja matriisilaskennan perusteoriaa. Opintojakso keskittyy lineaaristen yhtälöryhmien ratkaisumenelmiin ja ratkaisujen tulkintaan matriisien ja aliavaruuksien avulla. Opintojakson tietoja hyödynnetään laajasti matematiikan perus- ja aineopinnoissa ja matematiikkaa hyödyntävissä muiden alojen opinnoissa. Opintojaksoa suositellaan esitietona kaikille, jotka tarvitsevat tilastollisen analyysin tai useamman muuttujan menetelmiä.
        Opintojakso on ensimmäinen osa kolmen opintojakson sarjaa, joiden aikana käsitellään äärellisulotteisten vektoriavaruuksien ja lineaarikuvausten perusteet.

        Asiasisältö
        
        Lineaariset yhtälöryhmät ja yhtälöryhmän supistettu porrasmuoto,
        Yhtälöryhmän esittäminen matriisina ja matriisien laskutoimitukset,
        Yhtälöryhmien ratkaisujen tulkinta aliavaruuksina ja matriiseihin liittyvät aliavaruudet,
        Pistetulo ja kohtisuoruus euklidisessa avaruudessa,
        Determinantti: teoreettisesti ja käytännössä,
        Neliömatriisin ominaisarvot ja ominaisvektorit.`,

    [Id.MAT21001]: `Osaamistavoitteet:
        
        Vektoriavaruuksiin sekä lineaarikuvauksiin liittyvät peruskäsitteet ja -taidot.
        
        Matematiikan lukemisen ja kirjoittamisen perusteet sekä matematiikasta keskusteleminen.`,
    [Id.MAT11003]: `Osaamistavoitteet

        Opiskelija osaa käyttää itseisarvoa todistuksissa, ratkaista itseisarvoepäyhtälöitä ja ymmärtää itseisarvon geometrisen tulkinnan.
        Opiskelija tietää millaisia ominaisuuksia lukujonoilla ja lukujonojen osajonoilla on ja miten näitä voidaan perustella sekä hän osaa käyttää niitä.
        Opiskelija tietää mitkä ovat supremum ja infimum, miten niitä käytetään ja miten ne eroavat maksimista ja minimistä.
        Opiskelija osaa johtaa ja perustella funktion ja lukujonon raja-arvon täsmällisesti epsilon-menetelmällä.

        Asiasisältö

        Itseisarvoepäyhtälö ja sen geometrinen tulkinta.
        supremum ja infimum ja niiden ja maksimin ja minimin ero
        monotonisten lukujonojen ominaisuuksia
        funktion raja-arvo
        funktion ja lukujonon raja-arvo epsilon-menetelmällä
        osajonojen ominaisuudet
        Bolzano-Weierstrassin lause
        reaalilukujen joukon ylinumeroituvuus`,

    // ========
    //   CSM
    // ========
    [Id.CSM141081]: `Osaamistavoitteet
        
        Fluency in architecting and building robustly tested Single page applications with React, Redux and Express libraries.

        In the learning, emphasis is put on building modular software applying the functional programming paradigm.

        Asiasisältö
        
        Fundamentals of HTML and CSS for structuring browser based apps
        Building and structuring component based frontend code with React
        State management with React hook store and Redux (using the Flux architecture)
        HTTP protocol and RESTfull APIs
        Building RESTfull services with Node/Express
        Data modelling with Document databases
        Unit, integration and End to End testing with Jest and Cypress.io(aukeaa uuteen välilehteen) libraries
        Build configuration using WebPack-library`,

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
    [Id.FYS1015]: `Kurssin jälkeen opiskelijalla on käsitys fysikaalisesta, tutkivasta tavasta tulkita ja ymmärtää erilaisia ilmiöitä. Hänellä on myös käsitys siitä, miten nykyfysiikan tieto on historiallisesti rakentunut. Hän tietää, mitkä ovat fysiikan keskeiset osa-alueet, fysikaalisen ongelmanratkaisun periaatteet sekä fysiikan peruskäsitteet.

        Asiasisältö

        1. Mekaniikkaa: mekaniikan peruskäsitteistö, suhteellisuusperiaate, impulssiperiaate ja energiaperiaate

        2. Sähkömagnetismia: sähkön ja magnetismin peruskäsitteistö, kentän käsite, sähkömagnetismin ja sähködynamiikan peruslait

        3. Termofysiikkaa: kineettinen kaasuteoria, termofysiikan pääsäännöt ja entropia

        4. Energian kvantittuminen, kvanttimekaniikan hahmottelua`,

    [Id.FYS1010]: `Osaamistavoitteet

        Kurssin jälkeen opiskelija osaa vektorialgebran perusteet erityisesti kolmiulotteisen vektoriavaruuden tapauksessa. Opiskelija osaa muodostaa vektorien välisen piste- ja ristitulon, ja tunnistaa näiden geometrisen tulkinnan. Opiskelija osaa derivoida yhden muuttujan reaalifunktioita. Opiskelija tuntee reaalifunktion integraalifunktion käsitteen,  sen geometrisen tulkinnan sekä yhteyden määrätyn integraalin käsitteeseen. Opiskelija osaa integroida alkeisfunktioita ja osaa soveltaa erilaisia integrointimenetelmiä.
        
        Asiasisältö
        
        Vektorilaskennan perusteita: vektorialgebra ja vektorien tulot
        
        Potenssisarjat
        
        Reaalifunktioiden differentiaali- ja integraalilaskentaa`,

    [Id.FYS1014]: `Kurssin jälkeen opiskelijaa osaa käyttää tärkeimpiä havaintojen ja laboratoriomittausten käsittelyssä tarvittavia tilastollisia menetelmiä. Hänellä on perusvalmius tilastollisen valmisohjelmistojen käyttöön ja hän osaa esittää tilastollisen analyysin tuloksia myös kuvien avulla.

        Asiasisältö

        1. Tilastollisen aineiston kuvailumenetelmät

        2. Keskeiset tilastolliset tunnusluvut

        3. Tilastollinen todennäköisyys ja tärkeimmät diskreetit ja jatkuvat tilastolliset todennäköisyysjakaumat (mm. binomijakauma, Poisson-jakauma, tasainen jakauma, eksponenttijakauma ja normaalijakauma)

        4. Tilastollinen estimointi ja virhearviointimenetelmät (mm. keskiarvon keskivirhe ja keskivirheen kasautumislaki)

        5. Tilastollisen testaukseen periaatteet ja tärkeimmät tilastolliset testit (mm. normaalijakaumatesti, t-testi, khii-toiseen-testi)

        6. Korrelaatio ja lineaarinen regressio

        7. Aikasarja-analyysin perusteita, mm. aikasarjan lineaarisen trendin ja liukuvien keskiarvojen määrittäminen. Fourier-analyysin  perusteet.

        8. Kaoottisen ja ei-kaaottisen järjestelmän erot`,

    // ========
    //   OTHER
    // ========
    [Id['DIGI-A']]:
        `Tietokoneen käytön perusteet: Opiskelija osaa käyttää tietokonetta, sen oheislaitteita ja hallitsee tiedostojen sekä hakemistojen käytön. Lisäksi hän selviytyy yleisimmistä tietoteknisistä ongelmatilanteista, hallitsee Internetin käytön perusteet ja tuntee verkko-etiketin perusteet.

        Helsingin yliopiston tietotekninen ympäristö: Opiskelija osaa käyttää itsenäisesti HY:n tietoteknistä ympäristöä ja sen palveluita. Lisäksi opiskelija tietää, millä HY:n tarjoamilla verkko-opiskelun palveluilla hän voi edistää opiskeluaan.

        Tiedonhankinta: Opiskelija osaa käyttää HY:n kirjastojen palveluita ja hakea tietoa eri lähteistä. Hän tuntee erilaisia hakutekniikoita, joiden avulla voi tehostaa työskentelyään. Lisäksi tekijänoikeuksiin liittyvät perusteet tulevat opiskelijalle tutuiksi.

        Tietoturva ja tietosuoja: Opiskelija ymmärtää tietoturvan ja tietosuojan merkitykseen opiskelun ja muun toiminnan kannalta. Lisäksi hän osaa vaikuttaa omaan tietoturvaansa tekemiensä valintojen kautta.`,

    [Id['ML-HAL-OPJT01']]:
        `Opiskelija voi saada yliopiston hallinto- ja opiskelijajärjestötoiminnasta 1-5 opintopistettä`,

    [Id['ML-T001']]: `Opiskelija voi saada tuutoroinnista 5 opintopistettä`,
} as const
