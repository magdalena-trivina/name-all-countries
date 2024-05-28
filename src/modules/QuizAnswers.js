import * as React from 'react';
import {useContext} from "react";

const QuizAnswers = ({quizContext, type}) => {

    const {answers, countries, isStarted} = useContext(quizContext)

    const generateAnswers = () => {
        switch (String(type)) {
            case "Correct":
                return answers.filter((a) => countries.some((c) => (c === a))).map((a) => (<span>{a}</span>))
            case "Wrong":
                return answers.filter((a) => !countries.some((c) => (c === a))).map((a) => (<span>{a}</span>))
            case "NotAnswered":
                if(isStarted || answers.length === 0)
                    return [];
                return countries.filter((a) => !answers.some((c) => (c === a))).map((a) => (<span>{a}</span>))
            default:
                return [];
        }
    }

    return (<div style={{height: 400, width: '100%'}}>{generateAnswers()}</div>);
}

export default QuizAnswers;