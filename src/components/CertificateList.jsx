import React from "react";
import Certificate from "./Certificate";

const CertificateList = () => {
  return (
    <section className="latest section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Certificates</h2>
        <div className="content">
          <Certificate
            img="nptel"
            title="Python for Data Science"
            content='Successfully completed the NPTEL "Python for Data Science" course. 
            Achieved high scores while gaining expertise in Python for data analysis 
            and scientific computing, strengthening my skills in data-driven problem-solving'
          />
          <Certificate
            img="icfoss"
            title="Machine Learning with Python"
            content="This certificate recognizes my participation in a five-day internship 
            program on Machine Learning through Python, organized by ICFOSS in association 
            with FOSS Cell, MEA Engineering College, from May 20th to 24th, 2023."
          />
          <Certificate
            img="techmaghi"
            title="Frontend Python Web Development"
            content='I earned this certificate for completing a five-day internship focused on 
            frontend Python web development at Techmaghi. My work included hands-on experience 
            with Python, Flask, SQLite, and contributing to a "Blog Web Application" project.'
          />
        </div>
      </div>
    </section>
  );
};

export default CertificateList;
