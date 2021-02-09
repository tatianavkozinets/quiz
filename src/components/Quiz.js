import React, { useReducer } from "react";
import Question from "./Question";
import Answers from "./Answers";
import Header from "./Header";
import {
  setCurrentQuestion,
  setCurrentAnswer,
  setAnswers,
  setError,
  resetData
} from "../reducers/types";
import QuizReducer, { init } from "../reducers/QuizReducer";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "Which statement about Hooks is not true?",
      answers: [
        "Hooks are still in beta and not available yet",
        "Hooks are 100% backwards-compatible and can be used side by side with classes",
        "Hooks are completely opt-in, there's no need to rewrite existing code",
        "All of the above"
      ],
      correct_answer: 1
    },
    {
      id: 2,
      question: "Which one is not a Hook?",
      answers: ["useState()", "useConst()", "useReducer()", "All of the above"],
      correct_answer: 1
    },
    {
      id: 3,
      question: "What Hook should be used for data fetching?",
      answers: ["useDataFetching()", "useApi()", "useEffect()", "useRequest()"],
      correct_answer: 2
    }
  ];

  const initialData = {
    currentQuestion: 0,
    currentAnswer: null,
    answers: [],
    error: false
  };

  const [state, dispatch] = useReducer(QuizReducer, initialData, init);
  let { currentQuestion, currentAnswer, answers, error } = state;

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

  const showQuestions = () => {
    return (
      <div>
        <Header
          titleText={`Question ${currentQuestion + 1} of ${questions.length}`}
        />
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
        {error && (
          <div className="ui negative message">Please select answer</div>
        )}
        <div>
          <button className="ui button primary" onClick={next}>
            Next
          </button>
        </div>
      </div>
    );
  };

  const showResults = () => {
    const showResultText = (i, res) => {
      const check = questions[i].correct_answer === res ? true : false;
      let color = check ? "green" : "red";
      let text = check ? "correct" : "failed";
      return (
        <span style={{ color: color }}>
          <i className={`${color} check icon`}></i>
          {text}
        </span>
      );
    };

    const onClickTryAgain = () => {
      dispatch({ type: resetData, payload: initialData });
    };

    return (
      <div>
        <Header titleText={"Your Answers"} />
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
          Try again
        </button>
      </div>
    );
  };

  return (
    <div className="ui container">
<h1>Language</h1>
      {currentQuestion < questions.length ? showQuestions() : showResults()}
    </div>
  );
};

export default Quiz;
