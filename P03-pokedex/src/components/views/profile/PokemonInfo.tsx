import React, { useMemo } from "react";
import useGetPokemon from "../../../hooks/useGetPokemon";
import { getMainPokemonType, getPokemonTypeBg } from "../../../utils/pokemon-type";
import PokemonSpriteList from "./PokemonSpriteList";
import { convertLibsToKg, convertInchesToCm } from "../../../utils";
import PokemonTypeIconList from "../pokemon-type/PokemonTypeIconList";

interface PokemonInfoProps {
    pokemonRef: string;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemonRef }) => {
    const { pokemonData } = useGetPokemon({ pokemonRef });
    const mainType = useMemo(() => pokemonData ? getMainPokemonType(pokemonData) : null, [pokemonData]);
    const backgroundClass = useMemo(() => mainType ? getPokemonTypeBg(mainType) : null, [mainType]);

    return pokemonData ? (
        <div className="flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg" data-testid="pokemonInfo">
            <div className={`w-72 h-72 rounded-l-lg items-center ${backgroundClass ?? ""}`}>
                <img
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData.name}
                    className="mx-auto w-72 h-72" />
            </div>
            <div className="flex flex-col grow p-5 gap-3">
                <div className="relative">
                    <h1 className="text-3xl first-letter:capitalize">{pokemonData.name}</h1>
                    <PokemonTypeIconList pokemonDataTypes={pokemonData.types} />
                </div>
                <span>{`Id: ${pokemonData.id}`}</span>
                <span>{`Weight: ${convertLibsToKg(pokemonData.weight).toFixed(2)} kg`}</span>
                <span>{`Height: ${convertInchesToCm(pokemonData.height).toFixed(2)} cm`}</span>
                <PokemonSpriteList sprites={pokemonData.sprites} />
            </div>
        </div>
    ) : <></>;
};

export default PokemonInfo;
