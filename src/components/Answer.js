import React from "react";
import PropTypes from "prop-types";

const Answer = ({ number, answer, onSelectedAnswer, active }) => {
  return (
    <>
      <div
        className={`item ${active ? "active" : ""}`}
        onClick={() => {
          return onSelectedAnswer(number);
        }}
      >
        {answer}
      </div>
    </>
  );
};

Answer.propTypes = {
  number: PropTypes.number,
  answer: PropTypes.number,
  onSelectedAnswer: PropTypes.func,
  active: PropTypes.bool
};

export default Answer;
