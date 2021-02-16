import { questionsEnglish, questionsRussian } from "./questions";

export const en = {
  language: "en",
  questions: questionsEnglish,
  againText: "Try again",
  answerTitleText: "Your Answers",
  correct: "correct",
  failed: "failed",
  nextButtonText: "Next",
  errorText: "Please select answer",
  questionsTitleText: { text1: "Question", text2: "of" }
};

export const ru = {
  language: "ru",
  questions: questionsRussian,
  againText: "Попробуйте снова",
  answerTitleText: "Ваши ответы",
  correct: "Верно",
  failed: "Неверно",
  nextButtonText: "Дальше",
  errorText: "Пожалуйста, выбирите ответ",
  questionsTitleText: { text1: "Вопрос", text2: "из" }
};
