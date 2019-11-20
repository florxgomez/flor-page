import React, { Fragment } from "react";
import AngledSection from "../components/angled-section/AngledSection";
import Header from "../components/header/Header";
import "./aboutme.css";

const aboutme = () => (
  <Fragment>
    <Header />
    <div className="container">
      <AngledSection title="About Me" />
      <div className="content-body">I'm Florencia from Argentina</div>
    </div>
  </Fragment>
);

export default aboutme;
