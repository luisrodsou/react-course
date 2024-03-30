import { useParams } from "react-router";
import renderWithProviders from "../../../../components/test-utils/renderWithProviders";
import PokemonTypeView from "../../../../components/views/pokemon-type/PokemonTypeView";
import useGetPokemonListByType from "../../../../hooks/useGetPokemonListByType";
import React from "react";
import useGetPokemon from "../../../../hooks/useGetPokemon";

jest.mock("../../../../hooks/useGetPokemonListByType", () => jest.fn());
jest.mock("../../../../hooks/useGetPokemon", () => jest.fn());

jest.mock("react-router", () => ({
    useParams: jest.fn(),
    useNavigate: jest.fn()
}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe("PokemonTypeView", () => {
    const testDataItem = {
        pokemonList: [
            {
                pokemon: {
                    name: "bulbasaur",
                    types: [],
                    sprites: {
                        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                    }
                }
            }
        ],
        param: { pokemonType: "grass" }
    };

    const mockUseParams = useParams as jest.Mock;
    const mockUseGetPokemonListByType = useGetPokemonListByType as jest.Mock;
    const mockUseGetPokemon = useGetPokemon as jest.Mock;

    beforeAll(() => {
        mockUseParams.mockReturnValue(testDataItem.param);
        mockUseGetPokemonListByType.mockReturnValue(testDataItem);
        testDataItem.pokemonList.map(item => mockUseGetPokemon.mockReturnValue({ pokemonData: item.pokemon }));
    });

    afterEach(() => jest.clearAllMocks());

    it("Should render correctly", () => {
        const { queryAllByTestId } = renderWithProviders(<PokemonTypeView />);

        expect(mockUseGetPokemonListByType).toHaveBeenCalledWith(testDataItem.param);
        expect(queryAllByTestId("pokemonCard")).toHaveLength(testDataItem.pokemonList.length);
    });
});
