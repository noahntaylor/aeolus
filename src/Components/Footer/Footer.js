import { React } from "react";
import { Link } from "react-scroll";

import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="footer-section">
      <h2 className="footer-heading">Aeolus</h2>
      <ul>
        <li className="footer-item">
          <Link to="home" activeClass="active" spy={true} smooth={true}>
            Home
          </Link>
        </li>
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
        {/* <li className="footer-item">
          <Link to="contact" activeClass="active" spy={true} smooth={true}>
            Contact
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Footer;
