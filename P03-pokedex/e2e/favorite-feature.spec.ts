import test, { expect } from "@playwright/test";
import { APP_URL } from "./config";

test("Should test favorite feature", async ({ page }) => {
    await page.goto(APP_URL);
    await page.waitForSelector("[data-testid='favoriteButton-1']");
    await page.click("[data-testid='favoriteButton-1']");
    
    await page.goto(`${APP_URL}/favorite`);
    const element = await page.waitForSelector("[data-testid='favoriteButton-1']");
    expect(element).toBeTruthy();

    page.reload();
    const elementAfterReload = await page.waitForSelector("[data-testid='favoriteButton-1']");
    expect(elementAfterReload).toBeTruthy();

    await page.click("[data-testid='favoriteButton-1']");
    const elementAfterClick = await page.waitForSelector("[data-testid='favoriteButton-1']", { state: "detached" });
    expect(elementAfterClick).toBeFalsy();
});
