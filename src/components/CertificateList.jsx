import React from "react";
import certificateData from "../data/certificate-data";
import Certificate from "./Certificate";

const CertificateList = () => {
  return (
    <section className="latest section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Certificates</h2>
        <div className="content">
          {certificateData.map((certificate) => {
            return (
              <Certificate
                key={certificate.id}
                img={certificate.img}
                title={certificate.title}
                content={certificate.content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificateList;
