// Return type of /educations
export type Educations = Education[]

export type Education = {
    metadata: Metadata // Crated/modified dates
    id: string // unique ID
    groupId: string // group ID, not unique
    name: Name // names in different languages
    validityPeriod: ValidityPeriod
    code: string
    educationType: string // bachelors, masters, doctor etc.
    studyFields: string[]
    organisations: Organisation[]
    attainmentLanguages: string[]
    educationLocationUrn?: string
    structure: Structure
    studySelectionRequirement: string
    type: string
    rule: Rule
}

export type Rule = {
    type: 'ModuleRule' | 'CompositeRule'
    localId: string
    moduleGroupId?: string // -> get from /modules/by-group-id
    rules?: Rule[]
    require?: Require
    allMandatory?: boolean
}

type Require = {
    min: number
    max: number
}

type Name = {
    fi: string
    en?: string
    sv?: string
}

type Metadata = {
    revision: number
    createdBy: string
    createdOn: string
    lastModifiedBy: string
    lastModifiedOn: string
    modificationOrdinal: number
}

type ValidityPeriod = {
    startDate: string
    endDate?: string
}

type Organisation = {
    organisationId: string // -> get from /organisations
    share: number
}

type Structure = {
    phase1: Phase
    phase2?: Phase
}

type Phase = {
    name: Name
    options: Option[]
}

type Option = {
    localId: string
    moduleGroupId: string // -> get from /modules/by-group-id
    childOptions?: Option[]
    acceptanceType: string
    childNaming: string
    degreeTitleUrn?: string
    educationClassificationUrn?: string
}
