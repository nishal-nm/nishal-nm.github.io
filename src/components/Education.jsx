import React from "react";

function Education(props) {
  return (
    <div className="item">
      <h3 className="title">
        <i className="fas fa-graduation-cap"></i> {props.qual}
      </h3>
      <h4 className="university">
        {props.school} <span className="year">({props.year})</span>
      </h4>
    </div>
  );
}

export default Education;
