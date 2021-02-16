import React from "react";
import PropTypes from "prop-types";

const Question = ({ question }) => {
  return <h1>{question}</h1>;
};

Question.propTypes = {
  question: PropTypes.string
};

export default Question;
