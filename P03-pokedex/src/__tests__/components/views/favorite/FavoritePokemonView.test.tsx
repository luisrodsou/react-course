import React from "react";
import renderWithProviders from "../../../../components/test-utils/renderWithProviders";
import FavoritePokemonView from "../../../../components/views/favorite/FavoritePokemonView";
import useFavoriteStore from "../../../../hooks/store/useFavoriteStore";
import useGetPokemon from "../../../../hooks/useGetPokemon";

jest.mock("../../../../hooks/store/useFavoriteStore", () => jest.fn());
jest.mock("../../../../hooks/useGetPokemon", () => jest.fn());

describe("FavoritePokemonView", () => {
    const testData = [
        { favoriteIds: [1, 2, 3] },
        { favoriteIds: [] }
    ]

    afterEach(() => jest.clearAllMocks());

    it.each(testData)("Should render one PokemonCard for each favorite Pokemon", (testDataItem) => {
        const mockUseFavoriteStore = useFavoriteStore as unknown as jest.Mock;
        
        mockUseFavoriteStore.mockReturnValueOnce(testDataItem.favoriteIds);
        mockUseFavoriteStore.mockReturnValue({
            favorites: testDataItem.favoriteIds,
            addFavorite: (pokemonId: number) => pokemonId,
            removeFavorite: (pokemonId: number) => pokemonId
        });

        const mockUseGetPokemon = useGetPokemon as jest.Mock;
        const pokemonData = { id: 1, name: "bulbasaur", sprites: { front_default: "" }, types: [] };
        
        mockUseGetPokemon.mockReturnValue({ pokemonData, isLoading: false, error: null });

        const { queryAllByTestId } = renderWithProviders(<FavoritePokemonView />);
        const pokemonCards = queryAllByTestId("pokemonCard");

        expect(pokemonCards).toHaveLength(testDataItem.favoriteIds.length);
    });
});
