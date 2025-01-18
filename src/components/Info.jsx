import React from "react";
import myData from "../data/my-data";

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
              {myData.location}
            </li>

            <li>
              <i className={"fas fa-envelope"}></i>
              <span className="sr-only">Email:</span>
              <a href={"mailto:" + myData.email + "?subject=Inquiry"}>
                {myData.email}
              </a>
            </li>

            <li>
              <i className={"fas fa-phone"}></i>
              <span className="sr-only">Phone:</span>
              {myData.phone}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Info;
