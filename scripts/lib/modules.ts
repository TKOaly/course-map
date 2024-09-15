import { currentCurriculumId, scriptDebug, universityRootId } from '../config'
import { type Module, type Modules, type Rule } from '../types/modules'
import { kori } from './kori'

/**
 * Function to fetch modules from Kori API
 * @param modules Array of module groupIds
 * @returns Promise with modules and their included course groupIds
 */
export const getModules = async (
    modules: string[]
): Promise<(Module & { courses: string[] })[]> =>
    kori<Modules>('/modules/by-group-id', {
        groupId: modules.join(','),
        includeExpired: false,
        universityId: universityRootId,
        curriculumPeriodId: currentCurriculumId,
    }).then(async (modules) => {
        if (scriptDebug)
            console.log(
                'Fetched modules: \x1b[33m%s\x1b[0m',
                modules.map((module) => module.name.fi).join(', ')
            )

        return (
            await Promise.all(
                modules.map(async (module) => ({
                    ...module,
                    // Flatten module rules to get all courses in the module
                    courses: await coursesFromRule(module.rule),
                }))
            )
        ).sort((a, b) => a.name.fi.localeCompare(b.name.fi))
    })

// Recursively get all courses from module rules
const coursesFromRule = async (rule: Rule): Promise<string[]> => {
    // If the rule is a course unit leaf, return it
    if (rule.courseUnitGroupId) return [rule.courseUnitGroupId]

    // If the rule is a module leaf, fetch it and return its courses
    if (rule.moduleGroupId)
        return [
            ...(await getModules([rule.moduleGroupId]).then((modules) =>
                modules.flatMap((module) => module.courses)
            )),
        ]

    // If the rule has a subrule, return its courses
    if (rule.rule) return coursesFromRule(rule.rule)

    // If the rule has multiple subrules, return their courses
    if (rule.rules) {
        const subModules = rule.rules
            .filter((rule) => rule.moduleGroupId)
            .map((rule) => rule.moduleGroupId!)

        return [
            // Fetch courses from module leaves
            // This is not called recursively to allow fetching multiple modules in one request
            ...(subModules.length > 0
                ? await getModules(subModules).then((modules) =>
                      modules.flatMap((module) => module.courses)
                  )
                : []),
            // Get other leaves and subrules recursively
            ...(
                await Promise.all(
                    rule.rules
                        .filter((rule) => !rule.moduleGroupId)
                        .map(async (rule) => await coursesFromRule(rule))
                )
            ).flat(),
        ]
    }
    return []
}
