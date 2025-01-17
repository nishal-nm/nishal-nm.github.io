import React, { useState } from "react";
import resumeData from "../data/resume-data"; // Links to each resume format

function ViewResume() {
  const [isSelectorOpen, setSelectorOpen] = useState(false); // State for modal

  // Handle resume format selection and trigger download
  function handleFormatSelection(format) {
    setSelectorOpen(false); // Close modal after selection

    // Trigger download by creating an invisible link and clicking it programmatically
    const link = document.createElement("a");
    link.href = resumeData[format]; // Gets the corresponding link
    link.download = `resume_${format}`; // Customize the download filename
    link.click();
  }

  return (
    <>
      <button
        className="btn btn-cta-primary"
        onClick={() => setSelectorOpen(true)} // Open the modal on click
      >
        <i className="fas fa-file-alt"></i> View Resume
      </button>

      {isSelectorOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Select Format</h5>
              <button
                type="button"
                className="close-btn"
                onClick={() => setSelectorOpen(false)} // Close modal
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-description">
                Please choose the format you would like to download:
              </p>
              <div className="button-group">
                <button
                  className="btn btn-primary"
                  onClick={() => handleFormatSelection("pdf")}
                >
                  PDF
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleFormatSelection("ats")}
                >
                  ATS
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => handleFormatSelection("word")}
                >
                  Word
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewResume;
