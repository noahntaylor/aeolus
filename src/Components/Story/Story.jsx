import React from "react";
import "./Story.css";

function Story() {
  const firstStoryHeading = "Our Story";
  const firstStoryParagraph =
    "Aeolus is currently completing the Genesis Evolution Plus program with the Genesis center for Entrepreneurship. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. project for her degree, along with work from partners Desiree Van Heerden and Rachel Tobin, but Stone decided to keep working on the project herself after graduation. ";
  const secondStoryHeading = "A Global Shortage";
  const secondStoryParagraph =
    "Aeolus has developed a robust and portable ventilator for use in developing countries. Katie Stone, 22, won the Genesis Centre's Pitch and Pick competition with the Aeolus Portable Ventilation System, a prototype that will hopefully provide a cost-effective alternative to traditional COVID-19 ventilators. She said the project started as a capstone design project for her degree, along with work from partners Desiree Van Heerden and Rachel Tobin, but Stone decided to keep working on the project herself after graduation.";

  return (
    <div id="story" className="story-section">
      <div className="story-clear-bg">
        <h2 className="story-heading-closer">{firstStoryHeading}</h2>
        <p className="story-text">{firstStoryParagraph}</p>
      </div>
      <div className="story-surface-blue">
        <h2 className="story-heading">{secondStoryHeading}</h2>
        <p className="story-text">{secondStoryParagraph}</p>
      </div>
    </div>
  );
}

export default Story;
