import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import myData from "../data/my-data";
import ViewResume from "./ViewResume";

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

  return (
    <motion.header
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <img
              className="profile-image img-fluid float-start rounded-circle w-10 h-10"
              src={"assets/images/" + myData.img}
              alt="profile"
            />
            <div className="profile-content">
              <h1 className="name">{myData.name}</h1>
              <h2 className="desc">{myData.job}</h2>
              <ul className="social list-inline">
                <li className="list-inline-item">
                  <a
                    href={myData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href={myData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github-alt"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href={myData.facebook}
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
            <ViewResume />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
