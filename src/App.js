import './App.css';
import QuizHeader from "./modules/QuizHeader";
import QuizAnswers from "./modules/QuizAnswers";
import QuizInput from "./modules/QuizInput";
import QuizParent from "./modules/QuizParent";
import {createContext} from "react";

function App() {

    const quizContext = createContext(null);

    return (
        <div className="App">
            <QuizParent quizContext={quizContext}>
                <QuizHeader quizContext={quizContext}></QuizHeader>
                <QuizInput quizContext={quizContext}></QuizInput>
                <QuizAnswers quizContext={quizContext} type="Correct"></QuizAnswers>
                <QuizAnswers quizContext={quizContext} type="Wrong"></QuizAnswers>
                <QuizAnswers quizContext={quizContext} type="NotAnswered"></QuizAnswers>
            </QuizParent>
        </div>
    );
}

export default App;
