import React from "react";
import certificateData from "../data/certificate-data";
import experienceData from "../data/experience-data";
import Certificate from "./Certificate";
import Extender from "./ui/Extender";

const noOfExp = experienceData.length;

function CertificateList() {
  return (
    <section className="latest section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Certificates</h2>
        <div className="content">
          <Extender data={certificateData} initial={noOfExp}>
            {(shows) => {
              return certificateData.slice(0, shows).map((certificate) => {
                return (
                  <Certificate
                    key={certificate.id}
                    img={certificate.img}
                    title={certificate.title}
                    content={certificate.content}
                  />
                );
              });
            }}
          </Extender>
        </div>
      </div>
    </section>
  );
}

export default CertificateList;
