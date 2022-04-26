import { React } from "react";
import { Link } from "react-router-dom";

import { NavData } from "../Data";
import "./Nav.css";

function NavMenu(props) {
  if (props.showMenu) {
    return (
      <div>
        <div className="nav-menu">
          <ul>
            <li className="nav-item">
              <Link to="/" onClick={props.onCloseMenu}>
                {NavData.homeLabel}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="About" onClick={props.onCloseMenu}>
                {NavData.aboutLabel}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Contact" onClick={props.onCloseMenu}>
                {NavData.contactLabel}
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

export default NavMenu;
