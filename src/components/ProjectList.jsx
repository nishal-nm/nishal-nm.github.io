import React from "react";
import myData from "../data/my-data";
import ProjectData from "../data/project-data";
import Project from "./Project";

function ProjectList() {
  return (
    <section className="projects section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Projects</h2>
        <div className="content">
          {ProjectData.map((project) => {
            return (
              <Project
                key={project.id}
                link={project.link}
                more={project.more}
                title={project.title}
                desc={project.desc}
              />
            );
          })}
          <a
            className="btn btn-cta-secondary"
            href={myData.github + "?tab=repositories"}
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub <i className="fas fa-chevron-right pt-1"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
