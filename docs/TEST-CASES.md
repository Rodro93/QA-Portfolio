# Test Cases — QA Automation Portfolio

## Project Overview

This document describes the functional UI and API test scenarios implemented in this Playwright automation project.

- **Application under test:** SauceDemo
- **API under test:** JSONPlaceholder
- **Automation framework:** Playwright Test
- **Programming language:** TypeScript
- **Design pattern:** Page Object Model (POM)
- **Test architecture:** Custom authenticated fixture
- **Browser projects:** Chromium, Firefox, and WebKit

## 1. Login Tests

| ID | Test Scenario | Expected Result |
|---|---|---|
| LOGIN-001 | Log in with valid standard user credentials | The inventory page opens and the Products heading is visible. |
| LOGIN-002 | Log in with an incorrect password | The expected authentication error is displayed and the inventory page is not opened. |
| LOGIN-003 | Log in with a locked-out user | The locked-out user error is displayed and the inventory page is not opened. |

## 2. Products Tests

| ID | Test Scenario | Expected Result |
|---|---|---|
| PROD-001 | Verify the number of products | The products heading is visible, exactly six products are displayed, and Sauce Labs Backpack is present. |
| PROD-002 | Add a product to the cart | Sauce Labs Backpack is added and the cart badge displays `1`. |

## 3. Cart Tests

| ID | Test Scenario | Expected Result |
|---|---|---|
| CART-001 | Verify a product in the cart | The cart page title is visible, exactly one item is present, and the item is Sauce Labs Backpack. |

## 4. Checkout Tests

| ID | Test Scenario | Expected Result |
|---|---|---|
| CHECKOUT-001 | Verify checkout form fields | The checkout title and first name, last name, and postal code fields are visible. |
| CHECKOUT-002 | Complete a purchase successfully | The user submits customer information, completes the checkout, and sees the confirmation message. |
| CHECKOUT-003 | Submit checkout without a first name | The application displays `Error: First Name is required`. |
| CHECKOUT-004 | Submit checkout without a last name | The application displays `Error: Last Name is required`. |
| CHECKOUT-005 | Submit checkout without a postal code | The application displays `Error: Postal Code is required`. |

## 5. API Tests

| ID | Test Scenario | Expected Result |
|---|---|---|
| API-001 | Retrieve an existing post | The API returns HTTP `200`, responds with JSON content, and provides the expected ID and user ID along with non-empty title and body fields. |
| API-002 | Retrieve a nonexistent post | The API returns HTTP `404`. |

## Test Execution

Latest recorded execution:

- **39 passed**
- **0 failed**
- **0 flaky**
- **0 skipped**

The Playwright configuration defines Chromium, Firefox, and WebKit browser projects.

## Scope Notes

This document lists the scenarios currently implemented in the test files. It does not claim automated coverage for product sorting, product removal, or other scenarios that are not present in the reviewed tests.

The automated test files are the source of truth for the exact assertions and implemented behavior.