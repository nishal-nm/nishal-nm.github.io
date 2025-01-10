import React from "react";
import Language from "./Language";

function LanguageList() {
  return (
    <aside className="languages aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Languages</h2>
        <div className="content">
          <ul className="list-unstyled">
            <Language lang="Malayalam" level="Native Speaker" star={5} />
            <Language lang="English" level="Intermediate" star={3} />
            <Language lang="Tamil" level="Conversational" star={2} />
            <Language lang="Hindi" level="Conversational" star={1.5} />
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default LanguageList;
