import React, { useContext } from "react";
import Question from "./Question";
import Answers from "./Answers";
import ShowResults from "./ShowResults";
import Header from "./Header";
import {
  setAnswers,
  setCurrentAnswer,
  setCurrentQuestion,
  setError
} from "../reducers/types";
import { LgContext } from "../contexts/LanguageContext";
import { QAContext } from "../contexts/DataContext";

const ShowContent = () => {
  const { language } = useContext(LgContext);
  const { questions, state, dispatch } = useContext(QAContext);
  const { currentQuestion, currentAnswer, answers, error } = state;
  let nextButtonText, errorText, titleText;

  if (language === "en") {
    nextButtonText = "Next";
    errorText = "Please select answer";
    titleText = `Question ${currentQuestion + 1} of ${questions.length}`;
  }
  if (language === "ru") {
    nextButtonText = "Дальше";
    errorText = "Пожалуйста, выбирите ответ";
    titleText = ` Вопрос ${currentQuestion + 1} из ${questions.length}`;
  }

  const onSelectedAnswer = answer => {
    dispatch({ type: setCurrentAnswer, payload: answer });
    dispatch({ type: setError, payload: false });
  };

  const next = () => {
    if (currentAnswer === null) {
      dispatch({ type: setError, payload: true });
    } else {
      dispatch({ type: setAnswers, payload: [...answers, currentAnswer] });
      dispatch({ type: setCurrentAnswer, payload: null });
      dispatch({ type: setCurrentQuestion, payload: currentQuestion + 1 });
    }
  };
  if (currentQuestion < questions.length) {
    return (
      <div>
        <Header titleText={titleText} />
        <div>
          <Question question={questions[currentQuestion].question} />
        </div>

        <div className="ui vertical menu fluid">
          <Answers
            question={questions[currentQuestion]}
            currentAnswer={currentAnswer}
            onSelectedAnswer={onSelectedAnswer}
          />
        </div>
        {error && <div className="ui negative message">{errorText}</div>}
        <div>
          <button className="ui button primary" onClick={next}>
            {nextButtonText}
          </button>
        </div>
      </div>
    );
  }

  return <ShowResults />;
};

export default ShowContent;
