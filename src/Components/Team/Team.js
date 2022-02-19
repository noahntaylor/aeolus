import React from "react";
import katieProfilePic from "./Images/katie.jpeg";

import "./Team.css";

function Team() {
  return (
    <div id="team" className="team-section">
      <h2 className="team-heading">The Aeolus Team</h2>
      <div className="team-members-container">
        <div className="team-member-container">
          <img className="team-member-img" src={katieProfilePic} alt="" />
          <h3 className="team-name">Katie Stone</h3>
          <p className="team-text">
            Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition
            with the Aeolus Portable Ventilation System, a prototype that will
            hopefully provide a cost-effective alternative to traditional
            COVID-19 ventilators.
          </p>
        </div>
        <div className="team-member-container">
          <img className="team-member-img" src={katieProfilePic} alt="" />
          <h3 className="team-name">Katie Stone</h3>
          <p className="team-text">
            Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition
            with the Aeolus Portable Ventilation System, a prototype that will
            hopefully provide a cost-effective alternative to traditional
            COVID-19 ventilators.
          </p>
        </div>
        <div className="team-member-container">
          <img className="team-member-img" src={katieProfilePic} alt="" />
          <h3 className="team-name">Katie Stone</h3>
          <p className="team-text">
            Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition
            with the Aeolus Portable Ventilation System, a prototype that will
            hopefully provide a cost-effective alternative to traditional
            COVID-19 ventilators.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
