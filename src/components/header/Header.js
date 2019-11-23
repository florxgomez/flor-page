import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import flower from '../../images/flower.png';

class Header extends React.Component {
  render() {
    return (
      <header className={`top ${this.props.border ? 'top-border' : ''}`}>
        <h1 class="heading">
          <Link className="home-link" to="/">
            <div className="icon" role="img" aria-label="flower">
              <img src={flower} />
            </div>
            <div className="title">Florencia Gomez </div>
          </Link>
        </h1>

        <nav role="navigation" className="nav-menu">
          <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />

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
              <a
                href="https://www.linkedin.com/in/florenciaggomez/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
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
