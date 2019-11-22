import React, { Fragment } from "react";
import AngledSection from "../components/angled-section/AngledSection";
import Header from "../components/header/Header";
import "./contact.css";

const contact = () => (
  <Fragment>
    <Header />
    <div className="container">
      <div className="content-section">
        <AngledSection title="Contact" />
        <div class="contact">
          <p>
            If you would like to contact me, please send me an email to{" "}
            <span class="email">florxgomez@gmail.com</span>
            <br />
            Or you can visit my social media links below
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);

export default contact;
