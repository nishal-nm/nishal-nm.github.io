import React from "react";
import myData from "../data/my-data";
import skillData from "../data/skill-data";
import Skill from "./Skill";

function SkillList() {
  return (
    <aside className="skills aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Technical Skills</h2>
        <div className="content">
          <p className="intro">{myData.tech}</p>

          <div className="skillset">
            {skillData.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  name={skill.name}
                  percent={skill.percent}
                  tooltip={skill.tooltip}
                />
              );
            })}
            <p>
              <a
                className="more-link"
                href={myData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> More on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SkillList;
