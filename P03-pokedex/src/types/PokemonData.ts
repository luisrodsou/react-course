
export interface PokemonType {
    name: string;
    url: string;
}

export interface PokemonDataType {
    slot: number;
    type: PokemonType;
}

export interface PokemonSprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
}

interface PokemonData {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonDataType[];
    sprites: PokemonSprites;
}

export default PokemonData;
