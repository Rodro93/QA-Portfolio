import {type Page, type Locator} from '@playwright/test'

export class CartPage{

    readonly page: Page
    readonly title: Locator
    readonly items: Locator
    readonly checkoutButton: Locator

    constructor (page: Page) {
        this.page= page

        this.title= page.getByText('Your Cart')
        this.items = page.locator('[data-test= "inventory-item"]')
        this.checkoutButton = page.getByRole('button', {name: 'Checkout'})
    }

    async cantidadDeProductos(): Promise<number>{
        return await this.items.count()
    }
    async contieneProducto(nombre:string): Promise<boolean>{
        return await this.items.filter({hasText:nombre}).first().isVisible()
}
    async irAlCheckout(){
        await this.checkoutButton.click()

}
}