import { POKEMON_TYPE_ICONS } from "../constants/pokemon-type";
import PokemonData from "../types/PokemonData";
import PokemonTypeBG from "../types/PokemonTypeBG";

export const getMainPokemonType = (pokemon: PokemonData): string | null => {
    return pokemon.types.find((dataType) => dataType.slot === 1)?.type.name ?? null;
};

export const getPokemonTypeBg = (pokemonType: string): PokemonTypeBG => {
    return PokemonTypeBG[pokemonType.toUpperCase() as keyof typeof PokemonTypeBG];
}

export const getPokemonTypeIcon = (pokemonType: string): string => {
    return POKEMON_TYPE_ICONS[pokemonType.toLowerCase()];
}
