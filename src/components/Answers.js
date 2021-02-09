import React from "react";
import Answer from "./Answer";

const Answers = ({ question, onSelectedAnswer, currentAnswer }) => {
  return (
    <div>
      <div style={{ cursor: "pointer" }}>
        {question.answers.map((answer, i) => (
          <Answer
            key={i}
            number={i}
            answer={answer}
            onSelectedAnswer={onSelectedAnswer}
            active={currentAnswer === i}
          />
        ))}
      </div>
    </div>
  );
};

export default Answers;
