import React from "react";
import Modal from "react-modal";
import PokemonCard from "../home/PokemonCard";
import useSeachStore from "../../../hooks/store/useSearchStore";
import Button from "../../shared/button/Button";

const SearchModal: React.FC = () => {
    const { isOpen, finishSearch, setCurrentFilter, currentSearch, search } = useSeachStore(state => ({
        isOpen: state.isActiveSearch,
        finishSearch: state.finishSearch,
        setCurrentFilter: state.setCurrentFilter,
        currentSearch: state.currentSearch,
        search: state.search
    }));
    const updateFilter = (event: React.ChangeEvent<HTMLInputElement>) => setCurrentFilter(event.target.value);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={finishSearch}
            className="w-1/3 h-1/2 bg-white mx-auto p-5 mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg"
        >
            <input type="text" placeholder="Pokemon name or ID" onChange={updateFilter} className="border p-2" />
            <Button onClick={search}>Search</Button>
            {currentSearch && <PokemonCard pokemonRef={currentSearch} />}
        </Modal>
    );
};

export default SearchModal;
