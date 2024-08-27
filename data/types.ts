import {
    type CourseGroup,
    type DegreeCode,
    type Language,
    type Method,
    type Necessity,
    type Period,
    type Prerequisite,
} from './enums'
import { type Id } from './ids'

// Holds all included degree structures
export type Degrees = {
    [key in DegreeCode]: {
        // Full name of the degree
        name: string

        // Used to define which courses should be included in the degree and whether they are compulsory or optional
        structures: DegreeStructures
    }
}

export type DegreeStructures = Record<string, DegreeStructure>

// OPS / Opetussuunnitelmat / Degree structures
// Lists which courses/units are required/optional for a degree
export type DegreeStructure = {
    // Full name of the OPS/Degree structure
    name: string

    // Groups of courses that are required/optional for the degree
    groups: ({
        type: CourseGroup // Type of the course group
        description?: string
    } & (
        | {
              necessity: Necessity.MANDATORY | Necessity.OPTIONAL
              courses: Id[] // Compulsory courses
          }
        | {
              necessity: Necessity.SELECTABLE
              courses: Id[][] // Courses that must form a defined unit
          }
    ))[]
}

// Lists when courses are held
export type Curriculum = {
    [key in Id]?: ({
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
    [code in keyof typeof Id as (typeof Id)[code]]: Course<
        code,
        (typeof Id)[code]
    >
}

// Type of the course data maintained in the repo
// Contains course information that stays the same regardless of the course implementation
export type Course<code = keyof typeof Id, id = never> = {
    code: code
    credits?: number
    languages?: Language[]
    studiesLink?: string
    sisuLink?: string
    nicknames?: string[]
    equivalents?: Id[]
    prerequisites?: { [key in Exclude<Id, id>]?: Prerequisite } // Ensures course is not its own prerequisite
}

export type Descriptions = {
    [code in Id]: string
}
