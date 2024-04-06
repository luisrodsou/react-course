import test, { expect } from "@playwright/test";
import { APP_URL } from "./config";

test("Should test search feature", async ({ page }) => {
    page.goto(APP_URL);

    const searchButton = await page.waitForSelector("[data-testid='searchButton']");
    await searchButton.click();

    const searchModal = await page.waitForSelector("[data-testid='searchModal']");
    const searchInput = await searchModal.waitForSelector("input");
    searchInput.fill("Pikachu");
    const searchModalButton = await searchModal.waitForSelector("button");
    await searchModalButton.click();

    const pokemonCard = await searchModal.waitForSelector("[data-testid='pokemonCard']");
    const pokemonCardTitle = await (await pokemonCard.waitForSelector("[data-testid='labelSpan']")).innerText();
    expect(pokemonCardTitle).toEqual("Pikachu");
});
