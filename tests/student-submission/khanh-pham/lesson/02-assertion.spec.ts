import { expect, test } from "@playwright/test";

test("Material Page - non web-first", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    // const isVisible = await page.locator("//button[@type='submit']").isVisible();
    // expect(isVisible).toEqual(true);

    const containerLocator = page.locator("//div[@id='ancestor']");
    await expect(containerLocator).toHaveClass("container", { timeout: 2_000 });
});