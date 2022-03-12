import { React, useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" onClick={closeMenu}>
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

function NavMenu(props) {
  const homeLabel = "Home";
  const aboutLabel = "About";
  const contactLabel = "Contact";

  if (props.showMenu) {
    return (
      <div>
        <div className="nav-menu">
          <ul>
            <li className="nav-item">
              <Link to="/" onClick={props.onCloseMenu}>
                {homeLabel}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="About" onClick={props.onCloseMenu}>
                {aboutLabel}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Contact" onClick={props.onCloseMenu}>
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
}

export default Nav;
