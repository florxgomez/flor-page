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
          <span role="img" aria-label="hand">👋</span> Hello there, my name is Florencia. <br />
          I'm a self-taught Full-Stack JavaScript Web Developer with a
          background in Applications Support based in Argentina <span role="img" aria-label="Argentina flag">🇦🇷</span>
          <br />I have a degree in Information Systems Engineering <span role="img" aria-label="programming">👩🏻‍💻</span>
          <br />
          When I'm not coding, I like to play video games and watch movies <span role="img" aria-label="videogames">🎮 </span><span role="img" aria-label="movies">🎬</span>
        </p>
      </div>
    </div>
  </Fragment>
);

export default aboutme;
