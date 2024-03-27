import React from "react";
import useSeachStore from "../../../hooks/store/useSearchStore";
import { FaSearch } from "react-icons/fa";

const SearchButton: React.FC = () => {
    const startSearch = useSeachStore((state) => state.startSearch);

    return (
        <button onClick={startSearch} className="hover:text-white">
            <FaSearch />
        </button>
    );
};

export default SearchButton;
