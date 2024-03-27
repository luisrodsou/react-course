import React from "react";
import PokemonCardList from "./PokemonCardList";
import useGetPokemonList, { GetPokemonListResult } from "../../../hooks/useGetPokemonList";

const HomeView: React.FC = () => {
    const { pokemonList, goToNextPage, goToPreviousPage }: GetPokemonListResult = useGetPokemonList();
    
    return <PokemonCardList pokemonRefList={pokemonList.map(item => item.name)} goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} />
};

export default HomeView;
