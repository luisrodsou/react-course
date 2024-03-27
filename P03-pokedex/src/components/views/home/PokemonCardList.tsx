import React from "react";
import PokemonCard from "./PokemonCard";
import Grid from "../../shared/Grid";

interface PokemonCardListProps {
    pokemonRefList: string[];
    goToPreviousPage?: () => void;
    goToNextPage?: () => void;
}

const PokemonCardList: React.FC<PokemonCardListProps> = ({ pokemonRefList, goToPreviousPage, goToNextPage }) => (
    <Grid goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage}>
        {pokemonRefList.map(item => <PokemonCard key={item} pokemonRef={item} />)}
    </Grid>
);

export default PokemonCardList;
