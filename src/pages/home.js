import React, { Fragment } from "react";
import Header from "../components/header/Header";
import "./home.css";

const home = () => (
  <Fragment>
    <Header border />
    <div className="container">
      <div className="content-section">
        <div className="content" />
      </div>
    </div>
  </Fragment>
);

export default home;
