import React from "react";
import Speaks from "../components/Speaks";

function Languages() {
  return (
    <aside className="languages aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Languages</h2>
        <div className="content">
          <ul className="list-unstyled">
            <Speaks lang="Malayalam" level="Native Speaker" star={5} />
            <Speaks lang="English" level="Intermediate" star={3} />
            <Speaks lang="Tamil" level="Conversational" star={2} />
            <Speaks lang="Hindi" level="Conversational" star={1.5} />
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Languages;
