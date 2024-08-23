import { ThemeProvider } from '@/components/theme-provider'
import { Provider } from 'jotai'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kurssikartta',
    description:
        'A node-based viewer for University of Helsinki courses, primarily computer science.',
    manifest: '/manifest.json',
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
        title: 'Kurssikartta',
        description: 'A course map of University of Helsinki CS courses',
        images: ['https://kurssikartta.tko-aly.fi/images/og.jpg'], // Must be an absolute URL
    },
    openGraph: {
        title: 'Kurssikartta',
        description: 'A course map of University of Helsinki CS courses',
        type: 'website',
        url: 'https://kurssikartta.tko-aly.fi',
        siteName: 'kurssikartta.tko-aly.fi',
        images: [
            {
                url: 'https://kurssikartta.tko-aly.fi/images/og.jpg', // Must be an absolute URL
                width: 2239,
                height: 1080,
                alt: 'Photo of the Kurssikartta site',
            },
        ],
        locale: 'fi_FI',
    },
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#fafafa' },
        { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    ],
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
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
                        {children}
                    </ThemeProvider>
                </Provider>
            </body>
        </html>
    )
}
