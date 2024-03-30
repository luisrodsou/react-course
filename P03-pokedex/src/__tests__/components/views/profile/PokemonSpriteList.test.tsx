import React from "react";
import renderWithProviders from "../../../../components/test-utils/renderWithProviders";
import PokemonSpriteList from "../../../../components/views/profile/PokemonSpriteList";

describe("PokemonSpriteList", () => {
    const testDataItem = {
        sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png"
        }
    };

    it("Should render correctly", () => {
        const { getByAltText } = renderWithProviders(<PokemonSpriteList sprites={testDataItem.sprites} />);

        expect(getByAltText("front_default")).toHaveAttribute("src", testDataItem.sprites.front_default);
        expect(getByAltText("back_default")).toHaveAttribute("src", testDataItem.sprites.back_default);
        expect(getByAltText("front_shiny")).toHaveAttribute("src", testDataItem.sprites.front_shiny);
        expect(getByAltText("back_shiny")).toHaveAttribute("src", testDataItem.sprites.back_shiny);
    });
});
