import { React, useState } from "react";
import { Link } from "react-scroll";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";

function Nav() {
  // Refactor this later do get font-awesome icons more efficiently
  const menuIcon = (
    <FontAwesomeIcon className="menu-icon" icon={faBars} size="lg" />
  );
  const closeMenuIcon = (
    <FontAwesomeIcon className="menu-icon" icon={faTimes} size="lg" />
  );

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
            Aeolus
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
                    Home
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
                    Product
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
                    Story
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
                    Team
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
                    News
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
                    Contact
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

export default Nav;
