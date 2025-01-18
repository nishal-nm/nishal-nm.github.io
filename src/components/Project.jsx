import React from "react";

function Project(props) {
  return (
    <div className="item">
      <h3 className="title">
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.title + " "}
        </a>
      </h3>
      <p className="summary">{props.desc}</p>
      <p>
        <a
          className="more-link"
          href={props.more}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-external-link-alt"></i>Find out more
        </a>
      </p>
    </div>
  );
}

export default Project;
