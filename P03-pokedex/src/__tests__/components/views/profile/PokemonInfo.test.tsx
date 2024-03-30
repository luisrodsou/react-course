import React from "react";
import renderWithProviders from "../../../../components/test-utils/renderWithProviders";
import PokemonInfo from "../../../../components/views/profile/PokemonInfo";
import useGetPokemon from "../../../../hooks/useGetPokemon";

jest.mock("../../../../hooks/useGetPokemon", () => jest.fn());

describe("PokemonInfo", () => {
    const testDataItem = {
        pokemonData: {
            id: 1,
            name: "bulbasaur",
            weight: 69,
            height: 7,
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
            },
            types: []
        },
        isLoading: false,
        error: null
    };

    const mockUseGetPokemon = useGetPokemon as jest.Mock;

    beforeAll(() => mockUseGetPokemon.mockReturnValue(testDataItem));

    afterEach(() => jest.clearAllMocks());

    it("Should render correctly", () => {
        const { getByAltText, getByText } = renderWithProviders(<PokemonInfo pokemonRef={testDataItem.pokemonData.name} />);

        expect(mockUseGetPokemon).toHaveBeenCalledWith({ pokemonRef: testDataItem.pokemonData.name });

        const cardImg = getByAltText(testDataItem.pokemonData.name);

        expect(cardImg).toBeInTheDocument();
        expect(cardImg).toHaveAttribute("src", testDataItem.pokemonData.sprites.front_default);
        expect(getByText(testDataItem.pokemonData.name)).toBeInTheDocument();
        expect(getByText(`Id: ${testDataItem.pokemonData.id}`)).toBeInTheDocument();
        expect(getByText(`Weight: 31.30 kg`)).toBeInTheDocument();
        expect(getByText(`Height: 17.78 cm`)).toBeInTheDocument();
    });
});
