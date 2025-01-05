import React from "react";
import Project from "../components/Project";

function Projects() {
  return (
    <section class="projects section">
      <div class="section-inner shadow-sm rounded">
        <h2 class="heading">Projects</h2>
        <div class="content">
          <Project
            link="https://nishal-nm.github.io/memory-game/"
            download="https://github.com/nishal-nm/memory-game/archive/refs/heads/main.zip"
            title="Test Memory - A Memory Testing Card Game"
            desc="A fun React.js-based memory game where players match pairs 
                  of cards. It features smooth animations, responsive design, and logic 
                  to prevent interacting with already matched cards. This project 
                  demonstrates my skills in React.js and interactive web development."
          />
          <a
            class="btn btn-cta-secondary"
            href="https://github.com/nishal-nm"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub <i class="fas fa-chevron-right pt-1"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
