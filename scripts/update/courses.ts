import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { onlyProgrammes } from '../config'
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

        // Fetch courses and flatten results
        const courses = await Promise.all(
            courseGroupIdChunks.flatMap(async (idChunk) => getCourses(idChunk))
        ).then((courses) =>
            courses.flat().sort((a, b) => a.code.localeCompare(b.code))
        )

        return courses
    })
    .then((courses) => {
        // Write courses to a file
        const filePath = path.resolve(import.meta.dirname, './out.ts')
        writeFileSync(
            filePath,
            'const courses = ' + JSON.stringify(courses, null, 2)
        )
        console.log(`Courses written to ${filePath}`)
    })
