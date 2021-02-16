import React, { useContext } from "react";
import Header from "./Header";
import { resetData } from "../reducers/types";
import { LgContext } from "../contexts/LanguageContext";
import { QAContext } from "../contexts/DataContext";

const ShowResults = () => {
  const { languageText } = useContext(LgContext);
  const { questions, state, dispatch, initialData } = useContext(QAContext);
  const { answers } = state;
  const { againText, answerTitleText, correct, failed } = languageText;

  const showResultText = (i, res) => {
    const check = questions[i].correct_answer === res;
    const color = check ? "green" : "red";
    const checkText = check ? correct : failed;

    return (
      <span style={{ color: color }}>
        <i className={`${color} check icon`}/>
        {checkText}
      </span>
    );
  };

  const onClickTryAgain = () => {
    dispatch({ type: resetData, payload: initialData });
  };

  return (
    <div>
      <Header titleText={answerTitleText} />
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
