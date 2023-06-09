import { expect, test } from "@playwright/test";

test.describe("Index route", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await expect(page).toHaveTitle("Sandbox - Particle Chat");
    });

    test.only("should render preloader", async ({ page }) => {
        const img = page.getByAltText("Sandbox - Loading");
        expect(await img.isVisible()).toBeTruthy();
    });
});
