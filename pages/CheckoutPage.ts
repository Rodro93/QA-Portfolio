import { type Page, type Locator } from '@playwright/test'

export class CheckoutPage {
    readonly page: Page
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly postalCodeInput: Locator
    readonly continueButton: Locator
    readonly finishButton: Locator
    readonly confirmationMessage: Locator
    readonly errorMessage: Locator


    constructor(page: Page) {
        this.page = page

        this.firstNameInput = page.getByTestId('firstName')
        this.lastNameInput = page.getByTestId('lastName')
        this.postalCodeInput = page.getByTestId('postalCode')
        this.continueButton = page.getByRole('button', { name: 'Continue' })
        this.finishButton= page.getByRole('button', {name: 'Finish'})
        this.confirmationMessage = page.getByText('Thank you for your order!')
        this.errorMessage = page.getByTestId('error')
        
    }

    async completarDatos(
        nombre: string,
        apellido: string,
        codigoPostal: string
    ) {
        await this.firstNameInput.fill('')
        await this.lastNameInput.fill('')
        await this.postalCodeInput.fill('')

        if (nombre) {
        await this.firstNameInput.pressSequentially(nombre)
    }

    if (apellido) {
        await this.lastNameInput.pressSequentially(apellido)
    }

    if (codigoPostal) {
        await this.postalCodeInput.pressSequentially(codigoPostal)
    }
    }

    async continuar() {
        await this.continueButton.click()
    }

    async finalizarCompra(){
        await this.finishButton.click()
    }
}