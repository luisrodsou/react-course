import React from "react";
import useFavoriteStore from "../../../hooks/store/useFavoriteStore";
import PokemonCardList from "../home/PokemonCardList";

const FavoritePokemonView: React.FC = () => {
    const favorites = useFavoriteStore((state) => state.favorites);

    return <PokemonCardList pokemonRefList={favorites.map(item => item.toString())} />;
};

export default FavoritePokemonView;
