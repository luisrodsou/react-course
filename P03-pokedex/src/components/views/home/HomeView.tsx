import React from "react";
import PokemonCardList from "./PokemonCardList";
import useGetPokemonList, { GetPokemonListResult } from "../../../hooks/useGetPokemonList";
import ErrorModal from "../../shared/ErrorModal";
import PageLoader from "../../shared/PageLoader";

const HomeView: React.FC = () => {
    const { pokemonList, goToNextPage, goToPreviousPage, isLoading, error }: GetPokemonListResult = useGetPokemonList();
    
    if (isLoading) {
        return (
            <PageLoader />
        );
    }

    if (error) {
        return (
            <ErrorModal message={error} />
        );
    }

    return (
        <PokemonCardList pokemonRefList={pokemonList.map(item => item.name)} goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} />
    );
};

export default HomeView;
