import useGameStore from "../store/GameStore";
import useScoreStore from "../store/ScoreStore";
import { Step } from "../types/Step";


const GameOverModule = () => {
    const setStep = useGameStore(state => state.setStep);
    const resetScore = useScoreStore(state => state.resetScore);

    const onClick = () => {
        resetScore();
        
        setStep(Step.SELECTION);
    }

    return (
        <>
            <h2 className="text-3xl text-center py-5">GAME OVER</h2>
            <button className="bg-gray-400 hover:bg-gray-600 rounded-lg w40 py-3 text-xl m-auto text-white block" onClick={onClick}>RESTART</button>
        </>
    )
}

export default GameOverModule;