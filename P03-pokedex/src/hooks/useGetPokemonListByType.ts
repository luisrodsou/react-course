import { API_BASE_URL } from "../constants/misc";
import { useQuery } from "@tanstack/react-query";
import PokemonListByType, { Pokemon } from "../types/PokemonListByType";

interface GetPokemonListByTypeProps {
    pokemonType: string;
}

export interface GetPokemonListByTypeResult {
    pokemonList: Pokemon[];
    isLoading: boolean;
    error: string | null;
}

const useGetPokemonListByType = ({ pokemonType }: GetPokemonListByTypeProps): GetPokemonListByTypeResult => {
    const { data, isLoading, error } = useQuery<PokemonListByType>({
        queryKey: ["pokemonListByType", pokemonType],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/type/${pokemonType}`);
            
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        
            return await response.json();
        }
    });

    return {
        pokemonList: data?.pokemon ?? [],
        isLoading: isLoading,
        error: error?.message ?? null
    };
}

export default useGetPokemonListByType;
