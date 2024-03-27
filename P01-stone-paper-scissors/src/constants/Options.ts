import { Answer } from "../types/Answer";
import { Option } from "../types/Option";

const OPTIONS: Option[] = [
    new Option(Answer.STONE, [Answer.SCISSORS, Answer.LIZARD], [Answer.PAPER, Answer.SPOCK]),
    new Option(Answer.PAPER, [Answer.STONE, Answer.SPOCK], [Answer.SCISSORS, Answer.LIZARD]),
    new Option(Answer.SCISSORS, [Answer.PAPER, Answer.LIZARD], [Answer.STONE, Answer.SPOCK]),
    new Option(Answer.LIZARD, [Answer.PAPER, Answer.SPOCK], [Answer.STONE, Answer.SCISSORS]),
    new Option(Answer.SPOCK, [Answer.STONE, Answer.SCISSORS], [Answer.PAPER, Answer.LIZARD])
]

export default OPTIONS;
