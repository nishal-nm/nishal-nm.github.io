import React from "react";
import About from "./sections/About";
import Certifications from "./sections/Certifications";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Info from "./sections/Info";
import Languages from "./sections/Languages";
import Projects from "./sections/Projects";
import Qualifications from "./sections/Qualifications";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container sections-wrapper py-5">
        <div className="row">
          <div className="primary col-lg-8 col-12">
            <About />
            <Experience />
            <Certifications />
            <Projects />
          </div>
          <div className="secondary col-lg-4 col-12">
            <Info />
            <Skills />
            <Qualifications />
            <Languages />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
