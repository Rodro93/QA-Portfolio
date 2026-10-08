import { test, expect } from '../fixtures/test'
import { ProductsPage} from '../pages/ProductsPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage} from '../pages/CheckoutPage'




test ('Completar datos del checkout', async ({ authenticatedPage }) =>{

    const productsPage = new ProductsPage(authenticatedPage )
    const cartPage = new CartPage(authenticatedPage )
    const checkoutPage = new CheckoutPage(authenticatedPage )

    await productsPage.agregarProducto('Sauce Labs Backpack')
    await productsPage.irAlCarrito()

    await cartPage.irAlCheckout()

    
})

test('Finalizar compra correctamente', async({  authenticatedPage })=> {
    const productsPage = new ProductsPage(authenticatedPage )
    const cartPage = new CartPage(authenticatedPage )
    const checkoutPage = new CheckoutPage(authenticatedPage )

    await productsPage.agregarProducto('Sauce Labs Backpack')
    await productsPage.irAlCarrito()

    await cartPage.irAlCheckout()

    await checkoutPage.completarDatos(
        'Rodrigo',
        'Tester',
        '3500'
    )

     await checkoutPage.continuar()

    await expect(checkoutPage.finishButton).toBeVisible()

    await checkoutPage.finalizarCompra()

    await expect(checkoutPage.confirmationMessage).toBeVisible()

})

test('Checkout sin nombre', async ({  authenticatedPage  }) => {

    const productsPage = new ProductsPage(authenticatedPage )
    const cartPage = new CartPage(authenticatedPage )
    const checkoutPage = new CheckoutPage(authenticatedPage )

    await productsPage.agregarProducto('Sauce Labs Backpack')
    await productsPage.irAlCarrito()

    await cartPage.irAlCheckout()

    await checkoutPage.completarDatos(
        '',
        'Tester',
        '123'
    )

    await checkoutPage.continuar()

    await expect(checkoutPage.errorMessage).toHaveText('Error: First Name is required')
})

test('Checkout sin apellido', async ({  authenticatedPage  }) => {

    const productsPage = new ProductsPage(authenticatedPage )
    const cartPage = new CartPage(authenticatedPage )
    const checkoutPage = new CheckoutPage(authenticatedPage )

    await productsPage.agregarProducto('Sauce Labs Backpack')
    await productsPage.irAlCarrito()

    await cartPage.irAlCheckout()

    await checkoutPage.completarDatos(
        'Rodrigo',
        '',
        '3500'
    )

    await checkoutPage.continuar()

    await expect(checkoutPage.errorMessage).toHaveText(
        'Error: Last Name is required'
    )
})

test('Checkout sin código postal', async ({  authenticatedPage  }) => {

    const productsPage = new ProductsPage(authenticatedPage )
    const cartPage = new CartPage(authenticatedPage )
    const checkoutPage = new CheckoutPage(authenticatedPage )

    await productsPage.agregarProducto('Sauce Labs Backpack')
    await productsPage.irAlCarrito()

    await cartPage.irAlCheckout()

    await checkoutPage.completarDatos(
        'Rodrigo',
        'Tester',
        ''
    )

    await checkoutPage.continuar()

    await expect(checkoutPage.errorMessage).toHaveText(
        'Error: Postal Code is required'
    )
})