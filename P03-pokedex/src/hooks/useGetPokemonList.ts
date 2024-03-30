import React from "react";
import { API_BASE_URL } from "../constants/misc";
import { useQuery } from "@tanstack/react-query";
import PokemonList, { PokemonListItem } from "../types/PokemonList";

export interface GetPokemonListResult {
    pokemonList: PokemonListItem[];
    goToNextPage?: (() => void);
    goToPreviousPage?: (() => void);
    isLoading: boolean;
    error: string | null;
}

const useGetPokemonList = (): GetPokemonListResult => {
    const [url, setUrl] = React.useState(`${API_BASE_URL}/pokemon?limit=36`);
    const { data, isLoading, error } = useQuery<PokemonList>({
        queryKey: ["pokemonList", url],
        queryFn: async () => {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            
            return await response.json();
        }
    });

    const goToNextPage = () => {
        if (data?.next) {
            setUrl(data.next);
        }
    }

    const goToPreviousPage = () => {
        if (data?.previous) {
            setUrl(data.previous);
        }
    }

    return {
        pokemonList: data?.results ?? [],
        goToNextPage: data?.next ? goToNextPage : undefined,
        goToPreviousPage: data?.previous ? goToPreviousPage : undefined,
        isLoading: isLoading,
        error: error?.message ?? null
    };
}

export default useGetPokemonList;
