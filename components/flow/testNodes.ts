import { type CourseNodeType } from '@/components/flow/CourseNode'
import { CourseCode } from '@/degrees/course-codes'
import { Prerequisite } from '@/degrees/enums'

export const testNodes: CourseNodeType[] = [
    {
        id: CourseCode.TKT10002,
        type: 'course',
        data: {
            code: 'TKT10002',
            name: 'Ohjelmoinnin perusteet',
            credits: 5,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan odio ac molestie convallis. In tempor, magna et imperdiet venenatis, nunc diam vehicula sapien, quis vehicula enim odio nec justo.
            
            Praesent in consectetur dolor. Praesent posuere tincidunt lorem at sagittis. Curabitur scelerisque egestas ornare. Donec pellentesque ligula in urna congue, nec placerat risus hendrerit. Ut venenatis varius velit, sed scelerisque magna. Sed placerat sapien sapien, id pretium tellus lacinia a.
            
            Nulla suscipit posuere magna vitae finibus. Phasellus est nunc, luctus ut urna quis, placerat tristique purus. Ut at est non tortor malesuada convallis at in nisl. Maecenas feugiat laoreet posuere.
            `,
            nicknames: ['ohpe'],
            language: 'Suomi',
        },
        position: { x: 0, y: 0 },
    },
    {
        id: CourseCode.TKT10003,
        type: 'course',
        data: {
            code: 'TKT10003',
            name: 'Ohjelmoinnin jatkokurssi',
            credits: 5,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan odio ac molestie convallis. In tempor, magna et imperdiet venenatis, nunc diam vehicula sapien, quis vehicula enim odio nec justo.
            
            Nulla suscipit posuere magna vitae finibus. Phasellus est nunc, luctus ut urna quis, placerat tristique purus. Ut at est non tortor malesuada convallis at in nisl. Maecenas feugiat laoreet posuere.
            
            Praesent in consectetur dolor. Praesent posuere tincidunt lorem at sagittis. Curabitur scelerisque egestas ornare. Donec pellentesque ligula in urna congue, nec placerat risus hendrerit. Ut venenatis varius velit, sed scelerisque magna. Sed placerat sapien sapien, id pretium tellus lacinia a.
            `,
            nicknames: ['ohja'],
            prerequisites: [
                {
                    courseCode: CourseCode.TKT10002,
                    prerequisiteType: Prerequisite.MANDATORY,
                },
            ],
            language: 'Suomi',
        },
        position: { x: 300, y: 0 },
    },
]

export const testEdges = [
    {
        id: `${CourseCode.TKT10002}-${CourseCode.TKT10003}`,
        source: CourseCode.TKT10002,
        target: CourseCode.TKT10003,
    },
]
