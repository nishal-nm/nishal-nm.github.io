import React from "react";
import Skill from "./Skill";

function SkillList() {
  return (
    <aside className="skills aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Technical Skills</h2>
        <div className="content">
          <p className="intro">
            I am passionate about leveraging technology to solve problems,
            continuously improving my skills, and contributing to impactful
            projects through innovative and collaborative efforts.
          </p>

          <div className="skillset">
            <Skill
              name="HTML5 & CSS3"
              percent="94%"
              tooltip="Advanced knowledge in HTML5 and CSS3, focusing on responsive design and modern layouts."
            />
            <Skill
              name="Javascript"
              percent="45%"
              tooltip="Intermediate JavaScript and JQuery for dynamic web development and event handling."
            />
            <Skill
              name="React"
              percent="90%"
              tooltip="Proficient in React for building interactive, component-based user interfaces."
            />
            <Skill
              name="Bootstrap"
              percent="80%"
              tooltip="Advanced Bootstrap skills for responsive, mobile-first web designs and pre-built components."
            />
            <Skill
              name="Python"
              percent="65%"
              tooltip="Proficient in Python, with little experience in automation, scripting, and data analysis."
            />
            <Skill
              name="SQL"
              percent="10%"
              tooltip="Basic SQL knowledge for simple queries and database operations."
            />
            <Skill
              name="Node.js & Express"
              percent="20%"
              tooltip="Learning Node.js and Express for building RESTful APIs and server-side applications."
            />
            <p>
              <a
                className="more-link"
                href="https://github.com/nishal-nm"
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
