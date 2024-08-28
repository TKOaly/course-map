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
            Katkoviiva merkitsee suositeltua suoritusjärjestystä tai esitietoja,
            joista on hyötyä kurssilla.
            <div className="my-2 min-h-1 min-w-full border-t-2 border-dashed border-primary"></div>
            Sininen viiva merkitsee kurssivaihtoehtoja, joista osa on
            suoritettava ennen kurssille osallistumista.
            <div className="my-2 min-h-1 min-w-full border-t-2 border-sky-500"></div>
            Kartalla olevat kurssit on värikoodattu vastaamaan
            opetussuunnitelman eri opintokokonaisuuksia. <br />
            <span className="leading-relaxed text-foreground dark:text-background">
                <span className="whitespace-nowrap rounded bg-course-basic p-0.5 px-1.5 text-xs">
                    Perusopinnot
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-intermediate p-0.5 px-1.5 text-xs">
                    Aineopinnot
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-alternative p-0.5 px-1.5 text-xs">
                    Vaihtoehtoiset opintokokonaisuudet
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-minor p-0.5 px-1.5 text-xs">
                    Muun tieteenalan opinnot
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-language p-0.5 px-1.5 text-xs">
                    Kieliopinnot
                </span>{' '}
                <span className="whitespace-nowrap rounded bg-course-other p-0.5 px-1.5 text-xs">
                    Muut opinnot
                </span>{' '}
            </span>
        </SheetDescription>
        <SheetTitle className="text-base">Tiedoissa on virhe!</SheetTitle>
        <SheetDescription>
            Kurssitietoja ylläpidetään manuaalisesti, joten tiedot voivat olla
            paikoittain vanhentuneita tai puutteellisia. Varmista oikeat tiedot
            aina esim. Sisusta.
        </SheetDescription>
        <SheetDescription>
            Kurssitiedot löytyvät projektin{' '}
            <a
                className="font-medium text-foreground hover:underline active:font-normal"
                href="https://github.com/TKOaly/course-map"
                target="_blank"
                rel="external"
            >
                Githubista ↗
            </a>{' '}
            jonne voit luoda löytämästäsi virheestä issuen tai kontribuoida itse
            projektiin korjaamalla virheen pull requestillä. Projektin
            README:stä löytyy ohjeet mm. uusien kurssien lisäämiseen.
        </SheetDescription>
    </SheetContent>
)
