import * as React from 'react';
import {useContext} from "react";
import "./QuizAnsers.css"

const QuizAnswers = ({quizContext, type}) => {

    const {answers, countries, isStarted} = useContext(quizContext)

    const generateAnswers = () => {
        switch (String(type)) {
            case "correct":
                return answers.filter((a) => countries.some((c) =>
                    (c.toUpperCase() === a.toUpperCase()))).map((a) => (<div><span>{a}</span><br/></div>))
            case "wrong":
                return answers.filter((a) => !countries.some((c) =>
                    (c.toUpperCase() === a.toUpperCase()))).map((a) => (<div><span>{a}</span><br/></div>))
            case "notAnswered":
                if(isStarted || answers.length === 0)
                    return [];
                return countries.filter((a) => !answers.some((c) =>
                    (c.toUpperCase() === a.toUpperCase()))).map((a) => (<div><span>{a}</span><br/></div>))
            default:
                return [];
        }
    }

    return (isStarted? <div className={`${type}-answer`}>{generateAnswers()}</div> : <></>);
}

export default QuizAnswers;