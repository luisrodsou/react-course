import React from "react";
import { Link } from "react-router-dom";
import pokeballIcon from "../../../assets/icons/pokeball.png";
import SearchButton from "../../shared/button/SearchButton";
import { FaHeart } from "react-icons/fa";

const NavigationBar: React.FC = () => (
    <nav className="mx-auto bg-yellow-400 flex jultify-between h-12 items-center shadow-lg">
        <div className="mx-auto flex justify-between items-center w-3/4">
            <Link to="/" className="flex flex-row items-center hover:text-white">
                <img src={pokeballIcon} alt="Pokeball" className="w-10 h-10" />
                <span className="ml-2">Pokedex</span>
            </Link>
            <div className="flex gap-5 items-center">
                <Link to="/favorite" className="hover:text-white"><FaHeart /></Link>
                <SearchButton />
            </div>
        </div>
    </nav>
);

export default NavigationBar;
