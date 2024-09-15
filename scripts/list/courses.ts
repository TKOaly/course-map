import { onlyProgrammes, scriptDebug } from '../config'
import { getCourses } from '../lib/courses'
import { getEducations } from '../lib/educations'
import { getModules } from '../lib/modules'

// Script to list all courses in specified programmes
// Used for testing and debugging the endpoints and data conversion/flattening functions
export const modules = getEducations()
    // Get study programme modules with course groupIds
    .then((educations) =>
        getModules(
            // Flatten and remove duplicates
            Array.from(
                new Set(
                    educations
                        .flatMap((education) => education.modules)
                        // Only include specified programmes
                        .filter(
                            (module) =>
                                onlyProgrammes.length === 0 ||
                                onlyProgrammes.includes(module)
                        )
                )
            )
        )
    )
    .then(async (modules) => {
        // Flatten and remove duplicates
        const courseGroupIds = Array.from(
            new Set(modules.flatMap((module) => module.courses))
        )

        // Split course groupIds into chunks to avoid 414 URI Too Long
        const courseGroupIdChunks = Array.from(
            new Array(Math.ceil(courseGroupIds.length / 40)),
            (_, i) => courseGroupIds.slice(i * 40, i * 40 + 40)
        )

        if (scriptDebug) console.log(courseGroupIdChunks)

        // Fetch courses and flatten results
        const courses = await Promise.all(
            courseGroupIdChunks.flatMap(async (idChunk) => getCourses(idChunk))
        ).then((courses) =>
            courses
                .flat()
                .sort((a, b) => a.code.localeCompare(b.code))
                .map((course) => ({
                    // Modify this mapping to choose logged fields
                    name: course.name.fi,
                    code: course.code,
                    credits:
                        course.credits.min === course.credits.max
                            ? course.credits.min
                            : `${course.credits.min} - ${course.credits.max}`,
                }))
        )

        console.dir(
            courses,

            { depth: 3, maxArrayLength: 10000, maxStringLength: 480 }
        )

        console.log('Courses amount: \x1b[33m%s\x1b[0m', courses.length)
    })
