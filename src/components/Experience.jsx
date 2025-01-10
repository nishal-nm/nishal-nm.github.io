import React from "react";

function Experience(props) {
  return (
    <div className="item">
      <h3 className="title">
        {props.what} -{" "}
        <span className="place">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.where}
          </a>
        </span>{" "}
        <span className="year">({props.during})</span>
      </h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Experience;
