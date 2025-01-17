import React from "react";
import myData from "../data/my-data";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <small className="copyright">
          Designed by{" "}
          <a href={myData.linkedin} target="_blank" rel="noreferrer">
            {myData.name}
          </a>{" "}
        </small>
      </div>
    </footer>
  );
}

export default Footer;
