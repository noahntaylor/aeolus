import React from "react";
import { StoryData } from "../Data";
import "./Story.css";

function Story() {
  return (
    <div id="story" className="story-section">
      <div className="story-clear-bg">
        <h2 className="story-heading-closer">{StoryData.firstStoryHeading}</h2>
        <p className="story-text">{StoryData.firstStoryParagraph}</p>
      </div>
      <div className="story-surface-blue">
        <h2 className="story-heading">{StoryData.secondStoryHeading}</h2>
        <p className="story-text">{StoryData.secondStoryParagraph}</p>
      </div>
    </div>
  );
}

export default Story;
