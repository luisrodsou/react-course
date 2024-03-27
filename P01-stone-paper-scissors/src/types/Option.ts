import { Answer } from "./Answer";

export class Option {
    answer: Answer;
    winVersus: Answer[];
    loseVersus: Answer[];

    constructor(answer: Answer, winVersus: Answer[], loseVersus: Answer[]) {
        this.answer = answer;
        this.winVersus = winVersus;
        this.loseVersus = loseVersus;
    }
}

