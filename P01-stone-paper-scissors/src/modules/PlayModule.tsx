import React from "react";
import Choice from "../components/Choice";
import usePlayGame from "../hooks/UsePlayGame";
import useGameStore, { GameStoreState } from "../store/GameStore"
import { Answer } from "../types/Answer";
import Result from "../components/Result";
import StepButton from "../components/StepButton";
import OPTIONS from "../constants/Options";

const PlayModule = () => {
    const choice = useGameStore((state: GameStoreState) => state.choice);
    const [result, cpuAnswer, generateCpuChoice] = usePlayGame();
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (Answer.NONE !== choice) {
            generateCpuChoice(choice);
        }
    }, [choice, generateCpuChoice]);

    React.useEffect(() => {
        if (count < OPTIONS.length) {
            setTimeout(() => setCount(count + 1), 250);
        }
    }, [count]);

    if (count < OPTIONS.length) {
        return <span className="h-48 text-9xl text-center block">{OPTIONS[count].answer}</span>
    }

    return (
        <>
            <Result result={result} />
            <div className="flex justify-around">
                <div className="flex flex-col align-center">
                    <span className="text-3xl text-center pb-5">PLAYER</span>
                    <Choice choice={choice} />
                </div>
                <div className="flex flex-col align-center">
                    <span className="text-3xl text-center pb-5">CPU</span>
                    <Choice choice={cpuAnswer} />
                </div>
            </div>
            <StepButton result={result} />
        </>
    )
}

export default PlayModule;
