import React, { useEffect } from "react";

function Skill(props) {
  useEffect(() => {
    // Initialize Bootstrap tooltips after the component has mounted
    if (window.bootstrap) {
      const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        // Initialize the Bootstrap Tooltip
        new window.bootstrap.Tooltip(tooltipTriggerEl);

        // Remove the title attribute to prevent native browser tooltips
        tooltipTriggerEl.removeAttribute("title");
      });
    } else {
      console.error("Bootstrap JavaScript is not loaded properly.");
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="item">
      <h3 className="level-title">
        {props.name}
        <span
          className="level-label"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title={props.tooltip}
        >
          <i className="fas fa-info-circle"></i> {props.level}
        </span>
      </h3>
      <div className="level-bar progress">
        <div
          className="progress-bar level-bar-inner"
          role="progressbar"
          style={{ width: props.percent }}
          aria-valuenow={props.percent}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default Skill;
