import React from "react";
import myData from "../data/my-data";

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
                {myData.address.house} House <br />
                {myData.address.po} PO <br />
                {myData.address.city} <br />
                {myData.address.state} - {myData.address.pincode}
              </span>
            </li>
            <li className="item">
              <span className="title">
                <strong>Date Of Birth: </strong>
              </span>
              <span>{myData.dob}</span>
            </li>
            <li className="item">
              <span className="title">
                <strong>Gender: </strong>
              </span>
              <span>{myData.gender}</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Personal;
