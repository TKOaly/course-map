import { ThemeProvider } from '@/components/theme-provider'
import { ReactFlowProvider } from '@xyflow/react'
import { Provider } from 'jotai'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { Locale } from '../i18n/settings'
import './globals.css'
import { Navigation } from './Navigation'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = ({
    params: { locale },
}: {
    params: { locale: Locale }
}): Metadata => ({
    title: locale === Locale.FI ? 'Kurssikartta' : 'CourseMap',
    description: 'A course map of University of Helsinki CS courses',
    manifest: `/manifest.json`,
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/images/favicon.ico',
                href: '/images/favicon.ico',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/images/favicon-dark.ico',
                href: '/images/favicon-dark.ico',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: locale === Locale.FI ? 'Kurssikartta' : 'CourseMap',
        description: 'A course map of University of Helsinki CS courses',
        images: ['https://courses.tko-aly.fi/images/og_image.png'], // Must be an absolute URL
    },
    openGraph: {
        title: locale === Locale.FI ? 'Kurssikartta' : 'CourseMap',
        description: 'A course map of University of Helsinki CS courses',
        type: 'website',
        url: 'https://courses.tko-aly.fi',
        siteName: 'courses.tko-aly.fi',
        images: [
            {
                url: 'https://courses.tko-aly.fi/images/og_image.png', // Must be an absolute URL
                width: 2160,
                height: 1080,
                alt: 'Photo of the Kurssikartta site',
            },
        ],
        locale: 'fi',
    },
})

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#fafafa' },
        { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    ],
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export async function generateStaticParams() {
    return [{ lang: 'fi' }, { lang: 'en' }]
}

export default function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { lang: string }
}>) {
    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                <svg
                    aria-hidden="true"
                    focusable="false"
                    style={{ width: 0, height: 0, position: 'absolute' }}
                >
                    <linearGradient
                        id="compass-black"
                        x1="0"
                        y1="1"
                        x2="0.5"
                        y2="0.5"
                    >
                        <stop offset="90%" stopColor="#09090b" />
                        <stop offset="90%" stopColor="#F00" />
                    </linearGradient>
                    <linearGradient
                        id="compass-white"
                        x1="0"
                        y1="1"
                        x2="0.5"
                        y2="0.5"
                    >
                        <stop offset="90%" stopColor="#FAFAFA" />
                        <stop offset="90%" stopColor="#F00" />
                    </linearGradient>
                </svg>
                <Provider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <ReactFlowProvider>
                            <main className="flex min-h-dvh w-screen flex-col items-center justify-between overflow-x-clip">
                                <div className="z-10 flex size-full max-h-dvh min-h-dvh flex-col items-start">
                                    <Navigation />
                                    <Suspense fallback={null}>
                                        {children}
                                    </Suspense>
                                </div>
                            </main>
                        </ReactFlowProvider>
                    </ThemeProvider>
                </Provider>
            </body>
        </html>
    )
}
