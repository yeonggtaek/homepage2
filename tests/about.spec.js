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
    await page.goto('http://localhost:3000/About');
});


test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  
    if (testInfo.status !== testInfo.expectedStatus) {
      console.log(`Did not run as expected, ended up at ${page.url()}`);
    }
});
  
test.describe('Testing the Head information for about page', () => {
    test('title', async ({ page }) => {
        await expect(page).toHaveTitle("About");
    });
  
    test('meta description', async ({ page }) => {
        const metaDescription = page.locator('meta[name="description"]')
        await expect(metaDescription).toHaveAttribute(
            'content',
            'Find out more about BCIT'
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

test.describe('Testing for paragraph tag on page', () => {
    test('p tag', async ({ page }) => {
        expect(await page.textContent('p')).toBe("We offer practical career credentials designed for the workplace, from diplomas and certificates to bachelor's and master's degrees")
    });
});