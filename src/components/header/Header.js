import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <header className={`top ${this.props.border ? "top-border" : ""}`}>
        <h1 class="heading">
          <Link className="home-link" to="/">
            <span className="icon" role="img" aria-label="flower">
              🌸
            </span>
            <div className="title">Florencia Gomez </div>
          </Link>
        </h1>

        <nav className="nav-menu">
          <div id="menuToggle">
            <span />
            <span />
            <span />
            <input type="checkbox" />
            <ul id="menu" class="menu-header">
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
          </div>
          <ul className="header-social">
            <li className="social-item">
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li className="social-item">
              <a href="https://github.com/florxgomez" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="social-item">
              <a href="https://codepen.io/greenflor_" target="_blank">
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
