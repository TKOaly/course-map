import { render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from '../app/page'

test('Course flow and info', () => {
    render(<Home />)

    const main = within(screen.getByRole('main'))

    const courseNode = main.getByLabelText('TKT10002')

    expect(courseNode).toBeDefined()

    courseNode.click()

    expect(
        main.getByRole('heading', { level: 2, name: /Ohjelmoinnin perusteet/ })
    ).toBeDefined()
})
