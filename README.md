QA Automation Portfolio

End-to-end and API test automation project built with Playwright, TypeScript, and the Page Object Model (POM) design pattern.

This repository demonstrates practical QA Automation skills, including UI testing, API testing, reusable components, test organization, cross-browser execution, and Continuous Integration with GitHub Actions.

Project Overview

The project automates key user journeys on SauceDemo, a demo e-commerce application, and validates a REST API using JSONPlaceholder.

UI Test Scenarios

Successful login with a standard user.

Login validation with an incorrect password.

Login validation for a locked-out user.

Product listing verification.

Adding products to the shopping cart.

Checkout form validation.

Successful purchase completion.

API Test Scenarios

Retrieve a post by ID using an HTTP GET request.

Verify the HTTP response status.

Validate the response JSON structure and expected properties.

Tech Stack

Playwright Test — UI and API test automation.

TypeScript — typed test code.

Node.js and npm — runtime and package management.

Page Object Model (POM) — separation of page interactions from test scenarios.

Fixtures — reusable test setup and authenticated browser configuration.

REST API testing — HTTP requests and JSON response validation.

Git and GitHub — version control and source code hosting.

GitHub Actions — Continuous Integration (CI).

Project Structure

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

Test Coverage

The current suite contains 36 test executions across Chromium, Firefox, and WebKit.

Coverage includes:

Authentication: valid and invalid login scenarios.

Products: product listing and shopping workflows.

Shopping cart: cart interactions and product verification.

Checkout: purchase completion and required-field validations.

API: HTTP status and JSON response structure validation.

The complete test suite has passed locally, and the TypeScript compiler check completes without errors.

The initial GitHub Actions workflow has also completed successfully.

Getting Started

Prerequisites

Node.js

npm

Git

Installation

Clone the repository:

git clone https://github.com/Rodro93/QA-Portfolio.git
cd QA-Portfolio

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

Run the Tests

Run the complete test suite:

npx playwright test

Run UI tests from a specific file:

npx playwright test tests/login.spec.ts

Run the API test:

npx playwright test tests/api/posts.spec.ts

Run TypeScript checks:

npx tsc --noEmit

View the HTML report:

npx playwright show-report

Continuous Integration

The repository includes a GitHub Actions workflow at .github/workflows/playwright.yml.

The workflow executes automated tests in GitHub Actions to help detect regressions and verify changes.

View the GitHub Actions workflow runs.

Author

Rodrigo Leonhart

GitHub: @Rodro93

This project is part of my ongoing development as a QA Automation Engineer.