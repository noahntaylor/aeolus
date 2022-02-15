import React from "react";
import "./Home.css";
import aeolusLogo from "./Images/aeolus.png";

function Home() {
  return (
    <div className="home-container">
      <div id="home" className="home-section">
        <div>
          <img className="aeolusLogo" src={aeolusLogo} alt="" />
        </div>
        <div>
          <h2 className="home-caption">Breathe Easy.</h2>
          <p className="home-descript">
            Aeolus provides robust and one-of a kind solutions to global
            problems. Innovation, at a fair and global price. The health
            equality gap became even more apparent during hte pandemic and
            Aeolus is here to adress it.
          </p>
        </div>
      </div>
      <div className="heartbeat">Heart</div>
    </div>
  );
}

export default Home;
