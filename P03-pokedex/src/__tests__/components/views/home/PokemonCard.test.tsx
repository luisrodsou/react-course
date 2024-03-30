import React from "react";
import renderWithProviders from "../../../../components/test-utils/renderWithProviders";
import PokemonCard from "../../../../components/views/home/PokemonCard";
import useGetPokemon from "../../../../hooks/useGetPokemon";

jest.mock("../../../../hooks/useGetPokemon", () => jest.fn());

describe("PokemonCard", () => {
    const testData = [
        {
            pokemonData: {
                id: 1,
                name: "bulbasaur",
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                },
                types: []
            },
            isLoading: false,
            error: null
        }
    ];

    afterEach(() => jest.clearAllMocks());
    
    it.each(testData)("Should render correctly", (testDataItem) => {
        const mockUseGetPokemon = useGetPokemon as jest.Mock;

        mockUseGetPokemon.mockReturnValue(testDataItem);

        const { getByText, getByAltText } = renderWithProviders(<PokemonCard pokemonRef={testDataItem.pokemonData.name} />);

        expect(mockUseGetPokemon).toHaveBeenCalledWith({ pokemonRef: testDataItem.pokemonData.name });
        expect(getByText(testDataItem.pokemonData.name)).toBeInTheDocument();
        
        const cardImg = getByAltText(testDataItem.pokemonData.name);

        expect(cardImg).toBeInTheDocument();
        expect(cardImg).toHaveAttribute("src", testDataItem.pokemonData.sprites.front_default);
    });
});
