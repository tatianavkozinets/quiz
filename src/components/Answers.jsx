import React, { useContext } from "react";
import Answer from "./Answer";
import QuizContext from "../context/QuizContext";

function Answers() {
  const { state, dispatch } = useContext(QuizContext);
  const { currentAnswer, currentQuestion, questions } = state;
  const question = questions[currentQuestion];
  const { answer_a, answer_b, answer_c, answer_d } = question;
  return (
    <>
      <Answer
        letter="a"
        answer={answer_a}
        dispatch={dispatch}
        selected={currentAnswer === "a"}
      />
      <Answer
        letter="b"
        answer={answer_b}
        dispatch={dispatch}
        selected={currentAnswer === "b"}
      />
      <Answer
        letter="c"
        answer={answer_c}
        dispatch={dispatch}
        selected={currentAnswer === "c"}
      />
      <Answer
        letter="d"
        answer={answer_d}
        dispatch={dispatch}
        selected={currentAnswer === "d"}
      />
    </>
  );
}

export default Answers;
