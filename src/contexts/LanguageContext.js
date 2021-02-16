import { useState, createContext } from "react";
import { en, ru } from "../const/languages";
export const LgContext = createContext();

const LanguageContext = prop => {
  const [language, setLanguage] = useState("en");

  const onChangeLanguage = language => {
    setLanguage(language);
  };

  return (
    <LgContext.Provider
      value={{
        languageText: language === "en" ? en : ru,
        onChangeLanguage: onChangeLanguage
      }}
    >
      {prop.children}
    </LgContext.Provider>
  );
};

export default LanguageContext;
