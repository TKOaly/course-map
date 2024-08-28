import type { Config } from 'tailwindcss'
import { CourseGroup } from './data/enums'

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                course: {
                    [CourseGroup.BASIC]: 'var(--course-basic)',
                    [CourseGroup.INTERMEDIATE]: 'var(--course-intermediate)',
                    [CourseGroup.ALTERANTIVE]: 'var(--course-alternative)',
                    [CourseGroup.MINOR]: 'var(--course-minor)',
                    [CourseGroup.LANGUAGE]: 'var(--course-language)',
                    [CourseGroup.OTHER]: 'var(--course-other)',
                    [CourseGroup.PLACEHOLDER]: 'var(--course-placeholder)',
                },
            },
            borderRadius: {
                DEFAULT: '6px',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-6deg)' },

                    '10%': { transform: 'rotate(9deg)' },
                    '20%': { transform: 'rotate(27deg)' },
                    '30%': { transform: 'rotate(0deg)' },
                    '40%': { transform: 'rotate(-30deg)' },
                    '50%': { transform: 'rotate(36deg)' },
                    '60%': { transform: 'rotate(-9deg)' },
                    '70%': { transform: 'rotate(0deg)' },
                    '80%': { transform: 'rotate(-18deg)' },
                    '90%': { transform: 'rotate(30deg)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                wiggle: 'wiggle 4s ease-in-out infinite',
            },
        },
    },
    safelist: Object.entries(CourseGroup).flatMap(([_key, courseGroup]) => [
        `bg-course-${courseGroup}`,
        `ring-course-${courseGroup}`,
    ]),
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/container-queries'),
    ],
} satisfies Config

export default config
