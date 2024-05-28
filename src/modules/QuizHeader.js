import * as React from 'react';
import {useContext} from "react";

const QuizHeader = ({quizContext}) => {
    const {answers, isStarted, countries} = useContext(quizContext)

    return (
        <div style={{height: 400, width: '100%'}}>
            <span>Name all countries</span>
            <span hidden={isStarted || answers.length === 0}>You've named {answers.length} countries! Do you know there are {countries.length} of them?</span>
        </div>
    );
}

export default QuizHeader;