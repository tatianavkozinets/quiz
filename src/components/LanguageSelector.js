import React, { useContext } from "react";
import { LgContext } from "../contexts/LanguageContext";

const LanguageSelector = () => {
  const langContext = useContext(LgContext);
  let { language, onChangeLanguage } = langContext;
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
