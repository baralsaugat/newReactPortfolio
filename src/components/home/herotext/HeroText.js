import React from "react";

import profilepic from "../../../assets/new.jpg";
import namaste from "../../../assets/namaste.png";
import "./heroText-style.css";

export const HeroText = () => {
  return (
    <div className="main-hero">
      <div className="intro-style">
        <img src={profilepic} alt="profilepic" className="image-file" />
        <hr />

        <div className="intro-text">
          <h2>Saugat Baral </h2>
          <h2>Software Developer</h2>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="side-text">
        <h1>Namaste</h1>
        <p>Thank you, for the visit</p>
        <p>I am much into Full Stack Development.</p>
      </div>
    </div>
  );
};
