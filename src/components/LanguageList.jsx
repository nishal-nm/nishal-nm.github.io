import React from "react";
import LanguageData from "../data/language-data";
import Language from "./Language";

function LanguageList() {
  return (
    <aside className="languages aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Languages</h2>
        <div className="content">
          <ul className="list-unstyled">
            {LanguageData.map((language) => {
              return (
                <Language
                  key={language.id}
                  lang={language.lang}
                  level={language.level}
                  star={language.star}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default LanguageList;
