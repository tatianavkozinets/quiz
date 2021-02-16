import { useState, createContext } from "react";

export const LgContext = createContext();

const LanguageContext = prop => {
  const [language, setLanguage] = useState("english");

  const onChangeLanguage = language => {
    setLanguage(language);
  };

  return (
    <LgContext.Provider
      value={{
        language: language,
        onChangeLanguage: onChangeLanguage
      }}
    >
      {prop.children}
    </LgContext.Provider>
  );
};

export default LanguageContext;
