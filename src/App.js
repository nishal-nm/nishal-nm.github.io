import React from "react";
import About from "./Sections/About";
import Certifications from "./Sections/Certifications";
import Experience from "./Sections/Experience";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Info from "./Sections/Info";
import Languages from "./Sections/Languages";
import Projects from "./Sections/Projects";
import Qualifications from "./Sections/Qualifications";
import Skills from "./Sections/Skills";

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
