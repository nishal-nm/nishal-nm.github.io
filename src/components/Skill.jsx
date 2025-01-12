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

  function setLevel(percent) {
    const number = parseInt(percent, 10);
    let level = "Master";

    if (number < 10) {
      level = "Novice";
    } else if (number < 30) {
      level = "Beginner";
    } else if (number < 50) {
      level = "Intermediate";
    } else if (number < 70) {
      level = "Advanced";
    } else if (number < 85) {
      level = "Proficient";
    } else if (number < 95) {
      level = "Expert";
    }

    return level;
  }

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
          <i className="fas fa-info-circle"></i> {setLevel(props.percent)}
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
