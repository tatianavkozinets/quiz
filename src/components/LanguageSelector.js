import React, { useContext } from "react";
import { LgContext } from "../contexts/LanguageContext";

const LanguageSelector = () => {
  const langContext = useContext(LgContext);
  const { languageText, onChangeLanguage } = langContext;
  const language = languageText.language;
  return (
    <div>
      <i
        className="gb uk flag"
        style={{ cursor: "pointer" }}
        onClick={() => onChangeLanguage("en")}
      />
      <i
        className="ru flag"
        style={{ cursor: "pointer" }}
        onClick={() => onChangeLanguage("ru")}
      />
      {language}
    </div>
  );
};

export default LanguageSelector;
