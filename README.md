# QA Automation Portfolio

[![Playwright Tests](https://github.com/Rodro93/QA-Portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/Rodro93/QA-Portfolio/actions/workflows/playwright.yml)

End-to-end UI and API test automation project built with **Playwright, TypeScript, and the Page Object Model (POM)** design pattern.

This portfolio demonstrates practical QA Automation skills, including functional testing, negative scenarios, API validation, reusable test architecture, cross-browser execution, and Continuous Integration (CI) with GitHub Actions.

## Project Overview

The project automates key user journeys on [SauceDemo](https://www.saucedemo.com/) and validates REST API responses using [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Test Coverage

The current suite contains **39 test executions across Chromium, Firefox, and WebKit**, based on the latest verified run.

### UI Testing

- **Authentication**
  - Successful login with a standard user.
  - Login validation with an incorrect password.
  - Login validation for a locked-out user.
- **Products**
  - Product listing verification.
  - Adding a product to the shopping cart.
- **Shopping Cart**
  - Cart item count and product verification.
- **Checkout**
  - Checkout form visibility and required fields.
  - Successful purchase completion.
  - Validation for missing first name.
  - Validation for missing last name.
  - Validation for missing postal code.

### API Testing

- Retrieve an existing post using an HTTP GET request.
- Validate the HTTP status code and JSON content type.
- Verify expected properties, data types, and non-empty response fields.
- Request a non-existent post and verify the expected `404 Not Found` response.

## Tech Stack

- **Playwright Test** — browser automation and API testing.
- **TypeScript** — typed test code.
- **Node.js and npm** — runtime and package management.
- **Page Object Model (POM)** — reusable page interactions and separation of concerns.
- **Fixtures** — reusable test setup and authenticated browser configuration.
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
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running the Tests

Run the complete test suite:

```bash
npx playwright test
```

Run UI tests from a specific file:

```bash
npx playwright test tests/login.spec.ts
```

Run API tests:

```bash
npx playwright test tests/api/posts.spec.ts
```

Check TypeScript compilation:

```bash
npx tsc --noEmit
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Continuous Integration

This repository includes a GitHub Actions workflow at `.github/workflows/playwright.yml`.

The workflow runs automated tests on GitHub Actions to help detect regressions and verify changes.

[View workflow runs](https://github.com/Rodro93/QA-Portfolio/actions)

## Author

**Rodrigo Leonhart**

GitHub: [@Rodro93](https://github.com/Rodro93)

This project is part of my ongoing development as a QA Automation Engineer.
