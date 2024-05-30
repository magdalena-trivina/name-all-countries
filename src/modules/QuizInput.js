import * as React from 'react';
import {Button, TextField} from "@mui/material";
import {useContext, useState} from "react";
import "./QuizInput.css";

const QuizInput = ({quizContext}) => {
    const {answers, isStarted, setIsStarted, setAnswers, addToAnswers} = useContext(quizContext)

    const [countryName, setCountryName] = useState();

    const onStartButtonClicked = () => {
        if(!isStarted) setAnswers([])
        setIsStarted(!isStarted)
    }
    const onEnterButtonClicked = () => {
        addToAnswers(countryName)
        setCountryName("");
    }
    const onTextChanged = (event) => { setCountryName(event.target.value) }
    const onKeyUp = (event) => {
        if(event.key === "Enter") {
            onEnterButtonClicked()
        }
    }

    return (
        <div>
            <div className={`input-start-button`} >
                <Button size="large" variant="contained" onClick={onStartButtonClicked}>{isStarted ? "STOP" : (answers?.length === 0 ? "START" : "START AGAIN")}</Button>
            </div>
            <div className={`input-text`}>
                {isStarted ? <TextField size="medium" label="Input a country name" value={countryName}
                                        onChange={onTextChanged} onKeyUp={onKeyUp} variant="standard"/> : <></>}
            </div>
            <div className={`input-enter-button`}>
                {isStarted ? <Button variant="outlined" onClick={onEnterButtonClicked} hidden={!isStarted}>ENTER</Button> : <></>}
            </div>
        </div>
    );
}

export default QuizInput;