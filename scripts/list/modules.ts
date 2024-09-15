import { onlyProgrammes } from '../config'
import { getEducations } from '../lib/educations'
import { getModules } from '../lib/modules'

export const educations = getEducations().then(async (educations) =>
    console.dir(
        (
            await getModules(
                Array.from(
                    new Set(
                        educations
                            .flatMap((education) => education.modules)
                            // Only include TKT bachelors and masters
                            .filter(
                                (module) =>
                                    onlyProgrammes.length === 0 ||
                                    onlyProgrammes.includes(module)
                            )
                    )
                )
            )
        ).map((module) => ({
            // Modify this mapping to choose logged fields
            name: module.name.fi,
            groupId: module.groupId,
            courses: module.courses.length,
        })),
        { depth: 1, maxArrayLength: 50, maxStringLength: 480 }
    )
)
