import React from "react";

function Personal() {
  return (
    <aside className="languages aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Personal Information</h2>
        <div className="content">
          <ul className="list-unstyled">
            <li className="item">
              <span className="title">
                <strong>Address</strong>
              </span>
              <span>
                <br className="visible-sm visible-xs" />
                Narimadakkal House <br />
                Venniyur PO <br />
                Tirurangadi <br />
                Kerala - 676508
              </span>
            </li>
            <li className="item">
              <span className="title">
                <strong>Date Of Birth: </strong>
              </span>
              <span>30-12-2003</span>
            </li>
            <li className="item">
              <span className="title">
                <strong>Gender: </strong>
              </span>
              <span>Male</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Personal;
