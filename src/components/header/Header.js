import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./burger.scss";

class Header extends React.Component {
  toggleMenu = () => {
    console.log("Click");
    const header = document.querySelector(".burger-header");
    const menu = document.querySelector(".menu-header");
    menu.classList.toggle("menu");
    header.classList.toggle("menu-opened");
  };
  render() {
    return (
      <header className={`top ${this.props.border ? "top-border" : ""}`}>
        <h1>
          <Link className="home-link" to="/">
            <img
              src="https://s.cdpn.io/profiles/user/2184540/80.jpg?1569736779"
              alt="Flor Icon"
            />
            <span className="title">Florencia Gomez</span>
          </Link>
        </h1>
        <div className="burger-header">
          <div className="burger-container">
            <div id="burger" onClick={this.toggleMenu}>
              <div className="bar topBar" />
              <div className="bar btmBar" />
            </div>
          </div>
        </div>
        <nav className="nav-menu">
          <ul id="menu-header" class="menu-header">
            <li className="menu-item">
              <Link to="/aboutme">About Me</Link>
            </li>
            <li className="menu-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="menu-item">
              <Link to="/skills">My Skills</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="header-social">
            <li className="social-item">
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li className="social-item">
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li className="social-item">
              <FontAwesomeIcon icon={faCodepen} />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
