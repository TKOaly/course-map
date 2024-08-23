import { CourseCode } from '@/degrees/course-codes'
import { courses } from '@/degrees/courses'
import { Prerequisite } from '@/degrees/enums'
import { type Course } from '@/degrees/types'
import { mapValues, pipe, reduce } from 'remeda'

const courseCodeEntries = Object.entries(CourseCode) as [
    keyof typeof CourseCode,
    CourseCode,
][]

const coursesWithCodes = reduce(
    courseCodeEntries,
    (acc, [code, courseCode]) => ({
        ...acc,
        [courseCode]: {
            code,
            ...courses[courseCode],
        },
    }),
    {}
) as Record<CourseCode, Course & { code: keyof typeof CourseCode }>

const getPrerequisites = (prerequisites: Course['prerequisites']) =>
    Object.entries(prerequisites ?? {})
        .filter(([_courseCode, prerequisite]) => prerequisite in Prerequisite)
        .map(([courseCode, prerequisite]) => ({
            courseCode,
            prerequisiteType: prerequisite,
        }))

export const getAllCourses = () =>
    pipe(
        coursesWithCodes,
        mapValues((course) => ({
            ...course,
            prerequisites: getPrerequisites(course.prerequisites),
        }))
    )
