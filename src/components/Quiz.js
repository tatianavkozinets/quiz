import React from "react";
import ShowContent from "./ShowContent";
import LanguageSelector from "./LanguageSelector";
import LanguageContext from "../contexts/LanguageContext";
import DataContext from "../contexts/DataContext";

const Quiz = () => {
  return (
    <div className="ui container">
      <LanguageContext>
        <LanguageSelector />
        <DataContext>
          <ShowContent />
        </DataContext>
      </LanguageContext>
    </div>
  );
};

export default Quiz;
