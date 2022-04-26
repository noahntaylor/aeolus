import React from "react";
import "./Team.css";

function TeamMemberSection({ teamMember }) {
  return (
    <div className="team-member-container">
      <img className="team-member-img" src={teamMember.picture} alt="" />
      <h3 className="team-name">{teamMember.name}</h3>
      <p className="team-text">{teamMember.bio}</p>
    </div>
  );
}

export default TeamMemberSection;
