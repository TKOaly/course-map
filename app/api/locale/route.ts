import { locales } from '../../i18n/settings'

export async function POST(request: Request): Promise<Response> {
    const { locale } = (await request.json()) as { locale: string }

    if (!locale) {
        return new Response(null, {
            status: 400,
            statusText: 'Bad Request',
        })
    }

    if (!(locales as string[]).includes(locale)) {
        return new Response(null, {
            status: 400,
            statusText: 'Invalid Locale',
        })
    }

    const response = new Response(null, {
        status: 204,
        headers: {
            'Set-Cookie': `locale=${locale}; Path=/; HttpOnly; SameSite=Strict;`,
        },
    })
    return response
}
