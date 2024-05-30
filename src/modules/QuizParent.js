import {useState} from "react";
import "./QuizParent.css";

const QuizParent = ({quizContext, children}) => {

    const COUNTRIES = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia",
        "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi",
        "Cambodia", "Cameroon", "Canada", "Cabo Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
        "Democratic Republic of the Congo", "Costa Rica", "Cote dIvoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czechia", "Denmark", "Djibouti",
        "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
        "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
        "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland",
        "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg"];

    const [isStarted, setIsStarted] = useState(false);
    const [countries] = useState(COUNTRIES);
    const [answers, setAnswers] = useState([]);

    const addToAnswers = (newAnswer) => { setAnswers([...answers, newAnswer]) }

    return (
        <quizContext.Provider className={`parent`} value={{ isStarted, setIsStarted, answers, setAnswers, addToAnswers, countries }}>
            {children}
        </quizContext.Provider>
    );
}

export default QuizParent;