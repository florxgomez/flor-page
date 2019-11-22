import React, { Fragment } from "react";
import Header from "../components/header/Header";
import "./home.css";
import { Link } from "react-router-dom";

const home = () => (
  <Fragment>
    <Header border />
    <div className="container">
      <div className="content-section">
        <div className="content-body">
          <h2>[ Hi, I'm Florencia ]</h2>
          <div class="home">
            <ul class="home-links">
              <Link to="/aboutme">
                <li>
                  About Me <br />
                  <span role="img" aria-label="me">
                    👩🏻
                  </span>
                </li>
              </Link>
              <Link to="/projects">
                <li>
                  Projects
                  <br />
                  <span role="img" aria-label="pc">
                    💻
                  </span>
                </li>
              </Link>
              <Link to="/skills">
                <li>
                  My Skills
                  <br />
                  <span role="img" aria-label="programming">
                    👩🏻‍💻
                  </span>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  Contact
                  <br />
                  <span role="img" aria-label="envelope">
                    📨
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default home;
