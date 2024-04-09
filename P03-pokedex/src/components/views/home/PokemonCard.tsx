import React from "react";
import useGetPokemon from "../../../hooks/useGetPokemon";
import { getMainPokemonType, getPokemonTypeBg } from "../../../utils/pokemon-type";
import Label from "../../shared/Label";
import FavoriteButton from "../../shared/button/FavoriteButton";
import { useNavigate } from "react-router";
import PokemonTypeIconList from "../pokemon-type/PokemonTypeIconList";
import { FaSpinner, FaXmark } from "react-icons/fa6";

interface PokemonCardProps {
    pokemonRef: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonRef }) => {
    const { pokemonData, isLoading, error } = useGetPokemon({ pokemonRef });
    const mainType = React.useMemo(() => pokemonData ? getMainPokemonType(pokemonData) : null, [pokemonData]);
    const backgroundClass = React.useMemo(() => mainType ? getPokemonTypeBg(mainType) : null, [mainType]);
    const navigate = useNavigate();
    const navigateToPokemon = pokemonData ? () => navigate(`/pokemon/${pokemonData.name}`) : undefined;

    if (pokemonData) {
        return (
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
        );
    }

    if (error) {
        return (
            <NoDataPokemonCard>
                <FaXmark className="w-full h-full" />
            </NoDataPokemonCard>
        );
    }

    if (isLoading) {
        return (
            <NoDataPokemonCard>
                <FaSpinner className="w-full animate-spin" />
            </NoDataPokemonCard>
        );
    }

    return (<></>);
};

const NoDataPokemonCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="w-56 h-56 rounded-lg shadow-lg p-4 flex items-center">
            {children}
        </div>
    );
};

export default PokemonCard;
