import { create } from "zustand";

interface SearchStore {
    isActiveSearch: boolean;
    startSearch: () => void;
    finishSearch: () => void;
    currentFilter: string;
    setCurrentFilter: (filter: string) => void;
    currentSearch: string;
    search: () => void;
}

const useSeachStore = create<SearchStore>((updateFn) => ({
    isActiveSearch: false,
    startSearch: () => updateFn({ isActiveSearch: true }),
    finishSearch: () => updateFn({ isActiveSearch: false, currentSearch: "", currentFilter: ""}),
    currentFilter: "",
    setCurrentFilter: (filter: string) => updateFn({ currentFilter: filter }),
    currentSearch: "",
    search: () => updateFn(state => ({ currentSearch: state.currentFilter.toLowerCase() }))
}));

export default useSeachStore;
