import { SheetContent, SheetDescription, SheetTitle } from '../ui/sheet'

export const AppInfo = () => (
    <SheetContent className="flex max-h-full min-h-full flex-col gap-2 overflow-y-auto">
        <SheetTitle className="text-xl font-bold">Kurssikartta</SheetTitle>
        <SheetDescription>
            Kurssikartta on ensisijaisesti Helsingin yliopiston
            tietojenkäsittelytieteen opiskelijoille suunnattu sovellus, jolla
            voi tarkastella tutkinto-ohjelmien tarjoamia kursseja ja niihin
            liittyviä tietoja kuten esitietovaatimuksia, toteutuksia ja
            vastaavuuksia.
        </SheetDescription>
        <SheetDescription>
            Kurssitietoja ylläpidetään manuaalisesti, joten tiedot mm. kurssien
            toteutuksista voivat olla vanhentuneita tai puutteellisia. Kurssien
            esitietovaatimukset ja opetussuunnitelmien rakenne muuttuvat
            kuitenkin harvemmin, joten nämä tiedot ovat yleensä ajantasaisempia.
        </SheetDescription>
        <SheetTitle className="text-base">Kurssitiedoissa on virhe!</SheetTitle>
        <SheetDescription>
            Kurssitiedot löytyvät projektin{' '}
            <a
                className="font-medium text-foreground hover:underline active:font-normal"
                href="https://github.com/TKOaly/course-map"
                target="_blank"
                rel="noreferrer"
            >
                Githubista ↗
            </a>{' '}
            jonne voit luoda löytämästäsi virheestä issuen tai kontribuoida itse
            projektiin korjaamalla virheen pull requestillä.
        </SheetDescription>
        <SheetDescription>
            Projektin tietorakenteet on pyritty kuvaamaan mahdollisimman
            selkeästi projektin README:ssä josta löytyy myös ohjeet mm. uusien
            kurssien lisäämiseen.
        </SheetDescription>
        {/*<SheetDescription>
	Sovelluksessa on mahdollisuus ylläpitää useiden tutkintojen
	ja opetussuunnitelmien kurssitietoja, joten voit halutessasi
	alkaa ylläpitää kurssikarttaa myös omalle
	tutkinto-ohjelmallesi.
</SheetDescription>*/}
    </SheetContent>
)
