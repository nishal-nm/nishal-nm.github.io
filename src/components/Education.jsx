import React from "react";

function Education(props) {
  return (
    <div className="item">
      <h3 className="title">
        <i className="fas fa-graduation-cap" style={{ marginRight: "4px" }}></i>{" "}
        {props.qual}{" "}
        <span class="badge badge-theme right-align">
          <a
            href={"assets/pdf/certificates/" + props.qual + ".pdf"}
            target="_blank"
            rel="noreferrer"
            download
          >
            View
          </a>
        </span>
      </h3>
      <h4 className="university">
        {props.school} <br />
        <span className="year">{props.year}</span>
      </h4>
    </div>
  );
}

export default Education;
