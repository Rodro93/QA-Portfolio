import { test, expect } from '../fixtures/test'
import { ProductsPage } from '../pages/ProductsPage'
import { CartPage } from '../pages/CartPage'

test('Verificar producto en el carrito', async ({  authenticatedPage }) => {
    const productsPage = new ProductsPage(authenticatedPage)
    const cartPage = new CartPage(authenticatedPage)

    await productsPage.agregarProducto('Sauce Labs Backpack')
    await productsPage.irAlCarrito()

    await expect(cartPage.items).toHaveCount(1)
    await expect(
        cartPage.items.filter({ hasText: 'Sauce Labs Backpack' })
    ).toBeVisible()
})