import { React } from "react";
import { Link } from "react-router-dom";
import aeolusLogo from "./Images/aeolus.png";
import "./Footer.css";

function Footer() {
  const homeLabel = "Home";
  const aboutLabel = "About";
  const contactLabel = "Contact";
  const copyText = "\u00A9 Aeolus 2022";

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
            <Link to="/">{homeLabel}</Link>
          </li>
          <li className="footer-item">
            <Link to="About">{aboutLabel}</Link>
          </li>
          <li className="footer-item">
            <Link to="Contact">{contactLabel}</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="footer-copyright">{copyText}</p>
      </div>
    </div>
  );
}

export default Footer;
