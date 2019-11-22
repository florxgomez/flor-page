import React, { Fragment } from "react";
import AngledSection from "../components/angled-section/AngledSection";
import Header from "../components/header/Header";
import "./skills.css";
import love from "../images/love.png";

const skills = () => (
  <Fragment>
    <Header />
    <div className="container">
      <div className="content-section">
        <AngledSection title="My Skills" image={love} />
        <div class="skills">
          <div class="box">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C</li>
            </ul>
            <h3>Web Development</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3: Flexbox, CSS Grid</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </div>
          <div class="box">
            <h3>UI Frameworks</h3>
            <ul>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Semantic UI</li>
            </ul>
            <h3>Databases</h3>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
            <h3>Virtualization</h3>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default skills;
