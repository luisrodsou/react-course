import React from "react";
import useGetPokemonList from "../../../../hooks/useGetPokemonList";
import renderWithProviders from "../../../../components/test-utils/renderWithProviders";
import PokemonCardList from "../../../../components/views/home/PokemonCardList";
import useGetPokemon from "../../../../hooks/useGetPokemon";

jest.mock("../../../../hooks/useGetPokemonList", () => jest.fn());
jest.mock("../../../../hooks/useGetPokemon", () => jest.fn());

describe("PokemonCardList", () => {
    const testDataItem = {
        pokemonList: [
            {
                id: 1,
                name: "bulbasaur",
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                },
                types: []
            }
        ],
        goToNextPage: jest.fn(),
        goToPreviousPage: jest.fn(),
        isLoading: false,
        error: null
    };

    const mockUseGetPokemonList = useGetPokemonList as jest.Mock;
    const mockUseGetPokemon = useGetPokemon as jest.Mock;

    beforeAll(() => {
        mockUseGetPokemonList.mockReturnValue(testDataItem);
        testDataItem.pokemonList.map(item => mockUseGetPokemon.mockReturnValueOnce({ pokemonData: item }));
    });

    afterEach(() => jest.clearAllMocks());
    
    it("Should render correctly", () => {
        const { queryAllByTestId, getByText } = renderWithProviders(
            <PokemonCardList
                pokemonRefList={testDataItem.pokemonList.map(item => item.name)}
                goToPreviousPage={testDataItem.goToPreviousPage}
                goToNextPage={testDataItem.goToNextPage}
            />);

        expect(queryAllByTestId("pokemonCard")).toHaveLength(testDataItem.pokemonList.length);

        getByText("Previous").click();

        expect(testDataItem.goToPreviousPage).toHaveBeenCalledTimes(1);

        getByText("Next").click();

        expect(testDataItem.goToNextPage).toHaveBeenCalledTimes(1);
    });
});
