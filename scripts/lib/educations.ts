import {
    educationTypesToInclude,
    facultiesToInclude,
    universityRootId,
} from '../config'
import { type Educations, type Rule } from '../types/educations'
import { kori } from './kori'

/**
 * Function to fetch educations from Kori API
 * @returns Promise with educations and their study programme moduleGroupIds
 */
export const getEducations = async () =>
    kori<Educations>('/educations', {
        includeExpired: false,
        degreeEducation: true,
        universityOrgId: universityRootId,
    }).then((educations) =>
        educations
            // Only include bachelor's and master's programmes
            .filter((education) =>
                educationTypesToInclude.some((type) =>
                    education.educationType.includes(type)
                )
            )
            .map((education) => ({
                ...education,
                // Flatten education programmes
                modules: modulesFromRule(education.rule),
                // Get the organisation with the highest share of responsibility
                organisation:
                    education.organisations.sort((a, b) => b.share - a.share)[0]
                        ?.organisationId ?? undefined,
            }))
            // Only include programmes from specified faculties
            .filter((education) =>
                facultiesToInclude.includes(
                    education.organisation ?? 'undefined'
                )
            )
            // Sort by name
            .sort((a, b) => a.name.fi.localeCompare(b.name.fi))
    )

// Recursively get all study programme module groupIds from education rules
const modulesFromRule = (rule: Rule): string[] =>
    rule.moduleGroupId
        ? [rule.moduleGroupId]
        : (rule.rules ?? []).flatMap<string>((rule) => modulesFromRule(rule))
