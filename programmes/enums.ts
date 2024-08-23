// Shortnames for the included study programmes
// Tutkinto-ohjelmien lyhenteet
export enum ProgrammeCode {
    TKT = 'TKT',
}

// Groups to color code and group courses in the frontend according to Sisu
// Kurssiryhmät väritystä ja ryhmittelyä varten
export enum CourseGroup {
    BASIC,
    INTERMEDIATE,
    ALTERANTIVE_UNITS,
    MINOR_SUBJECT,
    LANGUAGES,
    OTHER,
}

// Type of course implementation
// Kurssitoteutuksen suoritustavat
export enum Method {
    // Open University / Avoin yliopisto
    OPEN,
    // Only UH students / Vain tutkinto-opiskelijat
    LECTURE,
    INDEPENDENT,
    EXAM,
    PROJECT,
    SEMINAR,
}

// Indicates whether a previous course is required for the course, just recommended
// or completely optional but still related to the course
// Edeltävän kurssin pakollisuus
export enum Prerequisite {
    MANDATORY,
    RECOMMENDED,
    OPTIONAL,
}

// Predefined periods where most courses are held
// periodit ja intensiivijaksot
export enum Period {
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    INTESIVE_AUGUST,
    INTENSIVE_JANUARY,
    INTENSIVE_MAY,
}
