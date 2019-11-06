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
      Made with &hearts; by Flor
    </div>
  </footer>
);

export default Footer;
