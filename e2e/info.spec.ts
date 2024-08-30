import { expect, test } from '@playwright/test'

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByLabel('Open site info panel').click()

    await expect(page.getByText('VäritYhtenäinen viiva')).toBeVisible()
    await expect(
        page.getByRole('heading', { name: 'Tiedoissa on virhe!' })
    ).toBeVisible()
})
