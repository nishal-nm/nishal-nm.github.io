import React, { useEffect, useState } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  // Initialize theme based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkSwitch");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, []);

  // Handle theme toggle
  function handleDarkModeToggle() {
    setIsDarkMode((prevState) => {
      const newState = !prevState;
      if (newState) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
      }
      return newState;
    });
  }

  // Handle resume format selection and trigger download
  function handleFormatSelection(format) {
    setIsModalOpen(false); // Close modal after selection

    // Trigger download by creating an invisible link and clicking it programmatically
    const link = document.createElement("a");
    link.href = resumeLinks[format];
    link.download = `${format}_resume`; // Customize the download filename
    link.click();
  }

  // Resume download links
  const resumeLinks = {
    pdf: "assets/pdf/resume.pdf",
    ats: "assets/pdf/resume_ats.txt",
    word: "assets/pdf/resume.docx",
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <img
              className="profile-image img-fluid float-start rounded-circle"
              src="assets/images/profile.png"
              alt="profile"
            />
            <div className="profile-content">
              <h1 className="name">Nishal NM</h1>
              <h2 className="desc">Student Engineer</h2>
              <ul className="social list-inline">
                <li className="list-inline-item">
                  <a
                    href="http://www.linkedin.com/in/nishal-nm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/nishal-nm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github-alt"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/ashikmalu.cpr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="dark-mode-switch d-flex">
              <div className="form-check form-switch mx-auto mx-md-0">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  id="darkSwitch"
                  checked={isDarkMode}
                  onChange={handleDarkModeToggle}
                />
                <label className="custom-control-label" htmlFor="darkSwitch">
                  Dark Mode
                </label>
              </div>
            </div>
            <button
              className="btn btn-cta-primary"
              onClick={() => setIsModalOpen(true)} // Open the modal on click
            >
              <i className="fas fa-file-alt"></i> View Resume
            </button>
          </div>
        </div>
      </div>

      {/* Modal for format selection */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Select Format</h5>
              <button
                type="button"
                className="close-btn"
                onClick={() => setIsModalOpen(false)} // Close modal
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
    </header>
  );
}

export default Header;
