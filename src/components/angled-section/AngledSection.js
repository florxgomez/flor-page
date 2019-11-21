import React from "react";
import "./AngledSection.css";

const AngledSection = props => (
  <div className="angled-section">
    <div className="page-title">
      <h1>{props.title}</h1>
      <div className="border-title" />
      <img class="angled-image" src={props.image} alt={props.desc} />
    </div>
  </div>
);

export default AngledSection;
