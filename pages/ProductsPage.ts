import { type Page, type Locator } from '@playwright/test'


export class ProductsPage {
readonly page: Page
readonly products: Locator 
readonly title: Locator 
readonly cartButton: Locator 
readonly cartBadge: Locator

constructor (page: Page) {
    this.page = page


    this.title=page.getByText('Products')
    this.products = page.locator('[data-test="inventory-item"]')
    this.cartButton = page.locator('[data-test="shopping-cart-link"]')
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]')
}

async cantidadDeProductos(): Promise<number>{
    return await this.products.count()
}

async agregarProducto(nombre:string) {
    const producto = this.products.filter({hasText: nombre}).first()

    await producto.getByRole('button', {name: /Add to cart/i}).click()
}

async irAlCarrito(){
    await this.cartButton.click()
}
}