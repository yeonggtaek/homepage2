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
    await page.goto('http://localhost:3000/');
});


test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  
    if (testInfo.status !== testInfo.expectedStatus) {
      console.log(`Did not run as expected, ended up at ${page.url()}`);
    }
});
  
test.describe('Testing the Head information for home page', () => {
    test('title', async ({ page }) => {
        await expect(page).toHaveTitle("Home");
    });
  
    test('meta description', async ({ page }) => {
        const metaDescription = page.locator('meta[name="description"]')
        await expect(metaDescription).toHaveAttribute(
            'content',
            'BCIT offers over 300 programs and 1000 part-time courses in 6 general areas of study. Search or browse our catalogues to find the right fit for the next step in your career.'
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

test.describe('Testing for text on the page', () => {
    test('h1 tag', async ({ page }) => {
        expect(await page.textContent('h1')).toBe('Welcome to BCIT')
    });

    test('h2 tag', async ({ page }) => {
        expect(await page.textContent('h2')).toBe('Ready to Apply?')
    });
});

test.describe('Testing for button(s)', () => {
    test.use({ viewport: { width: 820, height: 1180 } });

    test('Button to link to about page', async ({ page }) => {
        await page.getByRole('button').click();

        await page.getByRole('link', { name: 'About' }).first().click();
    });
});

test.describe('Testing for Images Alt Text', () => {
    test('Hamburger Menu', async ({ page }) => {
        await page.getByAltText('image of bar').click();
    });
});

test.describe('Testing footer area', () => {
    test('Footer list items', async ({ page }) => {
        await expect(page.getByRole('listitem').filter({ hasText: 'Visit' })).toHaveCount(1)
        await expect(page.getByRole('listitem').filter({ hasText: 'Apply Now' })).toHaveCount(1)
        await expect(page.getByRole('listitem').filter({ hasText: 'Events' })).toHaveCount(1)
        await expect(page.getByRole('listitem').filter({ hasText: 'Careers' })).toHaveCount(1)
    });
});

  
test.describe('Mobile viewport block', () => {
    test.use({ viewport: { width: 414, height: 896 } });
  
    test.beforeEach(async ({ page }) => {
      console.log("Before checking for color");
      await page.goto('http://localhost:3000/');
    })
  
    test('coloring', async ({ page }) => {
      const mainContainer = page.locator("#apply");
  
      const checkingBackgroundColor = await mainContainer.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("color")
      })
  
      console.log(checkingBackgroundColor);
      expect(checkingBackgroundColor).toBe("rgb(0, 60, 113)");
    });
});