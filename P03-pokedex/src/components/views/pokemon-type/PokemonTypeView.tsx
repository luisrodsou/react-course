import { useParams } from "react-router";
import PokemonCardList from "../home/PokemonCardList";
import React from "react";
import useGetPokemonListByType from "../../../hooks/useGetPokemonListByType";
import useSeachStore from "../../../hooks/store/useSearchStore";

const PokemonTypeView: React.FC = () => {
    const { pokemonType } = useParams();
    const getPokemonListByTypeResult = pokemonType ? useGetPokemonListByType({ pokemonType }): null;
    const pokemonList = getPokemonListByTypeResult ? getPokemonListByTypeResult.pokemonList : [];
    const finishSearch = useSeachStore(state => state.finishSearch);

    finishSearch();

    return <PokemonCardList pokemonRefList={pokemonList.map(item => item.pokemon.name)} />;
}

export default PokemonTypeView;
