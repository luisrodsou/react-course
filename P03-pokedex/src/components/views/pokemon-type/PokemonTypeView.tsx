import { useParams } from "react-router";
import PokemonCardList from "../home/PokemonCardList";
import React from "react";
import useGetPokemonListByType from "../../../hooks/useGetPokemonListByType";
import useSeachStore from "../../../hooks/store/useSearchStore";
import ErrorModal from "../../shared/ErrorModal";
import PageLoader from "../../shared/PageLoader";

const PokemonTypeView: React.FC = () => {
    const { pokemonType } = useParams();
    const { pokemonList, isLoading, error } = pokemonType ? useGetPokemonListByType({ pokemonType })
        : { pokemonList: [], isLoading: false, error: null };
    const finishSearch = useSeachStore(state => state.finishSearch);

    finishSearch();

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
        <PokemonCardList pokemonRefList={pokemonList.map(item => item.pokemon.name)} />
    );
};

export default PokemonTypeView;
