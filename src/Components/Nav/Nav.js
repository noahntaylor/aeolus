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

  const [showMenu, setShowMenu] = useState(false);
  const changeShowMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <div id="nav" className="nav">
      <div className="nav-container">
        <div className="logo">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            onClick={changeShowMenu}
          >
            {heading}
          </Link>
        </div>
        <div className="menu-icon" onClick={changeShowMenu}>
          {showMenu ? closeMenuIcon : menuIcon}
        </div>
      </div>
      <NavMenu showMenu={showMenu} onCloseMenu={closeMenu} />
    </div>
  );
}

const NavMenu = (props) => {
  const homeLabel = "Home";
  const productLabel = "Product";
  const storyLabel = "Story";
  const teamLabel = "Team";
  const newsLabel = "News";
  const contactLabel = "Contact";

  if (props.showMenu) {
    return (
      <div>
        <div className="nav-menu">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                onClick={props.onCloseMenu}
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
                onClick={props.onCloseMenu}
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
                onClick={props.onCloseMenu}
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
                onClick={props.onCloseMenu}
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
                onClick={props.onCloseMenu}
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
                onClick={props.onCloseMenu}
              >
                {contactLabel}
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-menu-blur" onClick={props.onCloseMenu}></div>
      </div>
    );
  } else {
    return null;
  }
};

export default Nav;
