import PokemonData from "../../types/PokemonData";
import PokemonTypeBG from "../../types/PokemonTypeBG";
import { getMainPokemonType, getPokemonTypeBg, getPokemonTypeIcon } from "../../utils/pokemon-type";

describe("getMainPokemonType", () => {
    const testData = [
        {
            pokemonData: {
                types: [
                    { slot: 1, type: { name: "grass" } },
                    { slot: 2, type: { name: "poison" } }
                ]
            },
            mainType: "grass"
        },
        {
            pokemonData: {
                types: []
            },
            mainType: null
        }
    ];
    
    it.each(testData)("Should return the main type of the pokemon", (testDataItem) => {
        expect(getMainPokemonType(testDataItem.pokemonData as PokemonData)).toBe(testDataItem.mainType);
    });
});

describe("getPokemonTypeBg", () => {
    const testData = [
        { pokemonType: "bug", bg: PokemonTypeBG.BUG },
        { pokemonType: "dark", bg: PokemonTypeBG.DARK },
        { pokemonType: "dragon", bg: PokemonTypeBG.DRAGON },
        { pokemonType: "electric", bg: PokemonTypeBG.ELECTRIC },
        { pokemonType: "fairy", bg: PokemonTypeBG.FAIRY },
        { pokemonType: "fighting", bg: PokemonTypeBG.FIGHTING },
        { pokemonType: "fire", bg: PokemonTypeBG.FIRE },
        { pokemonType: "flying", bg: PokemonTypeBG.FLYING },
        { pokemonType: "ghost", bg: PokemonTypeBG.GHOST },
        { pokemonType: "grass", bg: PokemonTypeBG.GRASS },
        { pokemonType: "ground", bg: PokemonTypeBG.GROUND },
        { pokemonType: "ice", bg: PokemonTypeBG.ICE },
        { pokemonType: "normal", bg: PokemonTypeBG.NORMAL },
        { pokemonType: "poison", bg: PokemonTypeBG.POISON },
        { pokemonType: "psychic", bg: PokemonTypeBG.PSYCHIC },
        { pokemonType: "rock", bg: PokemonTypeBG.ROCK },
        { pokemonType: "steel", bg: PokemonTypeBG.STEEL },
        { pokemonType: "water", bg: PokemonTypeBG.WATER },
        { pokemonType: "", bg: undefined }
    ];
    
    it.each(testData)("Should return the background of the pokemon type", (testDataItem) => {
        expect(getPokemonTypeBg(testDataItem.pokemonType)).toBe(testDataItem.bg);
    });
});

describe("getPokemonTypeIcon", () => {
    const testData = [
        { pokemonType: "bug", icon: "test-file-stub" },
        { pokemonType: "dark", icon: "test-file-stub" },
        { pokemonType: "dragon", icon: "test-file-stub" },
        { pokemonType: "electric", icon: "test-file-stub" },
        { pokemonType: "fairy", icon: "test-file-stub" },
        { pokemonType: "fighting", icon: "test-file-stub" },
        { pokemonType: "fire", icon: "test-file-stub" },
        { pokemonType: "flying", icon: "test-file-stub" },
        { pokemonType: "ghost", icon: "test-file-stub" },
        { pokemonType: "grass", icon: "test-file-stub" },
        { pokemonType: "ground", icon: "test-file-stub" },
        { pokemonType: "ice", icon: "test-file-stub" },
        { pokemonType: "normal", icon: "test-file-stub" },
        { pokemonType: "poison", icon: "test-file-stub" },
        { pokemonType: "psychic", icon: "test-file-stub" },
        { pokemonType: "rock", icon: "test-file-stub" },
        { pokemonType: "steel", icon: "test-file-stub" },
        { pokemonType: "water", icon: "test-file-stub" },
        { pokemonType: "", icon: undefined }
    ];
    
    it.each(testData)("Should return the icon of the pokemon type", (testDataItem) => {
        expect(getPokemonTypeIcon(testDataItem.pokemonType)).toBe(testDataItem.icon);
    });
});
