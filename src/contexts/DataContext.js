import React, { createContext, useContext, useReducer } from "react";
import QuizReducer, { init } from "../reducers/QuizReducer";
import { LgContext } from "./LanguageContext";

export const QAContext = createContext();

const DataContext = props => {
  const questionsEnglish = [
    {
      id: 1,
      question: "Which statement about Hooks is not true?",
      answers: [
        "Hooks are still in beta and not available yet",
        "Hooks are 100% backwards-compatible and can be used side by side with classes",
        "Hooks are completely opt-in, there's no need to rewrite existing code",
        "All of the above"
      ],
      correct_answer: 1
    },
    {
      id: 2,
      question: "Which one is not a Hook?",
      answers: ["useState()", "useConst()", "useReducer()", "All of the above"],
      correct_answer: 1
    },
    {
      id: 3,
      question: "What Hook should be used for data fetching?",
      answers: ["useDataFetching()", "useApi()", "useEffect()", "useRequest()"],
      correct_answer: 2
    }
  ];

  const questionsRussian = [
    {
      id: 1,
      question: "Какое выражение о хуках не верное?",
      answers: [
        "Хуки еще находятся в бета версии и не доступны.",
        "Хуки — обратно совместимы. Хуки можно использовать в классах.",
        "Вы можете попробовать хуки в одних компонентах, не изменяя код в других.",
        "Все варианты"
      ],
      correct_answer: 1
    },
    {
      id: 2,
      question: "Что не является хуком?",
      answers: ["useState()", "useConst()", "useReducer()", "Все варианты"],
      correct_answer: 1
    },
    {
      id: 3,
      question: "Какой хук используется для загрузки данных?",
      answers: ["useDataFetching()", "useApi()", "useEffect()", "useRequest()"],
      correct_answer: 2
    }
  ];
  const initialData = {
    currentQuestion: 0,
    currentAnswer: null,
    answers: [],
    error: false
  };

  const { language } = useContext(LgContext);
  const questions =
    language === "en" ? questionsEnglish : questionsRussian;

  const [state, dispatch] = useReducer(QuizReducer, initialData, init);

  return (
    <QAContext.Provider value={{ questions, state, initialData, dispatch }}>
      {props.children}
    </QAContext.Provider>
  );
};

export default DataContext;
