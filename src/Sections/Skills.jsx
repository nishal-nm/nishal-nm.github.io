import React from "react";
import Skill from "../components/Skill";

function Skills() {
  return (
    <aside className="skills aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Skills</h2>
        <div className="content">
          <p className="intro">
            I am passionate about leveraging technology to solve problems,
            continuously improving my skills, and contributing to impactful
            projects through innovative and collaborative efforts.
          </p>

          <div className="skillset">
            <Skill
              name="HTML5 & CSS3"
              level="Expert"
              percent="95%"
              tooltip="Advanced knowledge in HTML5 and CSS3, focusing on responsive design and modern layouts."
            />
            <Skill
              name="Bootstrap"
              level="Advanced"
              percent="85%"
              tooltip="Advanced Bootstrap skills for responsive, mobile-first web designs and pre-built components."
            />
            <Skill
              name="React"
              level="Pro"
              percent="65%"
              tooltip="Proficient in React for building interactive, component-based user interfaces."
            />
            <Skill
              name="Javascript & jQuery"
              level="Intermediate"
              percent="50%"
              tooltip="Intermediate JavaScript and JQuery for dynamic web development and event handling."
            />
            <Skill
              name="Python & Django"
              level="Beginner"
              percent="15%"
              tooltip="Learning Python and Django for back-end development and simple web applications."
            />
            <Skill
              name="SQL"
              level="Beginner"
              percent="10%"
              tooltip="Basic SQL knowledge for simple queries and database operations."
            />
            {/* <Skill
              name="Node.js & Express"
              level="Beginner"
              percent="20%"
              tooltip="Learning Node.js and Express for building RESTful APIs and server-side applications."
            /> */}
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

export default Skills;
