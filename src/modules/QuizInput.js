import * as React from 'react';
import {Button, TextField} from "@mui/material";
import {useContext, useState} from "react";

const QuizInput = ({quizContext}) => {
    const {answers, isStarted, setIsStarted, setAnswers, addToAnswers} = useContext(quizContext)

    const [countryName, setCountryName] = useState();

    const onStartButtonClicked = () => {
        if(!isStarted) setAnswers([])
        setIsStarted(!isStarted)
    }
    const onEnterButtonClicked = () => { addToAnswers(countryName) }
    const onTextChanged = (event) => { setCountryName(event.target.value) }

    return (
        <div style={{height: 400, width: '100%'}}>
            <Button variant="outlined" onClick={onStartButtonClicked}>{isStarted ? "STOP" : (answers?.length === 0 ? "START" : "START AGAIN")}</Button>
            {isStarted ? <TextField id="outlined-basic" label="Input a country name" value={countryName} onChange={onTextChanged} variant="outlined"/> : <></>}
            {isStarted ? <Button variant="outlined" onClick={onEnterButtonClicked} hidden={!isStarted}>ENTER</Button> : <></>}
        </div>
    );
}

export default QuizInput;