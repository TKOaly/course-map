import { expect, test } from '@playwright/test'

test('Test course info and prerequisites', async ({ page }) => {
    await page.goto('http://localhost:3000/fi/TKT/23-26')

    await expect(page).toHaveTitle(/Kurssikartta/)

    await page.getByTestId('rf__node-Ohjelmistoprojekti').click()

    await expect(page.getByText('Lyhenne"ohtuprojekti"')).toBeVisible()

    await page
        .getByLabel('Open info for the prerequisite course TKT20006')
        .click()

    await expect(
        page
            .locator('[id="\\32 "]')
            .getByRole('heading', { name: 'Ohjelmistotuotanto' })
    ).toBeVisible()
    await expect(page.getByText('Lyhenne"ohtu"')).toBeVisible()
    await expect(
        page.getByLabel('Open course info page in studies.helsinki.fi')
    ).toBeVisible()
})
