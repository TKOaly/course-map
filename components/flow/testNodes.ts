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
            ],
            language: 'Suomi',
            coursesLink:
                'https://studies.helsinki.fi/kurssit/opintojakso/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
            sisuLink:
                'https://sisu.helsinki.fi/student/courseunit/otm-6be30760-ad20-42b7-9314-03eb688b78a5',
        },
        position: { x: 300, y: 0 },
    },
]

export const testEdges = [
    {
        id: `${CourseCode.TKT10002}-${CourseCode.TKT10003}`,
        source: CourseCode.TKT10002,
        target: CourseCode.TKT10003,
    },
]
