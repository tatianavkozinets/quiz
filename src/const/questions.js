export const questionsEnglish = [
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

export const questionsRussian = [
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
