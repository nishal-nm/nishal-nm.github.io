import React from "react";

function Info() {
  return (
    <aside className="info aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading sr-only">Basic Information</h2>
        <div className="content">
          <ul className="list-unstyled">
            <li>
              <i className={"fas fa-map-marker-alt"}></i>
              <span className="sr-only">Location:</span>
              Malappuram, Kerala
            </li>

            <li>
              <i className={"fas fa-envelope"}></i>
              <span className="sr-only">Email:</span>
              <a href="mailto:nishalshalu17@gmail.com?subject=Inquiry">
                nishalshalu17@gmail.com
              </a>
            </li>

            <li>
              <i className={"fas fa-phone"}></i>
              <span className="sr-only">Phone:</span>
              +91 6235544220
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Info;
