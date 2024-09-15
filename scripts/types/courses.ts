// Return type of /course-units/by-group-id
export type Courses = Course[]

export type Course = {
    metadata: Metadata
    documentState: string
    id: string
    universityOrgIds: string[]
    groupId: string
    approvalState: string
    credits: Credits
    completionMethods: CompletionMethod[]
    assessmentItemOrder?: string[]
    substitutions: Substitution[][]
    name: Name
    code: string
    abbreviation?: string
    validityPeriod: ValidityPeriod
    gradeScaleId: string
    tweetText?: Text
    outcomes?: Text
    prerequisites?: Text
    recommendedFormalPrerequisites: FormalPrerequisite[]
    compulsoryFormalPrerequisites: FormalPrerequisite[]
    content?: Text
    additional: Text
    learningMaterial?: Text
    literature: Literature[]
    studyFields: string[]
    studyLevel: string
    courseUnitType: string
    cefrLevel: string | null
    responsibilityInfos: ResponsibilityInfo[]
    organisations: Organisation[]
    possibleAttainmentLanguages: string[]
    curriculumPeriodIds: string[]
    inclusionApplicationInstruction?: Text
    rdiCreditsEnabled: string
}

type Metadata = {
    revision: number
    createdBy: string
    createdOn: string
    lastModifiedBy: string
    lastModifiedOn: string
    modificationOrdinal: number
}

type Credits = {
    min: number
    max: number
}

type CompletionMethod = {
    localId: string // -> get from /assessment-items
    description?: Text
    studyType: string
    automaticEvaluation: boolean
    typeOfRequire: string
    assessmentItemIds: string[]
}

type Substitution = {
    courseUnitGroupId: string // -> get from /course-units/by-group-id
    credits?: number
}

type Name = {
    en: string
    fi: string
    sv: string
}

type Text = {
    fi?: string
    sv?: string
    en?: string
}

type FormalPrerequisite = {
    prerequisites: {
        courseUnitGroupId: string // -> get from /course-units/by-group-id
        type: string
    }[]
}

type ValidityPeriod = {
    startDate: string
    endDate?: string
}

type Literature = {
    type: string
    name: string
    localId: string
}

type ResponsibilityInfo = {
    text?: Text
    personId: string
    roleUrn: string
}

type Organisation = {
    organisationId: string
    roleUrn: string
    share: number
}
