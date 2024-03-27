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
    const pokemonDataId = pokemonData?.id;
    const pokemonDataName = pokemonData?.name;
    const mainType = React.useMemo(() => pokemonData && getMainPokemonType(pokemonData), [pokemonData]);
    const backgroundClass = React.useMemo(() => mainType ? getPokemonTypeBg(mainType) : "", [mainType]);
    const navigate = useNavigate();
    const navigateToPokemon = () => navigate(`/pokemon/${pokemonDataName}`);
    
    return pokemonData && (
        <div className={`relative w-56 h-56 rounded-lg shadow-lg p-4 cursor-pointer ${backgroundClass}`}>
            {pokemonDataId && <FavoriteButton pokemonId={pokemonDataId} />}
            <PokemonTypeIconList pokemonDataTypes={pokemonData?.types ?? []} />
            <div onClick={navigateToPokemon} className="flex flex-col items-center mx-auto">
                <Label>{pokemonDataName ?? ""}</Label>
                <img
                    className="mx-auto w-40 h-40"
                    src={pokemonData?.sprites.front_default}
                    alt={pokemonDataName ?? ""} />
            </div>
        </div>
    );
}

export default PokemonCard;
