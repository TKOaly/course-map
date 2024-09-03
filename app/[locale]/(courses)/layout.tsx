import { type ReactNode } from 'react'

/**
 * Wrapper that returns children as is.
 * General layout is done in the `app/[locale]/layout.tsx` file.
 */
const Courses = ({ children }: Readonly<{ children: ReactNode }>) => {
    return <>{children}</>
}

export default Courses
