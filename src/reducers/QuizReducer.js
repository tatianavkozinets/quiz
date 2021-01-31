import {
  resetQuiz,
  setAnswers,
  setCurrentAnswer,
  setCurrentQuestion,
  setError,
  setShowResults
} from "./types";

const QuizReducer = (state, action) => {
  switch (action.type) {
    case setCurrentQuestion:
      return {
        ...state,
        currentQuestion: action.currentQuestion
      };
    case setCurrentAnswer:
      return {
        ...state,
        currentAnswer: action.currentAnswer
      };
    case setAnswers:
      return {
        ...state,
        answers: action.answers
      };
    case setShowResults:
      return {
        ...state,
        showResults: action.showResults
      };
    case setError:
      return {
        ...state,
        error: action.error
      };
    case resetQuiz:
      return {
        ...state,
        answers: [],
        currentAnswer: "",
        currentQuestion: 0,
        showResults: false
      };
    default:
      return state;
  }
};

export default QuizReducer;
