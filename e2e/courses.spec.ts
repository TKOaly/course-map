import { expect, test } from '@playwright/test'

test('Test course info and prerequisites', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    await expect(page).toHaveTitle(/Kurssikartta/)

    await page.getByTestId('rf__node-Ohjelmoinnin jatkokurssi').click()

    await expect(page.getByText('Lyhenne"ohja"')).toBeVisible()

    await page
        .getByLabel('Open info for the prerequisite course TKT10002')
        .click()

    await expect(
        page
            .locator('[id="\\32 "]')
            .getByRole('heading', { name: 'Ohjelmoinnin perusteet' })
    ).toBeVisible()
    await expect(page.getByText('Lyhenne"ohpe"')).toBeVisible()
    await expect(
        page.getByLabel('Open course info page in studies.helsinki.fi')
    ).toBeVisible()
})
