import { useMemo } from "react";
import { Step } from "./types/Step"
import PlayModule from "./modules/PlayModule";
import SelectionModule from "./modules/SelectionModule"
import useGameStore from "./store/GameStore";
import GameOverModule from "./modules/GameOverModule";
import Score from "./components/Score";

const renderModule = (step: Step) => {
  switch (step) {
    case Step.SELECTION:
      return <SelectionModule />
    case Step.PLAY:
      return <PlayModule />
    case Step.GAME_OVER:
      return <GameOverModule />
    default:
      return null
  }
}

function App() {
  const step = useGameStore(state => state.step);
  const module = useMemo(() => renderModule(step), [step]);

  return (
    <>
      <h1 className="text-center font-extrabold text-5xl pt-12">STONE, PAPER, SCISSORS, LIZARD, SPOCK</h1>
      <Score />
      {module}
    </>
  )
}

export default App
