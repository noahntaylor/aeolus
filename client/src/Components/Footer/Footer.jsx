import { React } from "react";
import { Link } from "react-router-dom";

import aeolusLogo from "./Images/aeolus.png";
import { FooterData } from "../Data";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="footer-section">
      <div className="footer-main">
        <div className="footer-item">
          <Link to="/">
            <img src={aeolusLogo} className="footer-img" alt="" />
          </Link>
        </div>
        <ul className="footer-links-container">
          <li className="footer-item">
            <Link to="/">{FooterData.homeLabel}</Link>
          </li>
          <li className="footer-item">
            <Link to="About">{FooterData.aboutLabel}</Link>
          </li>
          <li className="footer-item">
            <Link to="Contact">{FooterData.contactLabel}</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="footer-copyright">{FooterData.copyText}</p>
      </div>
    </div>
  );
}

export default Footer;
