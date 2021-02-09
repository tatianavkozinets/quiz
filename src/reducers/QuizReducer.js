import {
  resetData,
  setAnswers,
  setCurrentAnswer,
  setCurrentQuestion,
  setError
} from "./types";

export const init = initialData => {
  return { ...initialData };
};

function QuizReducer(state, action) {
  switch (action.type) {
    case setCurrentAnswer:
      return { ...state, currentAnswer: action.payload };
    case setCurrentQuestion:
      return { ...state, currentQuestion: action.payload };
    case setAnswers:
      return { ...state, answers: action.payload };
    case setError:
      return { ...state, error: action.payload };
    case resetData:
      return init(action.payload);
    default:
      return state;
  }
}

export default QuizReducer;
