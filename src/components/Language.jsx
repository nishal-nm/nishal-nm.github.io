import React from "react";

function Language(props) {
  // Convert the star rating into a number of full and half stars
  const fullStars = Math.floor(props.star); // Full stars (integer part)
  const halfStars = props.star % 1 >= 0.5 ? 1 : 0; // Half star if the decimal is 0.5 or greater

  // Create arrays to repeat the stars according to their count
  const fullStarsArray = new Array(fullStars).fill("fas fa-star"); // Full stars
  const halfStarsArray = new Array(halfStars).fill("fas fa-star-half"); // Half stars

  // Combine all the stars into one array
  const stars = [...fullStarsArray, ...halfStarsArray];

  return (
    <li className="item">
      <span className="title">
        <strong>{props.lang}: </strong>
      </span>
      <span className="level">
        {props.level} <br className="visible-sm visible-xs" />
        {stars.map((star, index) => (
          <i key={index} className={star} style={{ marginRight: "3px" }}></i> // Add space between stars
        ))}
      </span>
    </li>
  );
}

export default Language;
