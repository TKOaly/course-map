import { getEducations } from '../lib/educations'

export const educations = getEducations().then((educations) => {
    console.dir(
        educations.map((education) => ({
            // Modify this mapping to choose logged fields
            name: education.name.fi,
            educationType: /(?<=:)(?:\w|-)*$/.exec(
                education.educationType
            )?.[0],
            programmes: education.modules.length,
        })),
        { depth: 3, maxArrayLength: 100000, maxStringLength: 480 }
    )
})
