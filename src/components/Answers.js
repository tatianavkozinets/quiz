import React from "react";
import Answer from "./Answer";
import PropTypes from "prop-types";

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

Answer.propTypes = {
  question: PropTypes.string,
  onSelectedAnswer: PropTypes.func,
  currentAnswer: PropTypes.number
};

export default Answers;
