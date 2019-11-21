import React, { Fragment } from "react";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faCss3
} from "@fortawesome/free-brands-svg-icons";
import "./Project.css";

const Project = props => (
  <Fragment>
    <div class="tech">
      <FontAwesomeIcon
        icon={faJs}
        size="lg"
        style={{ color: "rgb(240, 219, 79)" }}
      />
      <FontAwesomeIcon
        icon={faReact}
        size="lg"
        style={{ color: "rgb(97, 219, 251)" }}
      />
      <FontAwesomeIcon
        icon={faNodeJs}
        size="lg"
        style={{ color: "rgb(60, 135, 58)" }}
      />
    </div>
    <h2>{props.title}</h2>

    <p>{props.desc}</p>
    <div class="box-links">
      <a href="https://social-interact.herokuapp.com/" class="box-link">
        <FontAwesomeIcon icon={faGlobe} size="lg" />
      </a>
      <a
        href="https://github.com/florxgomez/social-app-client"
        class="box-link"
      >
        <FontAwesomeIcon icon={faCode} size="lg" />
      </a>
    </div>
  </Fragment>
);

export default Project;
