import React, { Fragment } from "react";
import AngledSection from "../components/angled-section/AngledSection";
import Header from "../components/header/Header";
import "./skills.css";

const skills = () => (
  <Fragment>
    <Header />
    <div className="container">
      <div className="content-section">
        <AngledSection title="My Skills" />
      </div>
    </div>
  </Fragment>
);

export default skills;
