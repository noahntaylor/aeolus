import React from "react";
import "./Home.css";
import aeolusLogo from "./Images/aeolus.png";

function Home() {
  return (
    <div id="home" className="home-section">
      <div>
        <img className="aeolusLogo" src={aeolusLogo} alt="" />
      </div>
      <div>
        <h2 className="home-caption">Breathe Easy.</h2>
      </div>
    </div>
  );
}

export default Home;
