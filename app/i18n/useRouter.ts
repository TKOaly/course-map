import { useRouter as useNextRouter, useParams } from 'next/navigation'

export const useRouter = (): ReturnType<typeof useNextRouter> => {
    const params = useParams<{ lang: string }>()
    const router = useNextRouter()

    const prefix = params.lang ? `/${params.lang}` : ''

    return {
        ...router,
        push: (url, options) => router.push(`${prefix}${url}`, options),
        replace: (url, options) => router.replace(`${prefix}${url}`, options),
    }
}
