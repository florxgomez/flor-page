import React, { Fragment } from "react";
import AngledSection from "../components/angled-section/AngledSection";
import Header from "../components/header/Header";
import "./projects.css";
import projectsImage from "../images/snippet.png";
import projectList from "../projectList";

import Project from "../components/project/Project";

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
          {projectList.map(proj => (
            <div class="box">
              <Project title={proj.title} />
            </div>
          ))}
          <div class="box">
            <Project title="" desc="" />
          </div>
          <div class="box" />
          <div class="box" />
        </section>
      </div>
    </div>
  </Fragment>
);

export default projects;
