import React from "react";
import { PokemonSprites } from "../../../types/PokemonData";

interface PokemonSpriteListProps {
    sprites: PokemonSprites;
}

const PokemonSpriteList: React.FC<PokemonSpriteListProps> = ({sprites}) => {
    return (
        <div className="flex flex-row">
            <h6 className="text-2xl text-center">Sprites</h6>
            <div className="flex">
                <img src={sprites.front_default} alt="front_default" className="w-32 h-32" />
                <img src={sprites.back_default} alt="back_default" className="w-32 h-32" />
                <img src={sprites.front_shiny} alt="front_shiny" className="w-32 h-32" />
                <img src={sprites.back_shiny} alt="back_shiny" className="w-32 h-32" />
            </div>
        </div>
    );
}

export default PokemonSpriteList;
