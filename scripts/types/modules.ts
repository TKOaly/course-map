// Return type of /modules/by-group-id
export type Modules = Module[]

export type Module = {
    metadata: Metadata
    id: string
    code: string
    name: Name
    type: string
    rule: Rule
    groupId: string
    targetCredits: Credits
    organisations: Organisation[]
    curriculumPeriodIds: string[]
    documentState: string
    approvalState: string
    validityPeriod: ValidityPeriod
    degreeTitleUrns?: string[]
    degreeProgramTypeUrn?: string
    degreeLanguageUrns?: string[]
    studyFields: string[]
    educationClassificationUrns?: string[]
    educationLocationUrns?: string[]
    gradeScaleId: string
    abbreviation?: string
    studyLevel?: string
    possibleAttainmentLanguages?: string[]
    graded?: boolean
    studyRightSelectionType?: string
    minorStudyRightAcceptanceType?: string
}

export type Rule = {
    type:
        | 'ModuleRule'
        | 'CourseUnitRule'
        | 'CompositeRule'
        | 'AnyModuleRule'
        | 'CreditsRule'
    localId: string
    rule?: Rule
    credits?: Credits
    rules?: Rule[]
    require?: Credits | null
    allMandatory?: boolean
    moduleGroupId?: string // -> get from /modules/by-group-id
    courseUnitGroupId?: string // -> get from /course-units/by-group-id
}

type Metadata = {
    revision: number
    createdBy: string
    createdOn: string
    lastModifiedBy: string
    lastModifiedOn: string
    modificationOrdinal: number
}

type Name = {
    en: string
    fi: string
    sv: string
}

type Credits = {
    min: number
    max: number | null
}

type ValidityPeriod = {
    startDate: string
    endDate?: string
}

type Organisation = {
    organisationId: string
    roleUrn: string
    share: number
}
