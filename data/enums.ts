// Shortnames for the included degrees
// Tutkinto-ohjelmien lyhenteet
export enum DegreeCode {
    TKT = 'TKT',
    CSM = 'CSM',
    DATA = 'DATA',
    LSI = 'LSI',
}

// Groups to color code and group courses in the frontend according to Sisu
// Kurssiryhmät väritystä ja ryhmittelyä varten
export enum CourseGroup {
    BASIC = 'basic', // Perusopinnot / Basic studies
    INTERMEDIATE = 'intermediate', // Aineopinnot / Intermediate studies
    ALTERANTIVE = 'alternative', // Vaihtoehtoinen opintokokonaisuus / Alternative study module
    MINOR = 'minor', // Muun tietenalan opinnot / Study module from other discipline
    LANGUAGE = 'language', // Kieliopinnot / Language studies
    OTHER = 'other', // Muut opinnot / Other studies

    // Placeholders for courses that are not held normally but only completed on special occasions
    PLACEHOLDER = 'placeholder',
}

export enum Necessity {
    MANDATORY = 'compulsory',
    OPTIONAL = 'optional',
    SELECTABLE = 'selectable',
}

export enum Language {
    FI = 'fi',
    EN = 'en',
    SV = 'sv',
    ES = 'es',
    FR = 'fr',
    NO = 'no',
    SK = 'sk',
}

// Type of course implementation
// Kurssitoteutuksen suoritustavat
export enum Method {
    // Open University / Avoin yliopisto
    OPEN,

    // Only UH students / Vain tutkinto-opiskelijat
    LECTURE, // Luentokurssit / Lecture courses
    INDEPENDENT, // Itsenäinen opiskelu / Etäopiskelu / Independent studies / Remote studies
    EXAM, // Yleistentti / Exam
    PROJECT, // Projekti / Harjoitustyö / Project / Lab
    SEMINAR, // Seminaari / Seminar
}

// Indicates whether a previous course is required for the course or overall recommended but not required
// Edeltävän kurssin pakollisuus
export enum Prerequisite {
    MANDATORY = 1, // Esitietovaatimus / Crucial prerequisite
    RECOMMENDED, // Hyödyllinen esitieto / Useful prerequisite
    ALTERANTIVE, // Vaihtoehtoinen esitieto / Alternative prerequisite
}

// Predefined periods where most courses are held
// periodit, lukukaudet ja intensiivijaksot
export enum Period {
    // Jaksot / Periods
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    // Lukukaudet / Semesters
    AUTUMN,
    SPRING,
    // Intensiivijaksot / Intensive periods
    INTESIVE_AUGUST,
    INTENSIVE_JANUARY,
    INTENSIVE_MAY,
}
