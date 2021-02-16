import React, { useContext } from "react";
import Header from "./Header";
import { resetData } from "../reducers/types";
import { LgContext } from "../contexts/LanguageContext";
import { QAContext } from "../contexts/DataContext";

const ShowResults = () => {
  const { language } = useContext(LgContext);
  const { questions, state, dispatch, initialData } = useContext(QAContext);
  const { answers } = state;
  let againText, titleText, correct, failed;

  if (language === "en") {
    againText = "Try again";
    titleText = "Your Answers";
    correct = "correct";
    failed = "failed";
  }

  if (language == "ru") {
    againText = "Попробуйте снова";
    titleText = "Ваши ответы";
    correct = "Верно";
    failed = "Неверно";
  }

  const showResultText = (i, res) => {
    const check = questions[i].correct_answer === res ? true : false;
    let color = check ? "green" : "red";
    let checkText = check ? correct : failed;

    return (
      <span style={{ color: color }}>
        <i className={`${color} check icon`}></i>
        {checkText}
      </span>
    );
  };

  const onClickTryAgain = () => {
    dispatch({ type: resetData, payload: initialData });
  };

  return (
    <div>
      <Header titleText={titleText} />
      <div className="ui segment">
        {answers.map((a, i) => (
          <div className="ui vertical segment" key={i}>
            <div className="ui header">{questions[i].question}</div>
            <p>
              {showResultText(i, a)} - {questions[i].answers[a]}
            </p>
          </div>
        ))}
      </div>
      <button className="ui button primary" onClick={onClickTryAgain}>
        {againText}
      </button>
    </div>
  );
};

export default ShowResults;
