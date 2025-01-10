import React from "react";

function Project(props) {
  return (
    <div class="item">
      <h3 class="title">
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.title + " "}
        </a>
      </h3>
      <p class="summary">{props.desc}</p>
      <p>
        <a
          class="more-link"
          href={props.more}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-external-link-alt"></i>Find out more
        </a>
      </p>
    </div>
  );
}

export default Project;
