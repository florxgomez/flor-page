import React, { Fragment } from "react";
import AngledSection from "../components/angled-section/AngledSection";
import Header from "../components/header/Header";
import "./aboutme.css";
import florImage from "../images/flor.jpeg";

const aboutme = () => (
  <Fragment>
    <Header />
    <div className="container">
      <AngledSection title="About Me" image={florImage} desc="Flor" />
      <div class="about-me">
        <p>
          👋 Hello there, my name is Florencia. <br />
          I'm a self-thought Full-Stack JavaScript Web Developer <br /> with a
          background in Applications Support based in Argentina 🇦🇷
          <br />I have a degree in Information Systems Engineering 👩🏻‍💻
          <br />
          When I'm not coding, I like to play video games and watch movies 🎮 🎬
        </p>
      </div>
    </div>
  </Fragment>
);

export default aboutme;
