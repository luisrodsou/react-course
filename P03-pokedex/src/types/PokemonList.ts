
export interface PokemonListItem {
    name: string;
    url: string;
}

interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

export default PokemonList;
