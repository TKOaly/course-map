'use client'

import { Search } from 'lucide-react'
import { Input } from '../ui/input'

export const CourseSearch = () => (
    <div className="relative flex w-full flex-row">
        <Search
            size={20}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2"
        />
        <Input
            aria-label="Search courses"
            className="w-full border-0 pl-11 hover:bg-secondary/90 focus:z-10"
            placeholder="Hae kursseja"
        />
    </div>
)
