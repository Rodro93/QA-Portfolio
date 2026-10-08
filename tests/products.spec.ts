import { test, expect } from '../fixtures/test'
import { ProductsPage } from '../pages/ProductsPage'

test('Verificar cantidad de productos', async ({ authenticatedPage }) => {

    const productsPage = new ProductsPage(authenticatedPage)

    await expect(productsPage.title).toBeVisible()
    await expect(productsPage.products).toHaveCount(6)

})

test('Agregar producto al carrito', async ({ authenticatedPage }) => {

    const productsPage = new ProductsPage(authenticatedPage)

    await productsPage.agregarProducto('Sauce Labs Backpack')

    await expect(productsPage.cartBadge).toHaveText('1')

})