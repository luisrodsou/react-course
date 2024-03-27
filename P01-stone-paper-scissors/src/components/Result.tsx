import { GameResult } from "../types/GameResult";

interface ResultProps {
    result: GameResult | null;
}

const Result = ({result}: ResultProps) => {
    return (
        <span className="text-3xl text-center block">{result}</span>
    );
}

export default Result;
