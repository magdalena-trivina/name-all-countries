import * as React from 'react';
import {useContext} from "react";
import "./QuizHeader.css"

const QuizHeader = ({quizContext}) => {
    const {answers, isStarted, countries} = useContext(quizContext)

    return (
        <div className={`header`}>
            <span className={`title`}>Name all countries!</span><br/>
            <span hidden={isStarted || answers.length === 0}>You've named {answers.length} countries! Do you know there are {countries.length} of them?</span>
        </div>
    );
}

export default QuizHeader;