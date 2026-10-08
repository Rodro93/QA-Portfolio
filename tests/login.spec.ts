import { test, expect } from '@playwright/test'
import {loginData} from '../data/testData'
import { LoginPage } from '../pages/LoginPage'

test('Login exitoso con usuario estándar', async ({ page }) => {

    await page.goto('/')

    const loginPage = new LoginPage(page)

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    )

    await expect(page).toHaveURL(/inventory.html/)
})

test ('Login fallido con contraseña incorrecta', async ({page})=>{

    await page.goto('/')

    const loginPage = new LoginPage(page)

    await loginPage.login(
        loginData.invalidPassword.username,
        loginData.invalidPassword.password
    )
    

    await expect (loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')

})

test ('Login fallido con usuario bloqueado', async ({page }) => {
    await page.goto('/')

    const loginPage = new LoginPage(page)

    await loginPage.login(
        loginData.lockedUser.username,
        loginData.lockedUser.password
    )

    await expect(loginPage.errorMessage).toHaveText(
        'Epic sadface: Sorry, this user has been locked out.'
    )
})