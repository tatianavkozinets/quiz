import React from "react";

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

export default Answer;
