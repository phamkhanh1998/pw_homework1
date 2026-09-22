import { test } from '@playwright/test';

test('Basic actions', async ({ page }) => {
    await test.step("Step 1: Navigate to web", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click to lesson 1", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Step 3", async () => {
        // await page.locator("//input[@id = 'username']").fill("Khanh Pham");
        // await page.locator("//input[@id = 'email']").pressSequentially("phamkhanh7498@gmail.com", { delay: 1_000 });
        
        let isCheckedMale = await page.locator("//input[@id = 'male']").isChecked();
        console.log(isCheckedMale);
        await page.locator("//input[@id = 'male']").check();
        isCheckedMale = await page.locator("//input[@id = 'male']").isChecked();
        console.log(isCheckedMale);

        await page.locator('//select[@id = "country"]').selectOption("canada");
    
        await page.locator('//input[@type = "file"]').setInputFiles("tests/data-tests/data-test.txt");
    });
});


