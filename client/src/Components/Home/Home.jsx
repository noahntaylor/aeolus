import React from "react";

import aeolusLogo from "./Images/aeolus.png";
import { HomeData } from "../Data";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div id="home" className="home-section">
        <div>
          <img className="aeolusLogo" src={aeolusLogo} alt="" />
        </div>
        <div className="home-text">
          <h2 className="home-caption">{HomeData.aeolusCaption}</h2>
          <p className="home-descript">{HomeData.homeParagraphText}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
