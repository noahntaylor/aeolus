import React from "react";
import aeolusLogo from "./Images/aeolus.png";
import "./Home.css";

const Home = () => {
  const homeParagraphText =
    "Aeolus provides robust and one-of a kind solutions to global problems. Innovation, at a fair and global price. The health equality gap became even more apparent during hte pandemic and Aeolus is here to adress it.";
  const aeolusCaption = "Breathe Easy.";

  return (
    <div className="home-container">
      <div id="home" className="home-section">
        <div>
          <img className="aeolusLogo" src={aeolusLogo} alt="" />
        </div>
        <div className="home-text">
          <h2 className="home-caption">{aeolusCaption}</h2>
          <p className="home-descript">{homeParagraphText}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
