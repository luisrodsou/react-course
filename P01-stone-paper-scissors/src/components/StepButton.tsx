import useGameStore, { GameStoreState } from "../store/GameStore";
import useScoreStore, { ScoreStoreState } from "../store/ScoreStore";
import { GameResult } from "../types/GameResult";
import { Step } from "../types/Step";

interface StepButtonProps {
    result: GameResult | null;
}

const StepButton = ({result}: StepButtonProps) => {
    const setStep = useGameStore((state: GameStoreState) => state.setStep);
    const {incrementScore} = useScoreStore<ScoreStoreState>((state) => state);


    const onClick = () => {
        switch (result) {
            case GameResult.WIN:
                incrementScore();
                setStep(Step.SELECTION);

                break;
            case GameResult.DRAW:
                setStep(Step.SELECTION);

                break;
            case GameResult.LOSE:
                setStep(Step.GAME_OVER);

                break;
            default:
        }
    }

    return (
        <button className="bg-gray-400 hover:bg-gray-600 rounded-lg w40 py-3 text-xl m-auto text-white block" onClick={onClick}>CONTINUE</button>
    )
}

export default StepButton;
