import { test as base, expect, Page } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { loginData } from '../data/testData'

type Fixtures = {
    authenticatedPage: Page
}

export const test = base.extend<Fixtures>({
    authenticatedPage: async ({ page }, use) => {
        await page.goto('/')

        const loginPage = new LoginPage(page)

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        )

        await page.waitForURL(/inventory.html/)
        await page.locator('[data-test="inventory-list"]').waitFor()

        await use(page)
    }
})

export { expect }