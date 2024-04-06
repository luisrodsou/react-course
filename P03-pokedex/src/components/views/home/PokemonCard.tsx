import React from "react";
import useGetPokemon from "../../../hooks/useGetPokemon";
import { getMainPokemonType, getPokemonTypeBg } from "../../../utils/pokemon-type";
import Label from "../../shared/Label";
import FavoriteButton from "../../shared/button/FavoriteButton";
import { useNavigate } from "react-router";
import PokemonTypeIconList from "../pokemon-type/PokemonTypeIconList";

interface PokemonCardProps {
    pokemonRef: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonRef }) => {
    const { pokemonData, isLoading, error } = useGetPokemon({ pokemonRef });
    const mainType = React.useMemo(() => pokemonData ? getMainPokemonType(pokemonData) : null, [pokemonData]);
    const backgroundClass = React.useMemo(() => mainType ? getPokemonTypeBg(mainType) : null, [mainType]);
    const navigate = useNavigate();
    const navigateToPokemon = pokemonData ? () => navigate(`/pokemon/${pokemonData.name}`) : undefined;
    
    return pokemonData ? (
        <div className={`relative w-56 h-56 rounded-lg shadow-lg p-4 cursor-pointer ${backgroundClass ?? ""}`} data-testid="pokemonCard">
            <FavoriteButton pokemonId={pokemonData.id} />
            <PokemonTypeIconList pokemonDataTypes={pokemonData.types} />
            <div onClick={navigateToPokemon} className="flex flex-col items-center mx-auto" data-testid="pokemonCardLabelAndImg">
                <Label>{pokemonData.name}</Label>
                <img
                    className="mx-auto w-40 h-40"
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData.name} />
            </div>
        </div>
    ) : <></>;
}

export default PokemonCard;
