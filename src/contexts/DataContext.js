import React, { createContext, useContext, useReducer } from "react";
import QuizReducer, { init } from "../reducers/QuizReducer";
import { LgContext } from "./LanguageContext";

export const QAContext = createContext();
const DataContext = props => {
  const initialData = {
    currentQuestion: 0,
    currentAnswer: null,
    answers: [],
    error: false
  };

  const { languageText } = useContext(LgContext);
  const { questions } = languageText;

  const [state, dispatch] = useReducer(QuizReducer, initialData, init);

  return (
    <QAContext.Provider value={{ questions, state, initialData, dispatch }}>
      {props.children}
    </QAContext.Provider>
  );
};

export default DataContext;
