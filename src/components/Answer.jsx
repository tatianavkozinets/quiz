import React from "react";
import { setCurrentAnswer, setError } from "../reducers/types.js";

function Answer(props) {
  let classes = ["answer"];

  const handleClick = e => {
    props.dispatch({ type: setCurrentAnswer, currentAnswer: e.target.value });
    props.dispatch({ type: setError, error: "" });
  };

  if (props.selected) {
    classes.push("selected");
  }

  return (
    <button
      value={props.letter}
      className={classes.join(" ")}
      onClick={handleClick}
    >
      <span className="letter">{props.letter}.</span>
      {props.answer}
    </button>
  );
}

export default Answer;
