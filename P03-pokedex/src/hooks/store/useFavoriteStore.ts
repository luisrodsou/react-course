import { create } from "zustand";
import { FAVORITES_LS_KEY } from "../../constants/misc";

interface FavoriteStore {
    favorites: number[];
    addFavorite: (pokemonId: number) => void;
    removeFavorite: (pokemonId: number) => void;
}

const useFavoriteStore = create<FavoriteStore>((updateFn) => ({
    favorites: localStorage.getItem(FAVORITES_LS_KEY)?.split(",").map(item => parseInt(item)) || [],
    addFavorite: (pokemonId) => updateFn(state => {
        const newFavorites = [...state.favorites, pokemonId];

        localStorage.setItem(FAVORITES_LS_KEY, newFavorites.join(","));

        return { favorites: newFavorites }
    }),
    removeFavorite: (pokemonId) => updateFn(state => {
        const newFavorites = state.favorites.filter((id) => id !== pokemonId);

        if (newFavorites.length > 0) {
            localStorage.setItem(FAVORITES_LS_KEY, newFavorites.join(","));
        } else {
            localStorage.removeItem(FAVORITES_LS_KEY);
        }

        return { favorites: newFavorites }
    }),
}));

export default useFavoriteStore;
