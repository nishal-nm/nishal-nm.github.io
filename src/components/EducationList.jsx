import React from "react";
import EducationData from "../data/education-data";
import Education from "./Education";

const EducationList = () => {
  return (
    <aside className="education aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Education</h2>
        <div className="content">
          {EducationData.map((education) => {
            return (
              <Education
                key={education.id}
                qual={education.qual}
                school={education.school}
                year={education.year}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default EducationList;
