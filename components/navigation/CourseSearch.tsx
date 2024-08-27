'use client'

import { type CourseData } from '@/lib/courses'
import { courseDataAtom, searchAtom } from '@/lib/state'
import { useAtom, useAtomValue } from 'jotai'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'

export const CourseSearch = () => {
    const [searchString, setSearch] = useAtom(searchAtom)
    const courses = useAtomValue(courseDataAtom)

    const courseFilter = (course: CourseData) =>
        course.code.toLowerCase().includes(searchString.toLowerCase()) ||
        course.id.toLowerCase().includes(searchString.toLowerCase())

    return (
        <div className={`relative flex w-full flex-row`}>
            <Search
                size={20}
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2"
            />
            <Input
                onChange={async (e) => setSearch(e.target.value)}
                aria-label="Search courses"
                className={`w-full border-0 bg-transparent pl-11 ${courses.filter(courseFilter).length === 0 ? 'bg-red-600/30 hover:bg-red-400/30' : 'hover:bg-secondary/90'} focus:z-10`}
                placeholder="Hae kursseja"
            />
        </div>
    )
}
