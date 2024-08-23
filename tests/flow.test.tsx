import { render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from '../app/page'

test('Page', () => {
    render(<Home />)

    const main = within(screen.getByRole('main'))

    expect(
        main.getByRole('heading', { level: 1, name: /welcome to next\.js!/i })
    ).toBeDefined()
})
