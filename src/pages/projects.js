import React, { Fragment } from "react";
import AngledSection from "../components/angled-section/AngledSection";
import Header from "../components/header/Header";
import "./projects.css";

const projects = () => (
  <Fragment>
    <Header />
    <div className="container">
      <div className="content-section">
        <AngledSection title="Projects" />
      </div>
    </div>
  </Fragment>
);

export default projects;
