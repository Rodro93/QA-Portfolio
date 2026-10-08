QA Automation Portfolio

End-to-end test automation project built with Playwright, TypeScript, and the Page Object Model (POM) design pattern.

This repository demonstrates practical skills in UI test automation, test organization, reusable components, cross-browser testing, and Continuous Integration with GitHub Actions.

Project Overview

The project automates key user journeys on SauceDemo, a demo e-commerce application.

Automated scenarios include:

Successful login with a standard user.

Login validation with an incorrect password.

Login validation for a locked-out user.

Product listing verification.

Adding products to the shopping cart.

Checkout form validation.

Successful purchase completion.

Tech Stack

Playwright Test — end-to-end test automation.

TypeScript — typed test code.

Node.js and npm — runtime and package management.

Page Object Model — separation of page interactions from test scenarios.

Fixtures — reusable authenticated browser setup.

Git and GitHub — version control and source code hosting.

GitHub Actions — Continuous Integration.

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
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   ├── login.spec.ts
│   └── products.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json

Test Coverage

The current suite contains 33 test executions across Chromium, Firefox, and WebKit.

Coverage includes:

Authentication: valid and invalid login scenarios.

Products: product listing and cart interactions.

Shopping cart: product verification.

Checkout: successful purchase and required-field validations.

The suite has passed locally, and the initial GitHub Actions workflow completed successfully.

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

Run the tests

Run the complete test suite:

npx playwright test

Run a specific test file:

npx playwright test tests/login.spec.ts

Run TypeScript checks:

npx tsc --noEmit

View the HTML report

npx playwright show-report

Continuous Integration

The repository includes a GitHub Actions workflow in .github/workflows/playwright.yml.

The workflow runs automated tests in GitHub Actions, helping detect regressions and verify changes.

See the GitHub Actions workflow runs.

Author

Rodrigo Leonhart

GitHub: Rodro93

This project is part of my ongoing development as a QA Automation Engineer.