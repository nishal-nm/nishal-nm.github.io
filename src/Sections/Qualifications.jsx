import React from "react";
import Education from "../components/Education";

const Qualifications = () => {
  return (
    <aside className="education aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Education</h2>
        <div className="content">
          <Education
            qual="B.Tech Computer Science"
            school="MEA Engineering College"
            year="2021-2025"
          />
          <Education
            qual="Higher Secondary"
            school="Govt Higher Secondary School Tirurangadi"
            year="2019-2021"
          />
        </div>
      </div>
    </aside>
  );
};

export default Qualifications;
