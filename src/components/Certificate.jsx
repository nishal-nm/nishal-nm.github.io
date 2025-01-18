import React, { useState } from "react";

function Certificate(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="item row" id={props.img}>
        <div className="col-md-4 col-12">
          <img
            className="img-fluid project-image rounded shadow"
            src={"assets/images/certificates/" + props.img + ".jpeg"}
            alt={props.title}
            onClick={toggleModal}
            style={{ cursor: "pointer" }} // Indicates the image is clickable
          />
        </div>
        <div className="desc col-md-8 col-12">
          <h3 className="title">{props.title}</h3>
          <p className="mb-2">{props.content}</p>
          <p>
            <a
              className="more-link"
              href={"assets/pdf/certificates/" + props.img + ".pdf"}
              target="_blank"
              rel="noreferrer"
              download
            >
              <i className="fas fa-external-link-alt"></i>Download
            </a>
          </p>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={toggleModal} // Close modal when clicking outside the image
        >
          <img
            src={"assets/images/certificates/" + props.img + ".jpeg"}
            alt={props.title}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      )}
    </>
  );
}

export default Certificate;
