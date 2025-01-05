import React, { useEffect, useState } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  const handleDarkModeToggle = () => {
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
            <a
              className="btn btn-cta-primary"
              href="assets/pdf/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-alt"></i> View Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
