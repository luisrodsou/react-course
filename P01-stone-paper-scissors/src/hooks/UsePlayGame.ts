import React from "react"
import { GameResult } from "../types/GameResult";
import { Answer } from "../types/Answer";
import OPTIONS from "../constants/Options";
import { Option } from "../types/Option";

const usePlayGame = (): [GameResult | null, Answer | null, (answer: Answer) => void] => {
    const [result, setResult] = React.useState<GameResult | null>(null);
    const [cpuAnswer, setCpuAnswer] = React.useState<Answer | null>(null);

    const generateCpuChoice = React.useCallback((choice: Answer) => {
        const randomIndex: number = Math.floor(Math.random() * OPTIONS.length);
        const cpuOption: Option = OPTIONS[randomIndex];

        setCpuAnswer(cpuOption.answer);

        if (cpuOption.winVersus.includes(choice)) {
            setResult(GameResult.LOSE);
        } else if (cpuOption.loseVersus.includes(choice)) {
            setResult(GameResult.WIN);
        } else {
            setResult(GameResult.DRAW);
        }
    }, []);

    return [result, cpuAnswer, generateCpuChoice];
}

export default usePlayGame;
