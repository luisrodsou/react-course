import { Answer } from "../types/Answer";

interface ChoiceProps {
    choice: Answer | null;
    onClick?: (answer: Answer) => void;
}

const Choice = ({choice, onClick}: ChoiceProps) => {
    const onClickChoice = () => onClick && choice && onClick(choice);

    return (
        <div className="rounded-full text-9xl">
            <button className="bg-gray-400 hover:bg-gray-600 rounded-full shadow-lg h-48 w-48" onClick={onClickChoice}>
                {choice}
            </button>
        </div>
    )
}

export default Choice;
