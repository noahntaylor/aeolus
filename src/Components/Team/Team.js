import React from "react";
import katieProfilePic from "./Images/katie.jpeg";
import { TeamMember } from "./TeamMember";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    new TeamMember(
      "Katie Stone",
      "Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators.",
      katieProfilePic
    ),
    new TeamMember(
      "Rachel Tobin",
      "Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators.",
      katieProfilePic
    ),
    new TeamMember(
      "Desiree Van Heerden",
      "Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators.",
      katieProfilePic
    ),
  ];

  return (
    <div id="team" className="team-section">
      <h2 className="team-heading">The Aeolus Team</h2>
      <div className="team-members-container">
        {teamMembers.map((teamMember, i) => (
          <TeamMemberSection key={i} teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
};

const TeamMemberSection = ({ teamMember }) => {
  return (
    <div className="team-member-container">
      <img className="team-member-img" src={teamMember.picture} alt="" />
      <h3 className="team-name">{teamMember.name}</h3>
      <p className="team-text">{teamMember.bio}</p>
    </div>
  );
};

export default Team;
