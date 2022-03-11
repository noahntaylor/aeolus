import { React, useState } from "react";
import { Link } from "react-scroll";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";

function Nav() {
  const menuIcon = (
    <FontAwesomeIcon className="menu-icon" icon={faBars} size="lg" />
  );
  const closeMenuIcon = (
    <FontAwesomeIcon className="menu-icon" icon={faTimes} size="lg" />
  );
  const heading = "Aeolus";

  const homeLabel = "Home";
  const productLabel = "Product";
  const storyLabel = "Story";
  const teamLabel = "Team";
  const newsLabel = "News";
  const contactLabel = "Contact";

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div id="nav" className="nav">
      <div className="nav-container">
        <div className="logo">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            onClick={closeMenu}
          >
            {heading}
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? closeMenuIcon : menuIcon}
        </div>
      </div>
      <div>
        {click ? (
          <div>
            <div className="nav-menu">
              <ul>
                <li className="nav-item">
                  <Link
                    to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {homeLabel}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="product"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {productLabel}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="story"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {storyLabel}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="team"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {teamLabel}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="news"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {newsLabel}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {contactLabel}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-menu-blur" onClick={closeMenu}></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// TODO: Move nav menu over to this component!
const NavMenu = (props) => {
  const homeLabel = "Home";
  const productLabel = "Product";
  const storyLabel = "Story";
  const teamLabel = "Team";
  const newsLabel = "News";
  const contactLabel = "Contact";

  return <div></div>;
};

export default Nav;
