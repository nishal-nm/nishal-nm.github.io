import React from "react";
import myData from "../data/my-data";

function About() {
  return (
    <section className="about section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">About Me</h2>
        <div className="content">
          <p>{myData.about}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
