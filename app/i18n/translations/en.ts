import { type TranslationsObject } from '../translations'

export const en: TranslationsObject = {
    navigation: {
        logo: 'CourseMap',
        search: 'Search courses',
        modeToggle: {
            light: 'Light',
            dark: 'Dark',
            system: 'System',
        },
    },
    courseInfo: {
        credits: 'Credits',
        cr: 'cr',
        abbreviation: 'Abbreviation',
        abbreviations: 'Abbreviations',
        prerequisites: 'Prerequisites',
        equivalents: 'Equivalents',
        mandatory: 'Mandatory',
        yes: 'Yes',
        studyModule: 'Study module',
        language: 'Language',
        languages: 'Languages',
        description: 'Description',
    },
    appInfo: {
        title: 'CourseMap',
        description:
            'CourseMap allows you to view courses offered by different degree programs and their prerequisites.',
        usage: {
            title: 'Using and interpreting the map',
            text: "Zoom in on the map and click on courses to view more information. From the additional information, you can go directly to the course's Studies or Sisu pages.",
        },
        colors: {
            title: 'Colors',
            solidLine:
                'A solid line between courses indicates a strongly recommended or mandatory prerequisite for the course.',
            dashedLine:
                'A dashed line indicates a recommended order of completion or prerequisites that are beneficial for the course.',
            blueLine:
                'A blue line indicates course options, some of which must be completed before taking the course.',
            courseColors: {
                text: 'Courses on the map are color-coded to correspond to different study modules in the curriculum.',
                basic: 'Basic studies',
                intermediate: 'Intermediate studies',
                alternative: 'Alternative study modules',
                minor: 'Minor studies in another field',
                language: 'Language studies',
                other: 'Other studies',
            },
        },
        wrongData: {
            title: 'Data is incorrect! Courses are missing!',
            manualNotice:
                'Course information is maintained manually, so the information may be outdated or incomplete in places. Always verify the correct information, e.g. from Sisu.',
            githubStart: "Course data can be found in the project's",
            githubLink: 'Github',
            contributing:
                "where you can create an issue for a mistake you found or contribute to the project by fixing the mistake with a pull request. The project's README contains instructions on adding new courses, among other things.",
        },
    },
}
