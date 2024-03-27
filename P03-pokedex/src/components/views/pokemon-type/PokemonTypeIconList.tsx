import { useNavigate } from "react-router";
import { PokemonDataType } from "../../../types/PokemonData"
import React from "react";
import { getPokemonTypeIcon } from "../../../utils/pokemon-type";

interface PokemonTypeIconListProps {
    pokemonDataTypes: PokemonDataType[];
}

const PokemonTyeIconList: React.FC<PokemonTypeIconListProps> = ({ pokemonDataTypes }) => {
    const navigate = useNavigate();
    const goToPokemonTypeView = (pokemonType: string) => () => navigate(`/type/${pokemonType}`);

    return (
        <div className="absolute top-2 right-2 gap-2 cursor-pointer">
            {pokemonDataTypes.map((pokemonDataType) => (
                <div
                    key={pokemonDataType.type.name}
                    onClick={goToPokemonTypeView(pokemonDataType.type.name)}
                    className="bg-white p-1 rounded-full w-6 h-6 mb-1"
                >
                    <img
                        src={getPokemonTypeIcon(pokemonDataType.type.name)}
                        alt={pokemonDataType.type.name}
                    />
                </div>
            ))}
        </div>
    );
}

export default PokemonTyeIconList;
