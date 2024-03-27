import { create } from "zustand";
import { Answer } from "../types/Answer";
import { Step } from "../types/Step";

export interface GameStoreState {
    step: Step;
    choice: Answer;

    setStep: (step: Step) => void;
    setChoice: (choice: Answer) => void;
}

const useGameStore = create<GameStoreState>((setState) => ({
    step: Step.SELECTION,
    choice: Answer.NONE,
    
    setStep: (step: Step) => setState({step}),
    setChoice: (choice: Answer) => setState({choice})
}));

export default useGameStore;
