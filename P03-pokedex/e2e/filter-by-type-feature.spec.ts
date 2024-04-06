import test, { expect } from "@playwright/test";
import { APP_URL } from "./config";

test("Should test filter by type feature", async ({ page }) => {
    await page.goto(APP_URL);

    const pokemonTypeIcon = await page.waitForSelector("[data-testid='pokemonTypeIcon-grass']");
    await pokemonTypeIcon.click();

    await page.waitForSelector("[data-testid='pokemonCard']");
    const pokemonCards = await page.$$("[data-testid='pokemonCard']");

    for (const pokemonCard of pokemonCards) {
        const pokemonTypeIcon = await pokemonCard.waitForSelector("[data-testid='pokemonTypeIcon-grass']");
        
        expect(pokemonTypeIcon).toBeTruthy();
    }
});
