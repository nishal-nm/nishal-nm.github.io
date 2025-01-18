import React, { useEffect, useRef, useState } from "react";

const Extender = (props) => {
  const [isLower, setIsLower] = useState(false); // Tracks if the content is expanded
  const [shows, setShows] = useState(props.initial); // Number of items shown (starts with 2)
  const contentRef = useRef(null); // Ref for the content div

  // Track the height of the content div
  const [contentHeight, setContentHeight] = useState(0);

  // Recalculate content height when the "shows" state changes
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); // Get the full height of the content
    }
  }, [shows]); // Recalculate whenever the number of shown items changes

  function handleClick() {
    setIsLower((prevValue) => {
      const newLower = !prevValue;
      setShows(newLower ? props.data.length : props.initial); // Toggle between showing all or 2 items
      return newLower;
    });
  }

  return (
    <div>
      <div
        ref={contentRef}
        style={{
          overflow: "hidden", // Hide overflow when collapsing
          height: isLower ? `${contentHeight}px` : "auto", // Use auto for dynamic height
          transition: "height 0.5s ease-in-out", // Smooth transition on height change
        }}
      >
        {props.children(shows)}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: isLower ? "rotate(180deg)" : "rotate(0deg)", // Rotate icon based on isLower state
          transition: "transform 0.3s ease", // Smooth rotation transition
        }}
        onClick={handleClick}
      >
        <i className="fa-solid fa-chevron-down extend-icon"></i>
      </div>
    </div>
  );
};

export default Extender;
