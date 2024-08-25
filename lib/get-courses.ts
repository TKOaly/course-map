import { CourseCode } from '@/data/course-codes'
import { courses } from '@/data/courses'
import { CourseGroup, Prerequisite } from '@/data/enums'
import { type Course } from '@/data/types'
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
        // Filter out undefined
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
            group: Object.values(CourseGroup)[
                Math.floor(
                    Math.random() * (Object.values(CourseGroup).length - 1)
                )
            ],
        }))
    )
