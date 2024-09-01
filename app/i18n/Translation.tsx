'use client'

import { pathOr, stringToPath } from 'remeda'
import { useTranslate } from './hooks'
import { type TranslationPaths } from './translations'

type OwnProps = {
    path: TranslationPaths
}

export const Translation = ({ path }: OwnProps) => {
    const t = useTranslate()

    if (!path) return null

    const result = pathOr(t, stringToPath(path as string), '')

    return typeof result === 'string' && result !== '' ? (result ?? null) : null
}
