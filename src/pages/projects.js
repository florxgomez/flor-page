import React, { Fragment } from "react";
import AngledSection from "../components/angled-section/AngledSection";
import Header from "../components/header/Header";
import "./projects.css";
import projectsImage from "../images/snippet.png";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const projects = () => (
  <Fragment>
    <Header />
    <div className="container">
      <div className="content-section">
        <AngledSection title="Projects" image={projectsImage} alt="Projects" />
        <div class="projects">
          <p>
            Here you can find some of the projects I've been working on lately
          </p>
        </div>
        <section class="boxes">
          <div class="box">
            <div class="tech">
              <FontAwesomeIcon icon={faJs} size="lg" />
              <FontAwesomeIcon icon={faReact} size="lg" />
              <FontAwesomeIcon icon={faNodeJs} size="lg" />
            </div>
            <h2>Social-Interact</h2>

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              malesuada.
            </p>
          </div>
          <div class="box">
            <i class="fas fa-globe fa-4x" />
            <h2>Crwn-Clothing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              malesuada.
            </p>
          </div>
          <div class="box">
            <i class="fas fa-cog fa-4x" />
            <h3>Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              malesuada.
            </p>
          </div>
          <div class="box">
            <i class="fas fa-users fa-4x" />
            <h3>Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              malesuada.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Fragment>
);

export default projects;
