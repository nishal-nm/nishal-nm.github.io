import React from "react";
import About from "./components/About";
import CertificateList from "./components/CertificateList";
import EducationList from "./components/EducationList";
import ExperienceList from "./components/ExperienceList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import LanguageList from "./components/LanguageList";
import Personal from "./components/Personal";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container sections-wrapper py-5">
        <div className="row">
          <div className="primary col-lg-8 col-12">
            <About />
            <ExperienceList />
            <CertificateList />
            <ProjectList />
          </div>
          <div className="secondary col-lg-4 col-12">
            <Info />
            <Personal />
            <SkillList />
            <EducationList />
            <LanguageList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
