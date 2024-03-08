// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeAll(async () => {
    console.log('Before tests');
});
  
test.afterAll(async () => {
    console.log('After tests');
});

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('http://localhost:3000/Contact');
});


test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  
    if (testInfo.status !== testInfo.expectedStatus) {
      console.log(`Did not run as expected, ended up at ${page.url()}`);
    }
});
  
test.describe('Testing the Head information for contact page', () => {
    test('title', async ({ page }) => {
        await expect(page).toHaveTitle("Contact Us");
    });
  
    test('meta description', async ({ page }) => {
        const metaDescription = page.locator('meta[name="description"]')
        await expect(metaDescription).toHaveAttribute(
            'content',
            'Please contact us if you have any questions.'
        )
    });

    test('favicon', async ({ page }) => {
        const favicon = page.locator('link[rel="icon"]')
        await expect(favicon).toHaveAttribute(
            'href',
            '/favicon.ico'
        )
    });
});

test.describe('Testing Form', () => {
    test('input fields', async ({ page }) => {
        await page.getByText('First Name:').fill('Bob');
        await page.getByText('Last Name:').fill('Joe');
        await page.getByText('Email:').fill('Joe');
        await page.getByRole('checkbox').setChecked(true);
    });
});