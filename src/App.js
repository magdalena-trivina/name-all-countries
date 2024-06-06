import './App.css';
import QuizHeader from "./modules/QuizHeader";
import QuizAnswers from "./modules/QuizAnswers";
import QuizInput from "./modules/QuizInput";
import QuizParent from "./modules/QuizParent";
import {createContext} from "react";
import {Grid} from "@mui/material";

function App() {

    const quizContext = createContext(null);

    return (
        <div className="App">
            <QuizParent quizContext={quizContext}>
                <QuizHeader quizContext={quizContext}></QuizHeader>
                <QuizInput quizContext={quizContext}></QuizInput>
                <Grid container spacing={1}>
                    <Grid item xs={2}/>
                    <Grid item xs={4}>
                        <QuizAnswers quizContext={quizContext} type="correct"></QuizAnswers>
                    </Grid>
                    <Grid item xs={4}>
                        <QuizAnswers quizContext={quizContext} type="wrong"></QuizAnswers>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <QuizAnswers quizContext={quizContext} type="notAnswered"></QuizAnswers>
            </QuizParent>
        </div>
    );
}

export default App;
