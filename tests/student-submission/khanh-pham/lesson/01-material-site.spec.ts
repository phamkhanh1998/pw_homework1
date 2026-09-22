import { test } from "@playwright/test";

test.describe("Material site", async () => {
    test.beforeAll(async ({ page }) => {
        await page.goto("https://playwrightvn.com/");
    })

    test.beforeEach(async ({ page }) => {
        await test.step("Go to material page", async () => {
            await page.goto("https://material.playwrightvn.com/");
        });
    });

    test.afterEach(async ({ page }) => {
        await page.goto("https://google.com/");
    });

    test("User registration page", async ({ page }) => {
        // await test.step("Go to material page", async () => {
        //     await page.goto("https://material.playwrightvn.com/");
        // });

        await test.step("Click to User Registration", async () => {
            await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
        });
    });

    test("Product page", async ({ page }) => {
        // await test.step("Go to material page", async () => {
        //     await page.goto("https://material.playwrightvn.com/");
        // });

        await test.step("Click to Product page", async () => {
            await page.locator("//a[text()='Bài học 2: Product page']").click();
        });
    });
})
