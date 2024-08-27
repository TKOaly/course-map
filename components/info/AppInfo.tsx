import { SheetContent, SheetDescription, SheetTitle } from '../ui/sheet'

export const AppInfo = () => (
    <SheetContent className="flex max-h-full min-h-full flex-col gap-2 overflow-y-auto">
        <SheetTitle className="text-xl font-bold">Kurssikartta</SheetTitle>
        <SheetDescription>
            Kurssikartalla voit tarkastella tutkinto-ohjelmien tarjoamia
            kursseja ja niiden esitietovaatimuksia.
        </SheetDescription>
        <SheetTitle className="text-base">Kartan käyttö ja tulkinta</SheetTitle>
        <SheetDescription>
            Zoomaa karttaa ja paina kursseista nähdäksesi lisätietoja.
            Lisätiedoista voit siirtyä suoraan kurssin Studies- tai
            Sisu-sivuille.
        </SheetDescription>
        <SheetDescription className="rounded border border-primary p-3">
            <span className="font-semibold text-foreground">Värit</span>
            <br />
            Yhtenäinen viiva kurssien välillä merkitsee kurssilla vahvasti
            suositeltua tai pakollista esitietovaatimusta.
            <div className="my-2 min-h-1 min-w-full border-t-2 border-primary"></div>
            Katkoviiva merkitsee esitietoja, joista on hyötyä kurssilla tai
            suositeltua suoritusjärjestystä.
            <div className="my-2 min-h-1 min-w-full border-t-2 border-dashed border-primary"></div>
            Sininen viiva merkitsee kurssivaihtoehtoja, joista osa on
            suoritettava ennen kurssille osallistumista.
            <div className="my-2 min-h-1 min-w-full border-t-2 border-sky-500"></div>
            Kartalla olevat kurssit on värikoodattu vastaamaan
            opetussuunnitelman eri opintokokonaisuuksia samoilla väreillä kuin
            Sisussa.
        </SheetDescription>
        <SheetTitle className="text-base">Tiedoissa on virhe!</SheetTitle>
        <SheetDescription>
            Kurssitietoja ylläpidetään manuaalisesti, joten tiedot voivat olla
            paikoittain vanhentuneita tai puutteellisia.
        </SheetDescription>
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
