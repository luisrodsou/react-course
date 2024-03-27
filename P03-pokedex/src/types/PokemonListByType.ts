import { PokemonListItem } from "./PokemonList";

export interface Pokemon {
    pokemon: PokemonListItem;
}

interface PokemonListByType {
    pokemon: Pokemon[];
}

export default PokemonListByType;
