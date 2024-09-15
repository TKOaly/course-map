import { mapValues } from 'remeda'
import { scriptDebug } from '../config'

const host = 'https://sisu.helsinki.fi/kori/api'

/**
 * Function to fetch data from Kori API
 * @param path Endpoint to fetch data from
 * @param params Query parameters
 * @returns Promise with specified type T
 * @example
 * const educations = await kori<Educations>(
 *      '/educations',
 *      { universityOrgId: 'hy-university-root-id' }
 * )
 */
export const kori = async <T>(
    path: string,
    params: Record<string, string | number | boolean>
) => {
    const url = new URL(
        `${host}${path}?${new URLSearchParams(
            mapValues(params, (value) =>
                typeof value === 'boolean' || typeof value === 'number'
                    ? value.toString()
                    : value
            )
        ).toString()}`
    )

    if (scriptDebug) console.log(`GET \x1b[34m${url.toString()}\x1b[0m`)

    return fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json, text/plain, */*',
        },
    }).then((response) => response.json() as Promise<T>)
}
