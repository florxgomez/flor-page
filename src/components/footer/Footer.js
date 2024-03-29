import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => (
  <footer>
    <div class="container-footer">
      <div className="footer-items">
        <ul>
          <li className="footer-item">
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/florenciaggomez/"
              style={{ color: '#313131' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://github.com/florxgomez"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#313131' }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://codepen.io/greenflor_"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#313131' }}
            >
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </li>
        </ul>
        <div className="footer-text">
          {' '}
          <p>Florencia Gomez &copy; 2022</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
