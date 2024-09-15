import { currentCurriculumId, scriptDebug, universityRootId } from '../config'
import { type Courses } from '../types/courses'
import { kori } from './kori'

/**
 * Function to fetch courses from Kori API
 * @param courses Array of course groupIds
 * @returns Promise with courses
 */
export const getCourses = async (courses: string[]): Promise<Courses> =>
    kori<Courses>('/course-units/by-group-id', {
        groupId: courses.join(','),
        includeExpired: false,
        universityId: universityRootId,
        curriculumPeriodId: currentCurriculumId,
    }).then(async (courses) => {
        if (scriptDebug)
            console.log(
                'Fetched courses: \x1b[33m%s\x1b[0m',
                courses.map((course) => course.name.fi).join(',\n')
            )

        return courses
    })
