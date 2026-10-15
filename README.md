# QA Automation Portfolio

[![Playwright Tests](https://github.com/Rodro93/QA-Portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/Rodro93/QA-Portfolio/actions/workflows/playwright.yml)

A QA Automation portfolio project demonstrating end-to-end UI testing and REST API testing using **Playwright, TypeScript, and the Page Object Model (POM)**.

The project focuses on functional testing, positive and negative scenarios, reusable test architecture, cross-browser execution, and Continuous Integration (CI) with GitHub Actions.

## Project Overview

This project automates selected user journeys on [SauceDemo](https://www.saucedemo.com/) and validates REST API responses from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Test Coverage

The latest locally verified full test run completed with **39 passed, 0 failed, 0 flaky, and 0 skipped** across the configured Chromium, Firefox, and WebKit browser projects.

### UI Testing

**Authentication**
- Successful login with valid standard-user credentials.
- Login validation with an incorrect password.
- Login validation for a locked-out user.

**Products**
- Verify the products page title and product count.
- Verify that Sauce Labs Backpack is displayed.
- Add a product to the shopping cart and verify the cart badge.

**Shopping Cart**
- Verify the cart page title, item count, and selected product.

**Checkout**
- Verify checkout form fields.
- Complete a purchase and verify the confirmation message.
- Validate required-field errors for a missing first name, last name, or postal code.

### API Testing

- Retrieve an existing post using an HTTP GET request.
- Verify the HTTP `200` status and JSON content type.
- Validate expected response properties, data types, and non-empty title and body fields.
- Request a nonexistent post and verify the HTTP `404` status.

For the detailed test scenarios, see [`docs/TEST-CASES.md`](docs/TEST-CASES.md).

## Tech Stack

- **Playwright Test** — browser automation and API testing.
- **TypeScript** — typed test code.
- **Node.js and npm** — runtime and package management.
- **Page Object Model (POM)** — reusable page interactions and separation of concerns.
- **Playwright fixtures** — reusable test setup and authenticated browser configuration.
- **REST API testing** — HTTP requests and JSON response validation.
- **Git and GitHub** — version control and source code hosting.
- **GitHub Actions** — Continuous Integration (CI).

## Project Structure

```text
QA-Portfolio/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── data/
│   └── testData.ts
├── docs/
│   └── TEST-CASES.md
├── fixtures/
│   └── test.ts
├── pages/
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── tests/
│   ├── api/
│   │   └── posts.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   ├── login.spec.ts
│   └── products.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Rodro93/QA-Portfolio.git
cd QA-Portfolio
```

Install dependencies:

```bash
npm ci
```

Install the Playwright browsers:

```bash
npx playwright install
```

On Linux CI environments, install browser system dependencies with:

```bash
npx playwright install --with-deps
```

## Running the Tests

Run the complete test suite:

```bash
npx playwright test
```

Run the login tests:

```bash
npx playwright test tests/login.spec.ts
```

Run the API tests:

```bash
npx playwright test tests/api/posts.spec.ts
```

Run tests in a specific browser project:

```bash
npx playwright test --project=chromium
```

Check TypeScript compilation:

```bash
npx tsc --noEmit
```

Open the HTML test report after a test run:

```bash
npx playwright show-report
```

## Continuous Integration

This repository includes a GitHub Actions workflow at `.github/workflows/playwright.yml`.

The workflow installs dependencies and Playwright browsers, runs the automated test suite, and uploads test report artifacts when available.

[View GitHub Actions workflow runs](https://github.com/Rodro93/QA-Portfolio/actions)

## Test Documentation

Detailed test scenarios and expected results are documented in [`docs/TEST-CASES.md`](docs/TEST-CASES.md).

## Author

**Rodrigo Leonhart**

GitHub: [@Rodro93](https://github.com/Rodro93)

This project is part of my ongoing development as a QA Automation Engineer.