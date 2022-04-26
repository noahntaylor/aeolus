import React from "react";

import { TeamData } from "../Data";
import TeamMemberSection from "./TeamMemberSection";
import "./Team.css";

function Team() {
  return (
    <div id="team" className="team-section">
      <h2 className="team-heading">{TeamData.teamHeading}</h2>
      <div className="team-members-container">
        {TeamData.teamMembers.map((teamMember, i) => (
          <TeamMemberSection key={i} teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
}

export default Team;
