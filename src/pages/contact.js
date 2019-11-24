import React, { Fragment } from "react";
import AngledSection from "../components/angled-section/AngledSection";
import Header from "../components/header/Header";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const contact = () => (
  <Fragment>
    <Header />
    <div className="container">
      <div className="content-section">
        <AngledSection title="Contact" />
        <div class="contact">
          <p>
            If you would like to contact me, you can send me an email to{" "}
            <span class="email">florxgomez@gmail.com</span>
            <br />
            Or you can visit my social media links below
          </p>
          <ul className="contact-header-social">
            <li className="contact-social-item">
              <a href="https://github.com/florxgomez" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li className="contact-social-item">
              <a href="https://github.com/florxgomez" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li className="contact-social-item">
              <a href="https://codepen.io/greenflor_" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCodepen} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);

export default contact;
