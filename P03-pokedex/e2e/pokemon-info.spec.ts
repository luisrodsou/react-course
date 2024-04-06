import test, { expect } from "@playwright/test";
import { APP_URL } from "./config";

test("Should test pokemon info feature", async ({ page }) => {
    await page.goto(APP_URL);
    const pokemonCard = await page.waitForSelector("[data-testid='pokemonCard']");
    const pokemonCardTitle = await (await pokemonCard.waitForSelector("[data-testid='labelSpan']")).innerText();
    const pokemonCardImage = await (await pokemonCard.waitForSelector("[data-testid='pokemonCardLabelAndImg'] > img")).getAttribute("src");
    const pokemonCardTypeIconList = await pokemonCard.waitForSelector("[data-testid='pokemonTypeIconList']");
    const pokemonCardTypeIcons = await pokemonCardTypeIconList.$$("div");
    
    await pokemonCard.click();

    const pokemonInfo = await page.waitForSelector("[data-testid='pokemonInfo']");
    const pokemonInfoTitle = await (await pokemonInfo.waitForSelector("h1")).innerText();
    const pokemonInfoImage = await (await pokemonInfo.waitForSelector("img")).getAttribute("src");
    const pokemonInfoTypeIconList = await pokemonInfo.waitForSelector("[data-testid='pokemonTypeIconList']");
    const pokemonInfoTypeIcons = await pokemonInfoTypeIconList.$$("div");
    
    expect(pokemonInfoTitle).toEqual(pokemonCardTitle);
    expect(pokemonInfoImage).toEqual(pokemonCardImage);
    expect(pokemonInfoTypeIcons.length).toEqual(pokemonCardTypeIcons.length);
});
