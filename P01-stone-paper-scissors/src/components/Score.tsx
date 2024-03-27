import useScoreStore, { ScoreStoreState } from "../store/ScoreStore";


const Score = () => {
    const {currentScore, hightScore} = useScoreStore<ScoreStoreState>(state => state);

    return (
        <div className="w-96 m-auto flex justify-around py-12">
            <h2 className="text-2xl">CURRENT SCORE: {currentScore}</h2>
            <h2 className="text-2xl">HIGH SCORE: {hightScore}</h2>
        </div>
    )
}

export default Score;
