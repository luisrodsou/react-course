import React from "react";
import PokemonInfo from "./PokemonInfo";
import { useParams } from "react-router";
import useSearchStore from "../../../hooks/store/useSearchStore";

const ProfileView: React.FC = () => {
    const { pokemonName } = useParams();
    const finishSearch = useSearchStore((state) => state.finishSearch);

    finishSearch();
    
    return pokemonName ? <PokemonInfo pokemonRef={pokemonName} /> : <></>;
}

export default ProfileView;
