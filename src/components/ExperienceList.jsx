import React from "react";
import experienceData from "../data/experience-data";
import Experience from "./Experience";

const ExperienceList = () => {
  return (
    <section className="experience section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Experience</h2>
        <div className="content">
          {experienceData.map((experience) => {
            return (
              <Experience
                key={experience.id}
                certificate={experience.certificate}
                what={experience.what}
                where={experience.where}
                link={experience.link}
                during={experience.during}
                content={experience.content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
