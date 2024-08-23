import { type CourseCode } from './course-codes'
import {
    type CourseGroup,
    type DegreeCode,
    type Method,
    type Period,
    type Prerequisite,
} from './enums'

// Holds all included degree structures
export type Degrees = {
    [key in DegreeCode]?: {
        // Full name of the degree
        name: string

        // Used to define which courses should be included in the degree and whether they are compulsory or optional
        structures: DegreeStructures
    }
}

// OPS / Opetussuunnitelmat / Degree structures
// Lists which courses/units are required/optional for a degree
export type DegreeStructures = Record<
    string,
    {
        // Full name of the OPS/Degree structure
        name: string

        // Groups of courses that are required/optional for the degree
        groups: ({
            courseGroup: CourseGroup // Type of the course group
            description?: string
        } & (
            | {
                  compulsory: CourseCode[] // Compulsory courses
              }
            | {
                  optional: CourseCode[] // Optional standalone courses
              }
            | {
                  selectable: CourseCode[][] // Courses that must form a defined unit
              }
        ))[]
    }
>

// Lists when courses are held
export type Curriculum = {
    [key in CourseCode]?: ({
        method: Method
        sisuLink?: string
    } & (
        | {
              period: Period // Normal courses held according to the periods
              yearRound?: never
              start?: never
              end?: never
              on?: never
          }
        | {
              yearRound: true // Year-round courses
              period?: never
              start?: never
              end?: never
              on?: never
          }
        | {
              start: Date // Courses with a longer or a custom time span
              end: Date
              period?: never
              yearRound?: never
              on?: never
          }
        | {
              on: Date // Exams that are held on a specific date
              period?: never
              yearRound?: never
              start?: never
              end?: never
          }
    ))[]
}

// Maps course codes to course information
export type Courses = {
    [key in CourseCode]: Course
}

// Contains course information that stays the same regardless of the method or instance
export type Course = {
    name: string
    credits?: number
    language?: string
    description?: string
    coursesLink?: string
    sisuLink?: string
    nicknames?: string[]
    equivalents?: CourseCode[]
    prerequisites?: { [key in CourseCode]?: Prerequisite }
}
