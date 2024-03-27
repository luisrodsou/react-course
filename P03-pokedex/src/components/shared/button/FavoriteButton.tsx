import React from "react";
import useFavoriteStore from "../../../hooks/store/useFavoriteStore";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

interface FavoriteButtonProps {
    pokemonId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({pokemonId}) => {
    const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
    const isFavorite = React.useMemo(() => favorites.includes(pokemonId), [favorites, pokemonId]);
    const toggleFavorite = () => isFavorite ? removeFavorite(pokemonId) : addFavorite(pokemonId);

    return (
        <button onClick={toggleFavorite} className="bg-white p-1 rounded-full top-2 left-2 absolute">
            {isFavorite ? <FaHeart fill="red" /> : <FaRegHeart />}
        </button>
    );
};

export default FavoriteButton;
