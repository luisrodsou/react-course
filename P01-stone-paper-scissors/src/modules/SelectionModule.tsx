import { Answer } from "../types/Answer";
import Choice from "../components/Choice";
import useGameStore, { GameStoreState } from "../store/GameStore";
import { Step } from "../types/Step";
import OPTIONS from "../constants/Options";
import { Option } from "../types/Option";

const SelectionModule = () => {
    const [setChoice, setStep] = useGameStore((state: GameStoreState) => [state.setChoice, state.setStep]);

    const onClickChoice = (choice: Answer) => {
        setChoice(choice);
        setStep(Step.PLAY);
    };

    return (
        <div className="flex row justify-around">
            {OPTIONS.map((option: Option) => <Choice key={option.answer} choice={option.answer} onClick={onClickChoice} />)}
        </div>
    )
}

export default SelectionModule;
