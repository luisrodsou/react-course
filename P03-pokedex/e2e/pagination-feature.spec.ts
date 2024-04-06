import test, { expect } from "@playwright/test";
import { APP_URL } from "./config";

test("Should test pagination feature", async ({ page }) => {
    await page.goto(APP_URL);

    let gridNavigation = await page.waitForSelector("[data-testid='gridNavigation']");
    const firstPagePokemonLabel = await page.waitForSelector("[data-testid='labelSpan']");
    await firstPagePokemonLabel.waitForElementState("stable");
    const firstPagePokemonText = await firstPagePokemonLabel.innerText();
    let naviationButtons = await gridNavigation.$$("button");
    await naviationButtons[0].click();

    await page.waitForSelector("[data-testid='gridNavigation']", { state: "hidden" });
    gridNavigation = await page.waitForSelector("[data-testid='gridNavigation']");
    const secondPagePokemonLabel = await page.waitForSelector("[data-testid='labelSpan']");
    await secondPagePokemonLabel.waitForElementState("stable");
    const secondPagePokemonText = await secondPagePokemonLabel.innerText();

    expect(firstPagePokemonText === secondPagePokemonText).toBeFalsy();

    naviationButtons = await gridNavigation.$$("button");
    await naviationButtons[0].click();

    await page.waitForSelector("[data-testid='gridNavigation']", { state: "hidden" });
    gridNavigation = await page.waitForSelector("[data-testid='gridNavigation']");
    const newFirstPagePokemonLabel = await page.waitForSelector("[data-testid='labelSpan']");
    await newFirstPagePokemonLabel.waitForElementState("stable");
    const newFirstPagePokemonText = await newFirstPagePokemonLabel.innerText();

    expect(firstPagePokemonText === newFirstPagePokemonText).toBeTruthy();
});
