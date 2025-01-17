import { motion } from "framer-motion";
import React from "react";
import Section from "./Section";
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
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="primary col-lg-8 col-12">
            <Section>
              <About />
            </Section>
            <Section>
              <ExperienceList />
            </Section>
            <Section>
              <CertificateList />
            </Section>
            <Section>
              <ProjectList />
            </Section>
          </div>
          <div className="secondary col-lg-4 col-12">
            <Section>
              <Info />
            </Section>
            <Section>
              <Personal />
            </Section>
            <Section>
              <SkillList />
            </Section>
            <Section>
              <EducationList />
            </Section>
            <Section>
              <LanguageList />
            </Section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
