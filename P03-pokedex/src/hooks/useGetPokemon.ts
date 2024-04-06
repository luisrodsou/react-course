import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../constants";
import PokemonData from "../types/PokemonData";

export interface GetPokemonProps {
    pokemonRef: string;
}

export interface GetPokemonResult {
    pokemonData: PokemonData | null;
    isLoading: boolean;
    error: string | null;
}

const useGetPokemon = ({pokemonRef}: GetPokemonProps): GetPokemonResult => {
    const { data, isLoading, error } = useQuery<PokemonData>({
        queryKey: ["pokemon", pokemonRef],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/pokemon/${pokemonRef}`);
            
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            
            return await response.json();
        }
    });

    return {
        pokemonData: data ?? null,
        isLoading: isLoading,
        error: error?.message ?? null
    }
};

export default useGetPokemon;
