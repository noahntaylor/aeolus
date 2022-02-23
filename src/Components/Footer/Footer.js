import { React } from "react";
import { Link } from "react-scroll";
import aeolusLogo from "./Images/aeolus.png";

import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="footer-section">
      <div className="footer-main">
        <div className="footer-item">
          <Link to="home" activeClass="active" spy={true} smooth={true}>
            <img src={aeolusLogo} className="footer-img" alt="" />
          </Link>
        </div>
        <ul className="footer-links-container">
          <li className="footer-item">
            <Link to="product" activeClass="active" spy={true} smooth={true}>
              Product
            </Link>
          </li>
          <li className="footer-item">
            <Link to="story" activeClass="active" spy={true} smooth={true}>
              Story
            </Link>
          </li>
          <li className="footer-item">
            <Link to="team" activeClass="active" spy={true} smooth={true}>
              Team
            </Link>
          </li>
          <li className="footer-item">
            <Link to="news" activeClass="active" spy={true} smooth={true}>
              News
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="footer-copyright">&copy; Aeolus 2022</p>
      </div>
    </div>
  );
}

export default Footer;
