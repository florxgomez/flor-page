import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => (
  <footer>
    <div class="container-footer">
      <div className="footer-items">
        <ul>
          <li className="footer-item">
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li className="footer-item">
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li className="footer-item">
            <FontAwesomeIcon icon={faCodepen} />
          </li>
        </ul>
        <div class="footer-text">Made with &hearts; by Flor</div>
      </div>
    </div>
  </footer>
);

export default Footer;
