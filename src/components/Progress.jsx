import React from "react";

const Progress = props => {
  return (
    <div>
      <h1>
        Question {props.current} of {props.total}
      </h1>
    </div>
  );
};

export default Progress;
