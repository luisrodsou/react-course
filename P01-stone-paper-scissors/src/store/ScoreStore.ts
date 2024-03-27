import { create } from "zustand";

export interface ScoreStoreState {
    currentScore: number;
    hightScore: number;

    incrementScore: () => void;
    resetScore: () => void;
}

const useScoreStore = create<ScoreStoreState>((setState, getState) => ({
    currentScore: 0,
    hightScore: localStorage.getItem("hightScore") ? parseInt(localStorage.getItem("hightScore") as string) : 0,
    
    incrementScore: () => {
        const newScore = getState().currentScore + 1;

        setState(() => ({currentScore: newScore}));

        if (newScore > getState().hightScore) {
            setState(() => ({hightScore: newScore}));
            localStorage.setItem("hightScore", newScore.toString());
        }
    },
    
    resetScore: () => setState(() => ({currentScore: 0}))
}));

export default useScoreStore;
