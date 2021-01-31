import React, { useContext } from "react";
import QuizContext from "../context/QuizContext";

function Question() {
  const { state } = useContext(QuizContext);
  const { questions, currentQuestion } = state;
  const question = questions[currentQuestion];
  return <h2>{question.question}</h2>;
}

export default Question;
