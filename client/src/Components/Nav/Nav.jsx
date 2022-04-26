import { React, useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavMenu from "./NavMenu";
import { NavData } from "../Data";
import "./Nav.css";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const changeShowMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  const menuIcon = (
    <FontAwesomeIcon className="menu-icon" icon={faBars} size="lg" />
  );
  const closeMenuIcon = (
    <FontAwesomeIcon className="menu-icon" icon={faTimes} size="lg" />
  );

  return (
    <div id="nav" className="nav">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            {NavData.heading}
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

export default Nav;
